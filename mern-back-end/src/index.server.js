const express =require('express');
const env=require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');
const { application } = require('express');
const categoryRoutes = require('./routes/category');

env.config();

//mongodb connection 
//mongodb+srv://root:<password>@cluster0.4ikqksv.mongodb.net/?retryWrites=true&w=majority

mongoose
  .connect(
    `mongodb+srv://root:abcd1234@cluster0.4ikqksv.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
      
    },err => {
      if(err) throw err;
    console.log("Database connected");
  });


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);


//app.get('/', (req,res,next)=>{
//res.status(200).json({
//  message: 'Hello from Server'
//});
//});

//app.post('/data', (req,res,next)=>{
//res.status(200).json({
//  message: req.body
//});
//});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});