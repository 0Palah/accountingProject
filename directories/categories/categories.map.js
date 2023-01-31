const CategoryControllers = require("./categories.controller");

const categoriesActionsMap = [
  {
    name: CategoryControllers.getAllCategories.name,
    title: "",
    descr: "Get all categories without filters",
  },
  {
    name: CategoryControllers.createCategory.name,
    title: "",
    descr: "For creating categories",
  },
  {
    name: CategoryControllers.deleteCategoryById.name,
    title: "",
    descr: "For deleting categories",
  },
  {
    name: CategoryControllers.updateCategoryById.name,
    title: "",
    descr: "For updating categories",
  },
];

module.exports = categoriesActionsMap;
