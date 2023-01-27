const { Schema, model } = require("mongoose");

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    routes: {
      type: [
        {
          type: String,
          unique: true,
        },
      ],
      default: [],
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const RoleModel = model("role", roleSchema);

module.exports = RoleModel;
