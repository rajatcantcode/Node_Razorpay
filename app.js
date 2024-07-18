const express = require("express");
const app = express();
const port = 3000;

const mainRouter = require("./routes/index");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the mainRouter for all routes
app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Your Server is listening on ${port}`);
});
