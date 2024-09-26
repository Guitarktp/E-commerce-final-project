import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  Product_Id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Car",
  },
  Sell_Price: {
    type: Number,
    required: true,
  },
  Purchase_Price: {
    type: Number,
    required: true,
  },
  Sell_Date: {
    type: Date,
    required: true,
  },
  Purchase_Date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  Promotion: {
    type: Boolean,
    required: true,
    default: false,
  },
  Purchase_User: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // Assuming there is a User model
  },
  Seller_User: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "User", // Assuming there is a User model
  },
  isSuccess: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: true,
  },
  etc: {
    type: String,
  },
  img: {
    type: String,
    default: null,
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
