import express from "express";
import routes from "../routes";
import { video_detail_Controller, video_upload_Controller, video_edit_Controller, video_delete_Controller } from "../Controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, video_upload_Controller);
videoRouter.get(routes.videoDetail, video_detail_Controller);
videoRouter.get(routes.editVdeo, video_edit_Controller);
videoRouter.get(routes.deleteVideo, video_delete_Controller);


export default videoRouter;