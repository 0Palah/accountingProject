const { Schema, model } = require("mongoose");

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    routes: {
      type: Array,
      required: [true, "Routes are required"],
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
