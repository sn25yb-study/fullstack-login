"use strict";

// 모듈 
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 

// 라우팅
const home = require("./src/routes/home");

// 앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// URL을 통ㅐ 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결 
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); // user -> 미들웨어를 등록해주는 메서드

module.exports = app;
