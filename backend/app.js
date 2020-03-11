const express = require("express"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  dotenv = require("dotenv"),
  app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser());

require("./src/routes/Authentication")(app);
require("./src/routes/Users")(app);

app.get("/", (req, res) => {
  res.send("It's alive!");
});

app.listen(process.env.PORT, () => {
  console.log(
    `The server has started on ${process.env.API_BASE_URL + process.env.PORT}`
  );
});
