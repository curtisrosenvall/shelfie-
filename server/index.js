const express = require("express");
const controller = require("./controller");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));
massive(process.env.CONNECTION_STRING)
  .then((db) => {
    app.set("db", db);
  })
  .catch((err) => console.log(err));

  app.get('/api/inventory',controller.getInventory)
  app.post('/api/product',controller.addProduct)
  app.delete('/api/inventory/:id',controller.deleteProduct)

const port = 4040;

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});
