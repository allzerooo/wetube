// import express
const express = require('express');
// execute express
const app = express();

const PORT = 4000;


function handleListening() {
   console.log(`Listening on: http://localhost:${PORT}`);
}

// 함수는 2가지(request object, response object)를 호출
function handleHome(req, res) {
   res.send("welcome");
}

function handleProfile(req, res) {
   res.send("You are on my profile");
}


// "/"에 접근하면 handleHome 함수를 호출 
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);