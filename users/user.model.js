const { Schema, model } = require("mongoose");
const emailRegexp = require("../helpers/validateEmail");

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    hashPassword: {
      type: String,
      minlength: 8,
      required: [true, "Set password for user"],
    },
    role: {
      type: String,
      enum: ["user", "moderator", "administrator"],
      default: "user",
    },
    token: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
    status: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("user", userSchema);

module.exports = UserModel;
