const Koa = require("koa")
const app = new Koa();
//router
const Router = require('koa-router');
//父路由
const router = new Router();
//bodyparser:该中间件用于post请求的数据
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

app.use(async(ctx)=>{
    ctx.body = "hello,world"
})
app.listen(3000);
console.log("app is start");
