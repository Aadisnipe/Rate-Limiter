const app = require("./src/app");
const port = 8080;
const server = app.listen(port, () => {
  console.log(`Server is Running at ${port}`);
});
