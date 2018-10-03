const Router = require('koa-router')()
const MD5 = require('blueimp-md5')
const Mongoose = require('mongoose')
const { hasUserInfo } = require('../utils')
const { userModel } = require('../db')


Mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

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

Router.post('/signIn', async (ctx, next) => {
    const {name, password} = ctx.request.body
    let user = new userModel({
        name,
        password
    })
    user.save((err, product) => {
        if (err) {
            throw err
        }
        ctx.body = {
            code: 0,
            text: '啦啦啦'
        }
    })
})

module.exports = Router