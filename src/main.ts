// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import '@/assets/less/reset.less'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueResource)

/* tslint:disable */
new Vue({
	el        : '#app',
	router,
	components: { App },
	template  : '<App/>'
})
