const router = require('koa-router')();
const axios = require ('axios');
const config = require('../config');
const log4js = require('log4js');

const logger = log4js.getLogger();
axios.defaults.headers.Cookie = config.cookie;

router.post('/proxy*', async(ctx,next)=>{
    const tarHost =  ctx.params[0];
    let params = ctx.request.body;  
    logger.info("params为：", params);
    const data = await axios.post(`${config.host}${tarHost}`,params);
    logger.info("获取的数据为：", data.data);
    logger.debug("Time:", new Date());
    ctx.body = data.data;
})
module.exports = router; 