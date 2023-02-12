const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/node-test?authSource=admin&ssl=false"
);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(`Error in connection database ==>`, error);
});

database.once("connected", (error) => {
  console.log(`Database Connected`);
});
