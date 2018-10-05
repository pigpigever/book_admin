import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			name     : 'home_page',
			path     : '/',
			component: () => import('@/page/home/index.vue')
		},
		{
			name     : 'login_page',
			path     : '/logIn',
			component: () => import('@/page/login/index.vue')
		},
		{
			name     : 'signin_page',
			path     : '/signIn',
			component: () => import('@/page/signin/index.vue')
		}
	]
})
