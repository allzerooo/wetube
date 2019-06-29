import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./Controllers/userController";

// passport가 사용할 strategy를 명시
// 원하는 만큼 많은 strategy를 사용할 수 있다
passport.use(User.createStrategy());

// Github Log In
passport.use(
  new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/github/callback"
  }),
  // 사용자가 Github에서 돌아왔을 때 실행되는 함수 ( userController에 구현 )
  githubLoginCallback
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
