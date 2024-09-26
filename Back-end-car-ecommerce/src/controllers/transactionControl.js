import transactionService from "../services/transactionService.js";
import carService from "../services/carService.js";
import carListService from "../services/carListService.js";

const deleteTransaction = async (req, res, next) => {
  const id = req.params;
  const result = await transactionService.deleteTransaction(id);
  res.status(200).json({ message: "delete complete", data: result });
};

// Order Complete
// const createTransaction = async (req, res, next) => {

//   try {
//     const { Product_Id, Purchase_User } = req.body;
//     const transaction = await transactionService.createTransaction({Product_Id, Purchase_User});

//     res.status(201).json({message: "Order Complete", transaction});
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const createTransaction = async (req, res, next) => {
  try {
    const {
      Product_Id,
      Sell_Price,
      Purchase_Price,
      Sell_Date,
      Purchase_User,
      Seller_User,
      address,
      etc,
      pickup,
      img,
    } = req.body;
    const data = {
      Product_Id,
      Sell_Price,
      Purchase_Price,
      Sell_Date,
      Purchase_User,
      Seller_User,
      address,
      etc,
      pickup,
      img,
    };
    const transaction = await transactionService.createTransaction(data);

    if (transaction) {
      const deleteTransaction = await carService.deleteCar(Product_Id);
      const deleteFav = await carListService.delAll(Product_Id);
      res.status(201).json({
        message: "complete",
        data: transaction,
        del: deleteTransaction,
        delall: deleteFav,
      });
    } else {
      res.status(404).json({
        message: "Failed",
      });
    }
  } catch (error) {
    next(error);
  }
};

// แก้ไขวันที่รับรถ
const patchUpdate = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const update = await transactionService.updateTransaction(id, updateData);
    if (!update) {
      res.status(400).json({ message: "Not found id" });
    }
    res.status(200).json(update);
  } catch (error) {
    next(error);
  }
};

const getTransaction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await transactionService.getTransactionsByUser(id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default {
  deleteTransaction,
  createTransaction,
  patchUpdate,
  getTransaction,
};
