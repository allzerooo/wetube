import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

// 최신 JavaScript ES6으로 변경 ( errow function )
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
// 함수는 2가지(request object, response object)를 호출
const handleHome = (req, res) => res.send("welcome");
const handleProfile = (req, res) => res.send("You are on my profile");


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// "/"에 접근하면 handleHome 함수를 호출 
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);