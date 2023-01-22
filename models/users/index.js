const { Schema, model } = require("mongoose");
const emailRegexp = require("../../helpers/validateEmail");

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: [true, "Set password for user"],
    },
    role: {
      type: String,
      enum: ["user", "moderator", "admin"],
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
    // avatarURL: {
    //   type: String,
    //   required: [true, "Avatar is required"],
    // },
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

const User = model("user", userSchema);

module.exports = User;
