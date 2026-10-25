const express = require("express");
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");
const app = express();
//endpoints
app.use("/api/v1/products", productRouter);
app.use("/api/v1/user", userRouter);
module.exports = app;
