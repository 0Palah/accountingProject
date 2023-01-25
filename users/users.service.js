const UserModel = require("./user.model");

const findUserById = async (id) => {
  return await UserModel.findById(id);
};

const findUserByIdAndUpdate = async (id, updateData) => {
  return await UserModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

module.exports = {
  findUserById,
  findUserByIdAndUpdate,
};
