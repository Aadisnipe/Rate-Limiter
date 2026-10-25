const products = require("../utils/products.json");
exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
};
