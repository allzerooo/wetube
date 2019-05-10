import express from "express";
import routes from "../routes";
import {
  video_home_Controller,
  video_search_Controller
} from "../Controllers/videoController";
import {
  user_getJoin_Controller,
  user_getLogin_Controller,
  user_logout_Controller,
  user_postJoin_Controller,
  user_postLogin_Controller
} from "../Controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, user_getJoin_Controller);
globalRouter.post(routes.join, user_postJoin_Controller);

globalRouter.get(routes.login, user_getLogin_Controller);
globalRouter.post(routes.login, user_postLogin_Controller);

globalRouter.get(routes.home, video_home_Controller);
globalRouter.get(routes.search, video_search_Controller);
globalRouter.get(routes.logout, user_logout_Controller);

export default globalRouter;
