const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors package
const db = require("./models");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth");

const app = express();
app.use(bodyParser.json());

// Allow requests from Angular app
app.use(cors());

// Define your routes
app.use("/auth", authRoutes);

app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", userId: req.userId });
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
