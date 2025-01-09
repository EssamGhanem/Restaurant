const express = require("express");
const connect = require("./db/connectDB");
const app = express();

app.use(express.json());

require('dotenv').config()

const cors = require('cors');
app.use(cors());


// routes
const authRouter = require('./routes/auth');
const cartRouter = require('./routes/cart');
const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category');

app.use('/api/auth', authRouter );
app.use('/api/cart', cartRouter );
app.use('/api/product', productRouter );
app.use('/api/category',categoryRouter);




app.listen(3002, () => {
  connect();
  console.log("server in running on port 3002");
});
