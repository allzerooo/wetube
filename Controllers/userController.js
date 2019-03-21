import routes from "../routes";

// for global router
export const user_getJoin_Controller = (req, res) => {
   res.render("join", { pageTitle: "Join"});
};

export const user_postJoin_Controller = (req, res) => {
   console.log(res);
   const {
      body: { name, email, password, verify_password }
   } = req;

   if ( password !== verify_password ) {
      res.status(400);
      res.render("join", { pageTitle: "Join"});
   } else {
      // To Do : Register User
      // To Do : Log user in
      res.redirect(routes.home);
   }
};


export const user_getLogin_Controller = (req, res) => res.render("login", { pageTitle: "Login"});

export const user_postLogin_Controller = (req, res) => {
   res.redirect(routes.home);
}

export const user_logout_Controller = (req, res) => {
   // To Do : Process Log Out
   res.redirect(routes.home);
}


// for user router
export const user_detail_Controller = (req, res) => res.render("userDetail", { pageTitle: "User Detail"});
export const edit_profile_Controller = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile"});
export const change_password_Controller = (req, res) => res.render("changePassword", { pageTitle: "Change Password"});