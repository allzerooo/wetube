import express from "express";
import routes from "../routes";
import {
  videoDetail,
  postUpload,
  getEdit,
  videoDelete,
  getUpload,
  postEdit
} from "../Controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEdit);
videoRouter.post(routes.editVideo(), postEdit);

videoRouter.get(routes.deleteVideo(), videoDelete);

export default videoRouter;
