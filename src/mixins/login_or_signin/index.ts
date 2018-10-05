import { Vue, Component } from 'vue-property-decorator'

@Component
export default class LoginOrSignIn extends Vue {
	public userName = ''
	public password = ''
	public checkPassword = ''

	get isCanSignIn () {
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
	get hasUserName () {
		if (this.userName) {
			return true
		}
		return false
	}
	get hasPassword () {
		if (this.password) {
			return true
		}
		return false
	}
	get hasCheckPassword () {
		if (this.checkPassword) {
			return true
		}
		return false
	}
	get isCanLogin () {
		if (!this.hasUserName) {
			this.$message.error('用户名不能为空！')
			return false
		}
		if (!this.hasPassword) {
			this.$message.error('密码不能为空！')
			return false
		}
		return true
	}
	/**
	 * 触发登录事件
	 * @param void
	 * @return void
	 */
	public logIn () {
		if (this.isCanLogin) {
			// 请求接口进行登录
			this.$http.post('/api/logIn').then(({data: {code, msg, data}}) => {
				if (code === 0) {
					alert('登录成功！！！')
				}
			})
		}
		return false
	}
	/**
	 * 触发注册事件
	 * @param void
	 * @return void
	 */
	public signIn () {
		if (this.isCanSignIn) {
			const params = {
				name    : this.userName,
				password: this.password
			}
			const control = {
				emulateJSON: true
			}
			this.$http.post('/api/signIn', params, control).then(({data: {code, msg, data}}) => {
				if (code === 0) {
					alert('注册成功!')
				} else {
					alert('注册失败!')
				}
			})
		}
	}
}
