const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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

app.get("/listings", async(req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", {allListings});
});

app.get("/listings/:id", async(req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// app.get("/testListing", async(req, res) => {
//   let sampleListing = new Listing({
//     title: "My new Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India"
//   })
//   await sampleListing.save();
//   console.log("Sample was saved");
//   res.send("successful testing");
// })

app.listen(port, () => {
  console.log(`server listening to ${port}`);
});
