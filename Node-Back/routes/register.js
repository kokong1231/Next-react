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



// 회원 조회 부분 


// GET SINGLE ID
server.get('/reg/:user_id', function(req, res){
  User.findOne({_id: req.params.user_id}, {_id: 1, name: 1, email: 1, lastName: 1},  function(err, user){
      if(err) return res.status(500).json({error: err});
      if(user.length === 0) return res.status(404).json({error: 'User not found'});
      res.json(user);
  })
});


// GET USER BY NAME
server.get('/reg/name/:name', function(req, res){
  User.find({name: req.params.name}, {_id: 1, name: 1, email: 1, lastName: 1},  function(err, user){
      if(err) return res.status(500).json({error: err});
      if(user.length === 0) return res.status(404).json({error: 'User not found'});
      res.json(user);
  })
});

// GET USER BY EMAIL
server.get('/reg/email/:email', function(req, res){
  User.find({email: req.params.email}, {_id: 1, name: 1, email: 1, lastName: 1},  function(err, user){
      if(err) return res.status(500).json({error: err});
      if(user.length === 0) return res.status(404).json({error: 'User not found'});
      res.json(user);
  })
});

// GET ALL USERS
server.get("/reg", (req,res) => {
  User.find(function (err, result){
    if(err) return res.status(500).send({error: 'database failure'})
    res.json(result);
  })
})

// UPDATE USER
server.put('/reg/:user_id', function(req, res){
  User.update({ _id: req.params.user_id }, { $set: req.body }, function(err, output){
      if(err) res.status(500).json({ error: 'database failure' });
      console.log(output);
      if(!output.n) return res.status(404).json({ error: 'User not found' });
      res.json( { message: 'User updated' } );
  })
});


// DELETE USER
server.delete('/reg/:book_id', function(req, res){
  User.remove({ _id: req.params.user_id }, function(err, output){
      if(err) return res.status(500).json({ error: "database failure" });
      res.status(204).end();
  })
});

// 회원 조회 부분 끝



module.exports = server;