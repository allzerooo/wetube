// home은 video들을 보여주기 때문에 video 컨트롤러에 위치
export const video_home_Controller = (req, res) => res.render("home");

// search는 video를 탐색하기 때문에 video 컨트롤러에 위치
export const video_search_Controller = (req, res) => res.render("search");

export const video_upload_Controller = (req, res) => res.render('upload');
export const video_detail_Controller = (req, res) => res.render('videoDetail');
export const video_edit_Controller = (req, res) => res.render('editVideo');
export const video_delete_Controller = (req, res) => res.render('deleteVideo');
