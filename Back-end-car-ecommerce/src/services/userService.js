import User from "../models/user.js";
import NotFoundError from "../error/NotFoundError.js";

//API - Register
const createUser = async (data) => {
  const user = new User(data);
  await user.save();
  return user;
};

//API - Forget Password
const getRecoverByEmail = async (Email) => {
  const emailCheck = await User.findOne({ Email: Email });
  return emailCheck;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ Email: email });
  return user;
};

const topPinned = async () => {
  const orderPinned = await User.aggregate([
    { $unwind: "$pinned" },
    {
      $group: {
        _id: "$pinned",
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
  ]);
  return orderPinned;
};

// const editUser = async (_id, data) => {
//   const user = await User.findOneAndUpdate({ _id }, data, { new: true });
//   return user;
// };


const editUser = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  });
  return user;
};

const deleteUserEmail = async (email) => {
  // ฟังก์ชัน asynchronous เพื่อลบ user
  const user = await User.findOneAndDelete({ Email: email }); // ใช้ findOneAndDelete เพื่อลบ user ตาม Email
  return user; // ส่งคืน user ที่ลบ
};

const profileID = async (user_id) => {
  const viewid = await User.findOne({ _id: user_id });
  return viewid;
};

const profile = async () => {
  const view = await User.find();
  return view;
};

const delectcarlist = async (id, pinnedArray) => {
  try {
    const user_id = await User.findById(id);
    if (!user_id) {
      throw new NotFoundError("User Not found");
    }
    const index = user_id.pinned.indexOf(pinnedArray);
    user_id.pinned.splice(index, 1);
    await user_id.save();
    return user_id;
  } catch (error) {
    throw new NotFoundError("Fail delect");
  }
};

export default {
  createUser,
  profileID,
  profile,
  getUserByEmail,
  topPinned,
  editUser,
  getRecoverByEmail,
  deleteUserEmail,
  delectcarlist,
};
