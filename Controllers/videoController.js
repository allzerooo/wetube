import routes from "../routes"
import Video from "../models/Video";

// home은 video들을 보여주기 때문에 video 컨트롤러에 위치
export const video_home_Controller = async (req, res) => {
   try {
      // Database에 있는 모든 Video를 가져옴
      const videos = await Video.find({});
      res.render("home", { pageTitle: "Home", videos });
   } catch(error) {
      console.log(error);
      res.render("home", { pageTitle: "Home", videos: [] });
   }
}

// search는 video를 탐색하기 때문에 video 컨트롤러에 위치
export const video_search_Controller = (req, res) => {
   // const searchingBy == req.query.term : ES6 이전의 코딩 방식 
   // term : input 태그의 name 속성
   // tmer: searchingBy => term에 searchingBy라는 변수명을 할당
   const {query: { term: searchingBy }} = req; 
   res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const video_getUpload_Controller = (req, res) => res.render("upload", { pageTitle: "Upload"});

export const video_postUpload_Controller = async (req, res) => {
   const {
      body: { title, description },
      file: { path }
   } = req;

   const newVideo = await Video.create({
      fileUrl: path,
      title,
      description
   });
   res.redirect(routes.videoDetail(newVideo.id));
}

export const video_detail_Controller = async (req, res) => {
   const {
      params: {id}
   } = req;
   try {
      const video = await Video.findById(id);
      res.render("videoDetail", { pageTitle: "Video Detail", video });
   } catch (error) {
      console.log(error);
      res.redirect(routes.home);
   }
};
export const video_getEdit_Controller = async (req, res) => {
   const {
      params: {id}
   } = req;
   try {
      const video = await Video.findById(id);
      res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
   } catch(error) {
      res.redirect(routes.home);
   }
}

export const video_postEdit_Controller = async (req, res) => {
   const {
      params: {id},
      body: {title, description}
   } = req;
   try {
      await Video.findOneAndUpdate({ _id: id}, {title, description});
      res.redirect(routes.videoDetail(id));
   } catch(error) {
      res.redirect(routes.home);
   }
}

export const video_delete_Controller = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});
