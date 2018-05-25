exports.install = function(Vue, options) {
	Vue.prototype.hideMenu=function($store){
		if($store.state.pulldownmenu.show){
			$store.state.pulldownmenu.show=false
		}	
	}
}