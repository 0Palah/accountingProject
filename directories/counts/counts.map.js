const CountControllers = require("./counts.controller");

const countsActionsMap = [
  {
    name: CountControllers.getAllCounts.name,
    title: "",
    descr: "Get all counts without filters",
  },
  {
    name: CountControllers.createCount.name,
    title: "",
    descr: "For creating counts",
  },
  {
    name: CountControllers.deleteCountById.name,
    title: "",
    descr: "For deleting counts",
  },
  {
    name: CountControllers.updateCountById.name,
    title: "",
    descr: "For updating counts",
  },
];

module.exports = countsActionsMap;
