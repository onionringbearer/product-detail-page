const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
});
