const express = require("express");
const connectToDatabase = require("./database/database");
const cors = require("cors");
require("dotenv").config({path:"./config.env"});
const path = require("path");
const app = express();
const PORT = 4000;
const databaseUri="mongodb://localhost:27017/fleksa"
connectToDatabase(`${databaseUri}`);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [      
      "http://127.0.0.1:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname,'../frontend/dist')))
app.use("/api/v1/tables", require("./routes/reserveTable"));
app.use("/api/v1/orders", require("./routes/order"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
