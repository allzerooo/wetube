import { videos } from "../db"

// home은 video들을 보여주기 때문에 video 컨트롤러에 위치
export const video_home_Controller = (req, res) => {
   res.render("home", { pageTitle: "Home", videos });
}

// search는 video를 탐색하기 때문에 video 컨트롤러에 위치
export const video_search_Controller = (req, res) => {
   // const searchingBy == req.query.term : ES6 이전의 코딩 방식 
   // term : input 태그의 name 속성
   // tmer: searchingBy => term에 searchingBy라는 변수명을 할당
   const {query: { term: searchingBy }} = req; 
   res.render("search", { pageTitle: "Search", searchingBy });
};

export const video_upload_Controller = (req, res) => res.render("upload", { pageTitle: "Upload"});
export const video_detail_Controller = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail"});
export const video_edit_Controller = (req, res) => res.render("editVideo", { pageTitle: "Edit Video"});
export const video_delete_Controller = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});
