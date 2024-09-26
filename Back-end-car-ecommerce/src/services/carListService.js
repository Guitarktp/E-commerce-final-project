import User from "../models/user.js";
import Car from "../models/car.js";

const getcar = async (id) => {
  const newId = id.id;
  const user = await User.findById(newId);
  const cars = await Car.find({ _id: { $in: user.pinned } });
  return cars;
};

const togglePin = async (userId, carId, action) => {
  const user = await User.findById(userId);

  if (action === "add" && !user.pinned.includes(carId)) {
    user.pinned.push(carId);
  } else if (action === "remove" && user.pinned.includes(carId)) {
    user.pinned = user.pinned.filter((id) => id !== carId);
  }

  await user.save();
  return user;
};

const delAll = async (carId) => {
  // Ensure the carId is an ObjectId

  // Update all users by removing the carId from their pinned arrays
  const result = await User.updateMany(
    { pinned: { $in: [carId] } },
    { $pull: { pinned: carId } }
  );

  console.log(`${result.modifiedCount} user(s) updated`);
};

export default { getcar, togglePin, delAll };
