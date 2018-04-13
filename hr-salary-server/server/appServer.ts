/**
 * Created by Administrator on 2018/4/13 0013.
 */
import * as http from 'http';

const server = http.createServer((request,response)=>{
    response.end("hello");
});

server.listen(8888);





