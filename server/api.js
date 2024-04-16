const { products } = require("./mocks/products");
const { stockPrice } = require("./mocks/stock-price");
const api = {
  getProducts: (req, res) => {
    res.send(products);
  },

  getProductById: (req, res) => {
    const id = parseInt(req.params.id);
    res.send(products.find((product) => product.id === id));
  },

  getStockPriceByCode: (req, res) => {
    const code = parseInt(req.params.code);
    res.send(stockPrice[code]);
  },
};

module.exports = api;
