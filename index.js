const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const rfs = require("rotating-file-stream");
const path = require("path");
const cors = require("cors");
const router = require("./src/routes/route");
require("dotenv").config();
// require("./src/config/db.config");
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const isProduction = process.env.NODE_ENV === "production";
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

app.use(
  isProduction ? morgan("combined", { stream: accessLogStream }) : morgan("dev")
);

const port = process.env.PORT || 3000;
router(app);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
