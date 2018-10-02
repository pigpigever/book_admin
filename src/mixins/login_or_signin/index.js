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
		isCanSignUp () {
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
			return false
		}
	}
}
