<template lang="html">
	<!-- 登录注册通用组件封装 -->
	<div :class="componentStatus">
		<div class="componentStatus + '-box'">
			<h1>书悦管理系统</h1>
			<div class="form">
				<input type="text" placeholder="用户名" v-model="userName">
				<input type="text" placeholder="密码" v-model="password">
				<slot></slot>
			</div>
		</div>
		<bg-bubbles></bg-bubbles>
	</div>
</template>

<script>
import bgBubbles from '@/components/common/bg_bubbles'
import { logInOrSignIn } from '@/mixins'
export default {
	name      : 'login_or_signin',
	components: {
		bgBubbles
	},
	props: {
		type: {
			type    : Number,
			default : 0,
			required: true
		}
	},
	mixins  : [logInOrSignIn],
	computed: {
		/**
		 * 根据不同的type返回不同的class，其中
		 * type：0 对应的是登录页面
		 * type：1 对应的是注册页面
		 */
		componentStatus () {
			if (this.type === 0) {
				return 'login'
			}
			return 'signin'
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../assets/less/login_or_signin.less';
</style>
