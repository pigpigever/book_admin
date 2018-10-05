const MD5 = require('blueimp-md5')
const userModel  = require('../db/models/user')

module.exports = {
	/* 查询是否有相应的用户信息 */
	hasUserInfo (name, password) {
		return new Promise((resolve, reject) => {
			/* 登录 */
			if (password) {
				userModel.findOne({name, password: MD5(password)}, (err, result) => {
					if (err) {
						return reject(err)
					}
					resolve(result ? true : false)
				})
			} else {
			/* 注册 */
				userModel.findOne({name}, (err, result) => {
					if (err) {
						return reject(err)
					}
					return resolve(result ? false : true)
				})
			}
		})
	}
}