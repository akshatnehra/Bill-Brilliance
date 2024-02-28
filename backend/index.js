const express = require("express");
const app = express();
const config = require("./src/config/config.js");
const userRoutes = require("./src/routes/User.routes.js");
const widgetRoutes = require("./src/routes/Widget.routes.js");
const templateRoutes = require("./src/routes/Template.routes.js");
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", userRoutes);
app.use("/api/widgets", widgetRoutes);
app.use("/api/templates", templateRoutes);

app.listen(config.port, () => {
  console.log("Server is running on port 3000");
});
