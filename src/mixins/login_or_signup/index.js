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
			if (this.hasUserName && this.hasPassword) {
				return true
			}
			return false
		},
		isCanSignUp () {
			if (this.hasUserName && this.hasPassword && this.hasCheckPassword) {
				return true
			}
			return false
		}
	},
	methods: {
		/**
		 * 获取用户名
		 * @param name
		 * @return void
		 */
		getUserName (name) {
			this.userName = name
		},
		/**
		 * 获取密码
		 * @param password
		 * @return void
		 */
		getPassword (password) {
			this.password = password
		}
	}
}
