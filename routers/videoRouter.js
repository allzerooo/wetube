import express from "express";
import routes from "../routes";
import { video_detail_Controller, video_postUpload_Controller, video_getEdit_Controller, video_delete_Controller, video_getUpload_Controller, video_postEdit_Controller } from "../Controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, video_getUpload_Controller)
videoRouter.post(routes.upload, uploadVideo, video_postUpload_Controller);

videoRouter.get(routes.videoDetail(), video_detail_Controller);

videoRouter.get(routes.editVideo(), video_getEdit_Controller);
videoRouter.post(routes.editVideo(), video_postEdit_Controller)

videoRouter.get(routes.deleteVideo, video_delete_Controller);


export default videoRouter;