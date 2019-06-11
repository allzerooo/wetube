import passport from "passport";
import User from "./models/User";

// passport가 사용할 strategy를 명시
// 원하는 만큼 많은 strategy를 사용할 수 있다
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
