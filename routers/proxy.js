const router = require('koa-router')();
const axios = require ('axios');
const config = require('../config');
const log4js = require('log4js');
const url = require('url');

const logger = log4js.getLogger();
axios.defaults.headers.Cookie = config.cookie;

//post请求，参数需要后端支持@requestBody，前端挂在post body里，具体值在params上
router.post('/proxy*', async(ctx,next)=>{
    const tarHost =  ctx.params[0];
    const search = url.parse(ctx.request.url).search;
    let params = ctx.request.body;  
    console.log("参数为：", params);

    let data;
    if(search!=null) {
        console.log("请求地址为",`${config.host}${tarHost}${search}`);
        data = await axios.post(`${config.host}${tarHost}${search}`,params);
    }else {
        console.log("请求地址为",`${config.host}${tarHost}`);
        data = await axios.post(`${config.host}${tarHost}`,params);
    }
    console.log("获取的数据为：", data.data);
    ctx.body = data.data;
    //
})

//get请求，参数是在url上，挂在了search变量上
router.get('/proxy*', async(ctx,next)=>{
    const search = url.parse(ctx.request.url).search;
    console.log("请求地址为",`${config.host}${tarHost}${search}`)
    const data = await axios.get(`${config.host}${tarHost}${search}`,params);
    console.log("获取的数据为：", data.data);
    console.log("Time:", new Date());
    ctx.body = data.data;
})
module.exports = router; 