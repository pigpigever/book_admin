<template lang="html">
	<!-- 注册页面 -->
	<signin :type="1"></signin>
</template>

<script>
import signin from '@/components/common/login_or_signin'
import { logInOrSignIn } from '@/mixins'
export default {
	name      : 'signin_page',
	mixins    : [logInOrSignIn],
	components: {
		signin
	}
}
</script>

<style lang="less" scoped>
@import '../../assets/less/login_or_signin.less';
</style>
