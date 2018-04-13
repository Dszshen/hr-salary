/**
 * Created by Administrator on 2018/4/13 0013.
 */
import * as express from 'express';

import {User} from './users';

const users:User[] = [
    new User(1,'张三1',20,1,'zhangsan1','1880000000','666@email.com'),
    new User(2,'张三2',20,1,'zhangsan2','1880000000','666@email.com'),
    new User(3,'张三3',20,1,'zhangsan3','1880000000','666@email.com'),
    new User(4,'张三4',20,1,'zhangsan4','1880000000','666@email.com'),
    new User(5,'张三5',20,1,'zhangsan5','1880000000','666@email.com')
];

const app = express();

app.get('/',(req,res)=>{
    res.send("hello Express Server....");
});

app.get('/users',(req,res)=>{
    res.json(users);
});

app.get('/user/:id',(req,res)=>{
    res.json(users.find((user)=>user.id==req.params.id));
});

const server = app.listen(8889,'localhost',()=>{
    console.log("服务器已经启动。");
});