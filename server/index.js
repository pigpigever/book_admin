const Koa = require('koa')
const Router = require('./router')
const BodyParser = require('koa-bodyparser')
const App = new Koa()

App
    .use(BodyParser())
    .use(Router.routes())
    .listen(3000)