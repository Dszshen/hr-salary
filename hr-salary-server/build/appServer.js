"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Administrator on 2018/4/13 0013.
 */
var http = require("http");
var server = http.createServer(function (request, response) {
    response.end("hello");
});
server.listen(8888);
