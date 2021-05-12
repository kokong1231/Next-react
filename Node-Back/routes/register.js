const express = require('express');
const server = express();

// MongoDB 접근 Model 파일 Import
const { User } = require("../models/User");


server.post("/reg", (req, res) => {
    //회원가입을 할때 필요한것
    //post로 넘어온 데이터를 받아서 DB에 저장해준다
    const user = new User(req.body);

    console.log("들어옴");

    user.save((err, userInfo) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
    });
  });


module.exports = server;