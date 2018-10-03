export default {
	data () {
		return {
			userName     : '',
			password     : '',
			checkPassword: ''
		}
	},
	computed: {
		hasUserName () {
			if (this.userName) {
				return true
			}
			return false
		},
		hasPassword () {
			if (this.password) {
				return true
			}
			return false
		},
		hasCheckPassword () {
			if (this.checkPassword) {
				return true
			}
			return false
		},
		isCanLogin () {
			if (!this.hasUserName) {
				this.$message.error('用户名不能为空！')
				return false
			}
			if (!this.hasPassword) {
				this.$message.error('密码不能为空！')
				return false
			}
			return true
		},
		isCanSignIn () {
			if (!this.hasUserName) {
				this.$message.error('用户名不能为空！')
				return false
			}
			if (!this.hasPassword) {
				this.$message.error('密码不能为空！')
				return false
			}
			if (!this.hasCheckPassword) {
				this.$message.error('第二次输入密码不能为空！')
				return false
			}
			return true
		}
	},
	methods: {
		/**
		 * 触发登录事件
		 * @param void
		 * @return void
		 */
		logIn () {
			if (this.isCanLogin) {
				// 请求接口进行登录
				this.$http.post('/api/logIn').then(({data: {code, msg, data}}) => {
					if (code === 0) {
						alert('登录成功！！！')
					}
				}).catch((err) => {
					throw err
				})
			}
			return false
		},
		/**
		 * 触发注册事件
		 * @param void
		 * @return void
		 */
		signIn () {
			if (this.isCanSignIn) {
				const params = {
					name    : this.userName,
					password: this.password
				}
				const control = {
					emulateJSON : true
				}
				this.$http.post('/api/signIn', params, control).then(({data: {code, msg, data}}) => {
					if (code === 0) {
						alert('注册成功!')
					} else {
						alert('注册失败!')
					}
				}).catch((err) => {
					throw err
				})
			}
		}
	}
}
