const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const app = require("./app");
const { MongoConfig } = require("./configs");

const { PORT } = process.env;

async function start() {
  try {
    const DB_HOST = MongoConfig.getMongoHost(process.env);

    if (DB_HOST) {
      await mongoose.connect(DB_HOST);

      console.log("Database connection successful");
    }

    app.listen(PORT || 5000, () => {
      console.log(`Server running. Use our API on port: ${PORT || 5000}`);
    });
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
}
start();
