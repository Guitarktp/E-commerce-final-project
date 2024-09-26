import temporaryCarService from "../services/temporaryCarService.js";
import NotFoundError from "../error/NotFoundError.js";
import TemporaryCar from "../models/temporaryCar.js";

const getCarById = async (req, res, next) => {
  try {
    const { id } = req.params; //ถ้าอยากเช็คให้
    const car = await temporaryCarService.getCarById(id); //carService.getCarById จะไปตามหาค่าที่เราส่งไปขอ
    res.status(200).json({ car });
  } catch (error) {
    next(error);
  }
};

//delete car temp
const deleteCarById = async (req, res, next) => {
  const id = req.params;
  const result = await temporaryCarService.deleteCarById(id);
  res.status(200).json({ message: "delete car complete", data: result });
};
// get all
const getAllCars = async (req, res, next) => {
  try {
    const cars = await temporaryCarService.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
};

// post car temp
const postCar = async (req, res, next) => {
  try {
    const {
      headline,
      brand,
      model,
      type,
      year,
      mileage,
      color,
      fuel,
      enginecap,
      cushion,
      seat,
      gear,
      price,
      pnumber,
      address,
      additionalInfo,
      file1,
      file2,
      file3,
      file4,
      file5,
      file6,
      Seller_User,
      latitude,
      longitude,
    } = req.body;

    if (!file1 || !file2 || !file3 || !file4 || !file5 || !file6) {
      return res.status(400).json({ message: "Please put all image" });
    }

    if (
      !headline ||
      !brand ||
      !model ||
      !type ||
      !year ||
      !mileage ||
      !color ||
      !fuel ||
      !enginecap ||
      !cushion ||
      !seat ||
      !gear ||
      !price ||
      !pnumber ||
      !address ||
      !additionalInfo ||
      !latitude ||
      !longitude
    ) {
      return res.status(400).json({ message: "Please fill all input" });
    }
    const carTem = await temporaryCarService.createCartem({
      headline,
      brand,
      model,
      type,
      year,
      mileage,
      color,
      fuel,
      enginecap,
      cushion,
      seat,
      gear,
      price,
      pnumber,
      address,
      additionalInfo,
      file1,
      file2,
      file3,
      file4,
      file5,
      file6,
      Seller_User,
      latitude,
      longitude,
    });
    res.status(200).json(carTem);
  } catch (error) {
    next(error);
  }
};

export default { getCarById, deleteCarById, getAllCars, postCar };
