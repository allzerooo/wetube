// Grobal
const HOME = "/";          // 비디오들이 전달됨
const JOIN = "/join";      // user와 관련
const LOGIN = "/login";    // user와 관련
const LOGOUT = "/logout";  // user와 관련
const SEARCH = "/search";  // 비디오 검색

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";


const routes = {
   home: HOME,
   join: JOIN,
   login: LOGIN,
   logout: LOGOUT,
   search: SEARCH,
   users: USERS,
   userDetail: id => {
      if (id) {
         return `/users/${id}`;
      } else {
         return USER_DETAIL;
      }
   },
   editProfile: EDIT_PROFILE,
   changePassword: CHANGE_PASSWORD,
   videos: VIDEOS,
   upload: UPLOAD,
   videoDetail: VIDEO_DETAIL,
   editVdeo: EDIT_VIDEO,
   deleteVideo: DELETE_VIDEO
}

export default routes;