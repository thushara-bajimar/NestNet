const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/NestNet";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Heyy, this is root!");
});

app.listen(port, () => {
  console.log(`server listening to ${port}`);
});
