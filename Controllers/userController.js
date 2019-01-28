// for global router
export const user_join_Controller = (req, res) => res.send("join");
export const user_login_Controller = (req, res) => res.send("login");
export const user_logout_Controller = (req, res) => res.send("logout");

// for user router
export const users_Controller = (req, res) => res.send("users");
export const user_detail_Controller = (req, res) => res.send("user detail");
export const edit_profile_Controller = (req, res) => res.send("edit profile");
export const change_password_Controller = (req, res) => res.send("change password");