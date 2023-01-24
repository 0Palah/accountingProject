const { Schema, model, SchemaTypes } = require("mongoose");

const transactionsSchema = new Schema(
  {
    athor: {
      type: String,
    },
    creator: {
      type: String,
    },
    auditor: {
      type: String,
    },
    transactionDate: {
      type: String,
    },
    type: {
      type: String,
      enum: ["income", "expense", "transfer"],
    },
    countId: {
      type: String,
    },
    subCountId: {
      type: String,
    },
    transferCountId: {
      type: String,
    },
    transferSubCountIdTo: {
      type: String,
    },
    categoryId: {
      type: String,
    },
    subCategoryId: {
      type: String,
    },
    document: {
      type: String,
    },
    project: {
      type: String,
    },
    customer: {
      type: String,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
    },
    mark: {
      type: String,
    },
    tags: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Transactions = model("transaction", transactionsSchema);

module.exports = Transactions;
