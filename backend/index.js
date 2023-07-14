const express = require("express");
const connectToDatabase = require("./database/database");
const cors = require("cors");
require("dotenv").config({path:"./config.env"});
const path = require("path");
const app = express();
const PORT = 4000;
connectToDatabase(process.env.URI);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [      
      "https://resturant-fleksa.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1/tables", require("./routes/reserveTable"));
app.use("/api/v1/orders", require("./routes/order"));

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
