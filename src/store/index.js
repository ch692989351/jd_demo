import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import pulldownmenu_store from './pulldown_store.js'

export default new Vuex.Store({
	modules:{
		pulldownmenu:pulldownmenu_store
	}
})
