const router = require('koa-router')();
const axios = require ('axios');
const config = require('../config');
const log4js = require('log4js');
const url = require('url');

const logger = log4js.getLogger();
axios.defaults.headers.Cookie = config.cookie;

router.post('/proxy*', async(ctx,next)=>{
    const tarHost =  ctx.params[0];
    const search = url.parse(ctx.request.url).search;
    let params = ctx.request.body;  
    console.log("params为：", params);
    console.log("请求地址为",`${config.host}${tarHost}${search}`)
    const data = await axios.post(`${config.host}${tarHost}${search}`,params);
    console.log("获取的数据为：", data.data);
    console.log("Time:", new Date());

    ctx.body = data.data;
})

//get请求
router.get('/proxy*', async(ctx,next)=>{
    const search = url.parse(ctx.request.url).search;
    console.log("请求地址为",`${config.host}${tarHost}${search}`)
    const data = await axios.get(`${config.host}${tarHost}${search}`,params);
    console.log("获取的数据为：", data.data);
    console.log("Time:", new Date());
    ctx.body = data.data;
})
module.exports = router; 