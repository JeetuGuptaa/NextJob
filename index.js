const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const databaseConnection = require("./db/database");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));

databaseConnection();

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${port}`);
});
