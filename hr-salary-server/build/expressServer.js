"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Administrator on 2018/4/13 0013.
 */
var express = require("express");
var users_1 = require("./users");
var users = [
    new users_1.User(1, '张三1', 20, 1, 'zhangsan1', '1880000000', '666@email.com'),
    new users_1.User(2, '张三2', 20, 1, 'zhangsan2', '1880000000', '666@email.com'),
    new users_1.User(3, '张三3', 20, 1, 'zhangsan3', '1880000000', '666@email.com'),
    new users_1.User(4, '张三4', 20, 1, 'zhangsan4', '1880000000', '666@email.com'),
    new users_1.User(5, '张三5', 20, 1, 'zhangsan5', '1880000000', '666@email.com')
];
var app = express();
app.get('/', function (req, res) {
    res.send("hello Express Server....");
});
app.get('/users', function (req, res) {
    res.json(users);
});
app.get('/user/:id', function (req, res) {
    res.json(users.find(function (user) { return user.id == req.params.id; }));
});
var server = app.listen(8889, 'localhost', function () {
    console.log("服务器已经启动。");
});
