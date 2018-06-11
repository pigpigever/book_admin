import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			name     : 'home_page',
			path     : '/',
			component: () => import('@/page/home')
		},
		{
			name     : 'login_page',
			path     : '/login',
			component: () => import('@/page/login')
		},
		{
			name     : 'signin_page',
			path     : '/signin',
			component: () => import('@/page/signin')
		}
	]
})
