const UserModel = require("./user.model");

const findUserById = async (id) => {
  const result = await UserModel.findById(id);
  return result;
};

module.exports = {
  findUserById,
};
