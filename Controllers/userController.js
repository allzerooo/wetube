// for global router
export const user_join_Controller = (req, res) => res.render("join", { pageTitle: "Join"});
export const user_login_Controller = (req, res) => res.render("login", { pageTitle: "Login"});
export const user_logout_Controller = (req, res) => res.render("logout", { pageTitle: "Logout"});

// for user router
export const user_detail_Controller = (req, res) => res.render("userDetail", { pageTitle: "User Detail"});
export const edit_profile_Controller = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile"});
export const change_password_Controller = (req, res) => res.render("changePassword", { pageTitle: "Change Password"});