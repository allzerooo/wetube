import passport from "passport";
import routes from "../routes";
import User from "../models/User";

// for global router
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      // postLogin에서 바로 로그인을 시켜주기위해
      // username(email)과 password 정보를 postLogin으로 보냄
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
    // To Do : Log user in
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = passport.authenticate("local", {
  // 실패했다면
  failureRedirect: routes.login,
  // 성공했다면
  successRedirect: routes.home
});

export const logout = (req, res) => {
  // To Do : Process Log Out
  res.redirect(routes.home);
};

// for user router
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
