<template lang="html">
	<!-- 登录页面 -->
	<login :type="0"></login>
</template>

<script>
import { logInOrSignIn } from '@/mixins'
import login from '@/components/common/login_or_signin'
export default {
	name      : 'login_page',
	mixins    : [logInOrSignIn],
	components: {
		login
	}
}
</script>
