import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
		path: '/',
		component: resolve => require(['./pages/FirstPage.vue'], resolve)
	},
	{
		path: '/home',
		component: resolve => require(['./pages/Home.vue'], resolve),
		//子路由理解为component而不是page
		children: [{
			path: '/recommand',
			component: resolve => require(['./components/Recommand.vue'], resolve)
		}]
	}, {
		path: '/discovery',
		component: resolve => require(['./components/Discovery.vue'], resolve),
		redirect: {path:'/goodchoice'},
		children: [{
			path: '/goodchoice',
			component: resolve => require(['./components/GoodChoice.vue'], resolve)
		}, {
			path: '/goodeat',
			component: resolve => require(['./components/GoodEat.vue'], resolve)
		}, {
			path: '/goodplay',
			component: resolve => require(['./components/GoodPlay.vue'], resolve)
		}, {
			path: '/goodtosee',
			component: resolve => require(['./components/GoodToSee.vue'], resolve)
		}, {
			path: '/goodshoppingenc',
			component: resolve => require(['./components/GoodShoppingEnc.vue'], resolve)
		}]
	}, {
		path: '/firstpage',
		component: resolve => require(['./pages/FirstPage.vue'], resolve)
	}, {
		path: '/myself',
		component: resolve => require(['./pages/MySelf.vue'], resolve)
	}, {
		path: '/trolley',
		component: resolve => require(['./pages/Trolley.vue'], resolve)
	}, {
		path: '/login',
		component: resolve => require(['./pages/Login.vue'], resolve)
	}
]

const router = new Router({
	routes
})
export default router