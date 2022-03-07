// require express
const express = require("express");
const PORT = process.env.port || 3001;
const app = express();

// require routes for HTML and API
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// middleware - express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
