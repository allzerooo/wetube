import express from "express";
import routes from "../routes";
import { users_Controller, user_detail_Controller, edit_profile_Controller, change_password_Controller } from "../Controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users_Controller);
userRouter.get(routes.userDetail, user_detail_Controller);
userRouter.get(routes.editProfile, edit_profile_Controller);
userRouter.get(routes.changePassword, change_password_Controller);

export default userRouter;