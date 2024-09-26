import Car from "../models/car.js";
import TemporaryCar from "../models/temporaryCar.js";

const createCar = async (_id, data) => {
  try {
    const car = new Car(data);
    const createResult = await car.save();
    let deleteTempcar = null;

    if (createResult) {
      deleteTempcar = await TemporaryCar.findByIdAndDelete(_id);
    }

    return {
      createResult,
      deleteTempcar,
    };
  } catch (error) {
    throw new Error("Error creating car and deleting temporary car:", error);
  }
};

const getCarById = async (id) => {
  try {
    const car = await Car.findById(id); // ใช้ findById เพื่อค้นหารถตาม id
    return car;
  } catch (error) {
    throw new Error("Error fetching car");
  }
};

const randomCars = async () => {
  const randomCar = await Car.aggregate([{ $sample: { size: 9 } }]);
  return randomCar;
};

const searchCar = async (searchQuery) => {
  const cars = await Car.find(searchQuery);
  return cars;
};

// lastest car
const carLast = async () => {
  const lastest = await Car.find().sort({ createOn: -1 }).limit(9);
  return lastest;
};

const carBrand = async (brand) => {
  // ฟังก์ชัน asynchronous เพื่อค้นหา car ตาม brand
  return await Car.find({ brand }); // ค้นหา car ที่มี brand ตรงกับค่าที่ส่งเข้ามา
};

const carAll = async () => {
  try {
    const All = await Car.find();
    return All;
  } catch (error) {
    next(error);
  }
};

const deleteCar = async (id) => {
  try {
    const result = Car.findByIdAndDelete(id);
    return result;
  } catch (error) {
    next(error);
  }
};

export default {
  createCar,
  carLast,
  searchCar,
  randomCars,
  getCarById,
  carBrand,
  carAll,
  deleteCar,
};
