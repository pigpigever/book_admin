<template lang="html">
	<!-- 登录页面 -->
	<login :type="0">
		<button type="submit" id="login-button" @click="logIn">登录</button>
		<p class="tips">还没有账号？<router-link to="/signIn">立即注册！</router-link></p>
	</login>
</template>

<script>
import { logInOrSignIn } from '@/mixins'
import login from '@/components/common/login_or_signin'
export default {
	name      : 'login_page',
	mixins    : [logInOrSignIn],
	components: {
		login
	},
	methods: {
		/**
		 * 触发登录事件
		 * @param void
		 * @return void
		 */
		logIn () {
			console.log('login')
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
		}
	}
}
</script>
