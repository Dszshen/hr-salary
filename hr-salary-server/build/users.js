"use strict";
/**
 * Created by Administrator on 2018/4/13 0013.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, name, age, sex, username, mobile, email) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.username = username;
        this.mobile = mobile;
        this.email = email;
    }
    return User;
}());
exports.User = User;
