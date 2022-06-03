const express =require('express');
const env=require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

env.config();

//mongodb connection 
//mongodb+srv://root:<password>@cluster0.4ikqksv.mongodb.net/?retryWrites=true&w=majority

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.4ikqksv.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(bodyParser());

app.get('/', (req,res,next)=>{
  res.status(200).json({
      message: 'Hello from Server'
  });
});

app.post('/data', (req,res,next)=>{
  res.status(200).json({
      message: req.body
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});