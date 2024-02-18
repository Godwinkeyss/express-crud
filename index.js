const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ProductRouter = require('./routes/productRouter.js');
const app = express();

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.Mongo_Db)
  .then(() => {
    console.log('db connection successfully');
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/api/products', ProductRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
