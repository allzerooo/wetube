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
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEdit);
videoRouter.post(routes.editVideo(), onlyPrivate, postEdit);

videoRouter.get(routes.deleteVideo(), onlyPrivate, videoDelete);

export default videoRouter;
