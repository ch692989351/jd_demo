exports.install = function(Vue, options) {
	Vue.prototype.getConfigCom = function() {
		const codeVal = localStorage.getItem('code');
		const config = {
			// 基础url前缀
			baseURL: 'http://localhost:8080',
			//		baseURL: 'https://www.91kaodezhu.com:5001/ejqDsServer/',
			//这里可以在发送请求之前对请求数据做处理，比如form-data格式化等
			transformRequest: [function(data) {
				let ret = ''
				for(let it in data) {
					ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
			}],
			// 这里提前处理返回的数据
			transformResponse: [function(data) {
				//将后台返回的数据转为json对象
				return JSON.parse(data);
			}],
			// 请求头信息
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'code': codeVal || ""
			}
		}
		return config; //返回config配置
	}
}