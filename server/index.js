const express = require("express");
const app = express();
const cors = require("cors");
const api = require("./api");
const port = 8080;
const { products } = require("./mocks/products");
const { stockPrice } = require("./mocks/stock-price");

app.use(cors());

// app.get("/api/products", api.getProducts);
// app.get("/api/product/:id", api.getProductById);
// app.get("/api/stock-price/:code", api.getStockPriceByCode);

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/product/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send(products.find((product) => product.id === id));
});

app.get("/api/stock-price/:code", (req, res) => {
  const code = parseInt(req.params.code);
  res.send(stockPrice[code]);
});

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
});
