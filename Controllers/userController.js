// for global router
export const user_join_Controller = (req, res) => res.render("join");
export const user_login_Controller = (req, res) => res.render("login");
export const user_logout_Controller = (req, res) => res.render("logout");

// for user router
export const user_detail_Controller = (req, res) => res.render("userDetail");
export const edit_profile_Controller = (req, res) => res.render("editProfile");
export const change_password_Controller = (req, res) => res.render("changePassword");