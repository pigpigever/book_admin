<template lang="html">
  <!-- 登录注册通用组件封装 -->
  <div :class="componentStatus">
    <div :class="componentStatus + '-box'">
      <h1>书悦管理系统</h1>
      <!-- 登录 -->
      <template v-if="isLogin">
        <div class="form">
          <input type="text" placeholder="用户名" v-model="userName">
          <input type="text" placeholder="密码" v-model="password">
          <button type="submit" id="login-button" @click="logIn">登录</button>
          <p class="tips">还没有账号？
            <router-link to="/signIn">立即注册！</router-link>
          </p>
        </div>
      </template>
      <!-- 注册 -->
      <template v-else>
        <div class="form">
          <input type="text" placeholder="用户名" v-model="userName">
          <input type="text" placeholder="密码" v-model="password">
          <transition name="slide-fade">
            <input type="text" placeholder="再次输入密码" v-model="checkPassword" v-show="hasUserName && hasPassword">
          </transition>
          <button type="submit" id="login-button" @click="signIn">注册</button>
          <p class="tips">已有账号？
            <router-link to="/logIn">立即登录！</router-link>
          </p>
        </div>
      </template>
    </div>
    <bg-bubbles></bg-bubbles>
  </div>
</template>

<script lang="ts">
import bgBubbles from '@/components/common/bg_bubbles/index.vue'
import { logInOrSignIn } from '@/mixins'
import { Prop, Component, Mixins } from 'vue-property-decorator'

@Component({
	components: {
		bgBubbles
	}
})
export default class LogInOrSignIn extends Mixins(logInOrSignIn) {
	@Prop(Number) type: number

	/**
	 * 根据不同的type返回不同的class，其中
	 * type：0 对应的是登录页面
	 * type：1 对应的是注册页面
	*/
	get componentStatus () {
		if (this.type === 0) {
			return 'login'
		}
		return 'signin'
	}
	get isLogin () {
		if (this.type === 0) {
			return true
		}
		return false
	}
}
</script>

<style lang="less" scoped>
  @import '../../../assets/less/login_or_signin.less';

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(-30px);
    opacity: 0;
  }
</style>
