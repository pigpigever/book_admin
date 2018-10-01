const Router = require('koa-router')()
const MD5 = require('blueimp-md5')

const { hasUserInfo } = require('../utils')

Router.post('/logIn', async (ctx, next) => {
    ctx.body = {
        code: 0,
        text: 'tony test ok'
    }
})

module.exports = Router