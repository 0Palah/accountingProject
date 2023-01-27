const { Schema, model } = require("mongoose");

const transactionSchema = new Schema(
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
      type: Date,
      default: new Date(),
    },
    type: {
      type: String,
      enum: ["INCOME", "EXPENCE", "TRANSFER"],
    },
    countIdIn: {
      type: String,
    },
    subCountIdIn: {
      type: String,
    },
    countIdOut: {
      type: String,
    },
    subCountIdOut: {
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
    innerDocument: {
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
      type: [
        {
          type: String,
        },
      ],
      eachPath: true,
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

const TransactionModel = model("transaction", transactionSchema);

module.exports = TransactionModel;

// const transactionSchema = new Schema(
//   {
//     athor: {
//       type: SchemaTypes.ObjectId,
//     },
//     creator: {
//       type: SchemaTypes.ObjectId,
//     },
//     auditor: {
//       type: SchemaTypes.ObjectId,
//     },
//     transactionDate: {
//       type: Date,
//       default: new Date(),
//     },
//     type: {
//       type: String,
//       enum: ["INCOME", "EXPENCE", "TRANSFER"],
//     },
//     countIdIn: {
//       type: SchemaTypes.ObjectId,
//     },
//     subCountIdIn: {
//       type: SchemaTypes.ObjectId,
//     },
//     countIdOut: {
//       type: SchemaTypes.ObjectId,
//     },
//     subCountIdOut: {
//       type: SchemaTypes.ObjectId,
//     },
//     categoryId: {
//       type: SchemaTypes.ObjectId,
//     },
//     subCategoryId: {
//       type: SchemaTypes.ObjectId,
//     },
//     document: {
//       type: String,
//     },
//     innerDocument: {
//       type: SchemaTypes.ObjectId,
//     },
//     project: {
//       type: SchemaTypes.ObjectId,
//     },
//     customer: {
//       type: SchemaTypes.ObjectId,
//     },
//     amount: {
//       type: Number,
//     },
//     status: {
//       type: SchemaTypes.ObjectId,
//     },
//     mark: {
//       type: String,
//     },
//     tags: {
//       type: [
//         {
//           type: String,
//         },
//       ],
//       eachPath: true,
//     },
//     comment: {
//       type: String,
//     },
//   },
//   {
//     versionKey: false,
//     timestamps: true,
//   }
// );
