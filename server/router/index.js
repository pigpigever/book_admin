const Router = require('koa-router')()
const MD5 = require('blueimp-md5')
const Mongoose = require('mongoose')
const Utils = require('../utils')
const { userModel } = require('../db')

/** 登录 */
Router.post('/logIn', async (ctx, next) => {
    const user = new userModel({
        name: 'tonychen',
        password: 'ggboy'
    })
    user.save((err, product) => {
        if (err) {
            throw err
        }
        ctx.body = {
            code: '0',
            type: 'login',
            text: 'login success'
        }
    })
})

/** 注册 */
Router.post('/signIn', async (ctx, next) => {
    const {name, password} = ctx.request.body
    let user = new userModel({
        name,
        password
    })

    await Utils.hasUserInfo(name).then((type) => {
        if (type) {
            user.save()
        }
        ctx.body = {
            code: type ? 0 : -1,
            msg : type ? '注册成功' : '注册失败'
        }
    }).catch((err) => {
        throw err
    })
})

module.exports = Router