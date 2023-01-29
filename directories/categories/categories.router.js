const express = require("express");
const { controllerWrapper } = require("../../helpers");
const middlewares = require("../../middlewares");
const CategoryDto = require("./category.dto");
const CategoriesController = require("./categories.controller");

const CategoryRouter = express.Router();

CategoryRouter.get(
  "/getAll",
  // middlewares.authenticate,
  controllerWrapper(CategoriesController.getAllCategories)
);

CategoryRouter.post(
  "/create",
  // middlewares.authenticate,
  middlewares.validateBody(CategoryDto.createCategoryDto),
  controllerWrapper(CategoriesController.createCategory)
);

CategoryRouter.delete(
  "/delete/:id",
  // middlewares.authenticate,
  controllerWrapper(CategoriesController.deleteCategoryById)
);

CategoryRouter.patch(
  "/update/:id",
  // middlewares.authenticate,
  middlewares.validateBody(CategoryDto.updateCategoryDto),
  controllerWrapper(CategoriesController.updateCategoryById)
);

module.exports = CategoryRouter;
