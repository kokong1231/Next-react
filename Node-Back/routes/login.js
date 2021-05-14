const express = require('express');
const server = express();
const bcrypt = require("bcrypt");

const { User } = require("../models/User");

server.post("*/signin", (req,res) => {
    console.log(req.query);
    console.log(req.body);
    var email = req.query.email || req.body.email;
    var pw = req.query.password || req.body.password;
    console.log('input email >> ' + email);
    console.log('input pw    >> ' + pw);
  
    User.findOne({email: email},{email:1, password:1, name:1}, function(err, user){
      if(err) return res.status(500).json({error: err});
      if(user === null) return res.status(404).json({error: 'not found email'});
  
      // 입력한 비밀번호를 원래있던 salt값 + 해쉬값 비교 -> true/false 반환
      bcrypt.compare(pw, user.password, function(err, result){
        if(result){
          console.log("Login success !");
          // res.send('<script type="text/javascript">alert("로그인 성공"); history.back();</script>')
          return res.json({success: true})
        }else{
          console.log("wrong pw");
          // return res.status(404).json({error: 'wrong password.'});
          // res.json({error: 'wrong password.'});
          // res.send('<script type="text/javascript">alert("비밀번호가 틀립니다."); history.back();</script>')
          return res.json({success: false, err})
        }
      })
    })
  })



module.exports = server;
