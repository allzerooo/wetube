import routes from "./routes";

// local 변수를 global 변수로 사용하도록 만들어주는 middleware를 생성
export const localsMiddleware = (req, res, next) => {
   res.locals.siteName = "WeTube";
   res.locals.routes = routes;
   res.locals.user = {
      isAuthenticated: true,
      id: 1
   };
   next();
};