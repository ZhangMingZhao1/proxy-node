# proxy-node
请求转发工具

需要后端支持，postman支持的proxy-node就支持，现只支持cookie校验权限的接口，注意后端做了Referer校验的需要在axios中做Referer的伪装。

在config/index.js 填写：
module.exports = {
    cookie:"",
    host:"http://xx:port"
}

npm install
node/nodemon app
