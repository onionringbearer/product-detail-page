const express = require("express");
const app = express();
const cors = require("cors");
const api = require("./api");
const port = 8080;

app.use(cors());

app.get("/api/products", api.getProducts);
app.get("/api/product/:id", api.getProductById);
app.get("/api/stock-price/:code", api.getStockPriceByCode);

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
});
