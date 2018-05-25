import Vue from 'vue'
import App from './App.vue'
//引入vant组件
//import vant from 'vant'
import router from './router-config.js'
import axios from 'axios'
//引入vuex文件
import store from '../src/store/index.js'
//全局引入预处理数据
import Config from '../src/js/config.js'
//全局方法引入
import Global from '../src/js/global.js'
import lang_cn from './common/lang/cnInitData.js'
import lang_en from '../static/engInitData.js'
import vueTouch from 'vue-touch'


//引入vant组件
//import 'vant/lib/vant-css/index.css'
import '../src/css/main.css'

//定义全局变量

Vue.prototype.lang_cn = lang_cn
Vue.prototype.lang_en = lang_en


function translation() {
	var langPack = {
		"CN": {},
		"EN": {}
	}
	var lanType = "CN"
	return {
		setLang: function(type) {
			this.langType = type
		},
		inject: function(type, lang) {
			langPack[type] = lang
		},
		trans: function(langtype, key) {
			return langPack[langtype][key]
		}
	}
}

Vue.filter('translate', function(val, type, prop) {
	// 实例化翻译
	var sysLang = new translation();
	// 设置用英文
	sysLang.setLang(type);
	// 注册英文语言包
	sysLang.inject("EN", EN)
	sysLang.inject("CN", CN)
	return sysLang.trans(type, prop)
})
//Vue.use(vant)
Vue.prototype.$axios = axios
Vue.use(Global)
Vue.use(Config)
Vue.use(vueTouch)

var vm = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});
