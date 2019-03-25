import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(
   process.env.MONGO_URL,
   // mongoose configuration
   {
      useNewUrlParser: true,
      useFindAndModify: false
   }   
);

const db = mongoose.connection;

// connection 성공 여부 확인
const handleOpen = () => console.log("Connected to DB");

// error 전달
const handleError = (error) => console.log(`Error on DB Connection : ${error}`);

db.once("open", handleOpen);
db.once("error", handleError);