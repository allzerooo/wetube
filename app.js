import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

// 함수는 2가지(request object, response object)를 호출
const handleHome = (req, res) => res.send("welcome");
const handleProfile = (req, res) => res.send("You are on my profile");


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// "/"에 접근하면 handleHome 함수를 호출 
app.use("/", userRouter);
app.get("/profile", handleProfile);

export default app;