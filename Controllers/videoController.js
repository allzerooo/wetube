// home은 video들을 보여주기 때문에 video 컨트롤러에 위치
export const video_home_Controller = (req, res) => res.send("Home");

// search는 video를 탐색하기 때문에 video 컨트롤러에 위치
export const video_search_Controller = (req, res) => res.send("Search");

export const videos_Controller = (req, res) => res.send('Videos');
export const video_upload_Controller = (req, res) => res.send('Video Upload');
export const video_detail_Controller = (req, res) => res.send('Video Detail');
export const video_edit_Controller = (req, res) => res.send('Edit video');
export const video_delete_Controller = (req, res) => res.send('Delete video');
