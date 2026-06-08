const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

const MONGO_URL = process.env.MONGO_URL;

console.log("Starting Catalog Service...");
console.log("PORT:", PORT);
console.log("MONGO_URL:", MONGO_URL);

if (!MONGO_URL) {

    console.log("FATAL ERROR: MONGO_URL missing");

    process.exit(1);

}

mongoose.connect(MONGO_URL)

.then(() => {

    console.log("Connected to MongoDB");

})

.catch((error) => {

    console.log("MongoDB Connection Failed");

    console.log(error);

    process.exit(1);

});

app.get("/", (req, res) => {

    res.send("Catalog Service Running");

});

app.listen(PORT, () => {

    console.log(`Application listening on port ${PORT}`);

});
