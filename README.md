# WeTube

Cloning Youtube with VanillaJS and NodeJS



## Contents

- Home
- Join
  - with Github and Facebook
- Login
  - with Github and Facebook
  - Logout은 페이지가 아니라 logout주소로 접근하면 다른 페이지로 redirect 되도록
  - session 저장 → ```connect-mongo```를 사용
- Search
- User Detail
- Edit Profile
- Change Password
- Upload Video
- Video Detail
- Edit Video

* Post security
  * middleware를 사용해서 route로의 출입을 제한