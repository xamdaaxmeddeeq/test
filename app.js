const express = require("express")
const indexRouter = require("./Router/index")

// Express Server
const app = express();
app.listen(1700);
console.log("Our sever is running...");

// Ejs
app.set("view engine", "ejs");

// setting up the public
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);

