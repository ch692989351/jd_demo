<template>
	<div class="Home">
		<div>
			<commonheader :path="'/'" :centershow="true" :title="'发现'"></commonheader>
		</div>
		<div class="set-margin-t44">
			<div class="side-nav">
				<ul v-if="$store.state.pulldownmenu.lang=='CN'">
					<li v-for="(item,index) in menuList" @click="changeContent(index)" :class="{'active':nowMenuIndex==index}">
						{{item.title}}
					</li>
				</ul>
				<ul v-else>
					<li v-for="(item,index) in menulist" @click="changeContent(index)" :class="{'active':nowMenuIndex==index}">
						{{item.title}}
					</li>
				</ul>
			</div>
			<div class="list-box" @click="$store.state.pulldownmenu.show = false" v-cloak>
				<div v-cloak>
					<slider :sliders="sliders_f" :nowIndex="0"></slider>
				</div>
				<div v-for="(list,index) in page">
					<div>
						<h4>
						{{list.title}}
						<a v-if="list.title=='热门推荐'"><i></i>排行榜</a>
					</h4>
						<div class="dash-grid grid-3">
							<div v-for="item in list.goodsList" class="item abs-txt">
								<a>
									<img :src="item.img">
								</a>
								<p>{{item.text}}</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Slider from '../components/Slider'
	import CommonHeader from '../components/CommonHeader'
	export default {
		data() {
			return {
				page: [],
				//定义轮播图数据
				sliders_f: [],
				menuList: this.lang_cn.initData.menuList,
				menulist: this.lang_en.initData.menuList,
				initData: this.lang_cn.initData,
				nowMenuIndex: 0,
				EN: this.lang
				//menu:this.$store.state.pulldownmenu
			}
		},
		components: {
			slider: Slider,
			commonheader: CommonHeader
		},
		methods: {
			linearScroll(index, height, scrollT) {
				if(document.getElementsByClassName('side-nav')[0]) {
					var box = document.getElementsByClassName('side-nav')[0]
					var scrollT = scrollT
					var scrollMax = index * height
					var offset = scrollMax - scrollT
					var sec = 50
					//计算50次后清除定时器
					var sec_count = 50
					var oneOffset = offset / sec
					var _timer = setInterval(function() {
						box.scrollTop= scrollT + oneOffset
						scrollT += oneOffset
						sec_count--
						if(!sec_count) {
							clearInterval(_timer)
							sec_count = 50
						}
						//400是毫秒数
					}, 400 / sec)

				}
			},
			changeContent(index) {
				this.$store.commit('switch_menu')
				//设置当前选中下标
				this.nowMenuIndex = index
				//this.menuList = this.initData.menuList
				this.page = this.initData.package0[index]
				this.sliders_f = this.initData.sliderList[index]
				if(document.getElementsByClassName('side-nav')[0]) {
					var box = document.getElementsByClassName('side-nav')[0]
					this.linearScroll(index, 47, box.scrollTop)
				}
			}
			//			changeContent(index) {				
			//				var _this = this
			//				_this.$axios.get('./static/initData.json')
			//					.then(function(res) {
			//						console.log(initData)
			//						//侧边菜单刷新
			//						_this.menuList = res.data.sideNavList
			//						//内容区域切换
			//						var contentPackage = res.data.package0[index]						
			//						_this.$set(_this.page, 'content', contentPackage)
			//						//轮播图切换
			//						var sliders=res.data.sliderList[index]
			//						_this.$set(_this.sliders, 'content', sliders)
			//					})
			//			}
		},
		created() {
			this.changeContent(0)
		}
	}
</script>

<style scoped>
	body {
		height: 100%!important;
	}
	
	::-webkit-scrollbar {
		width: 0px
	}
	
	.abs-txt {
		position: relative;
	}
	
	.abs-txt a {
		margin-bottom: 1.5rem;
	}
	
	.abs-txt p {
		position: absolute;
		bottom: 0;
		left: 0;
		-webkit-line-clamp: 2;
		overflow: hidden;
		-webkit-box-orient: vertical;
		width: 100%;
		height: 30px;
	}
	
	.side-nav {
		width: 71px;
		float: left;
		position: fixed;
		height: 100%;
		overflow-y: scroll;
	}
	
	.side-nav li {
		-webkit-line-clamp: 2;
		overflow: hidden;
		-webkit-box-orient: vertical;
		line-height: 18px;
	}
	
	.active {
		color: red;
	}
	
	[v-cloak] {
		display: none
	}
	
	.list-box .dash-grid {
		background: #FFFFFF;
	}
	
	.list-box {
		margin-left: 70px;
		box-sizing: border-box;
		padding: 8px 8px;
	}
	
	.side-nav li {
		position: relative;
		height: 46px;
		line-height: 46px;
		font-size: 13px;
		text-align: center;
	}
	
	.side-nav li:before {
		content: '';
		height: 46px;
		width: 1px;
		position: absolute;
		left: 70px;
		top: 0;
		background-color: #e5e5e5;
		border: 0px solid transparent;
	}
	
	.side-nav li:first-child {
		border-top: 1px solid #E5E5E5;
	}
	
	.side-nav li:after {
		content: '';
		width: 70px;
		height: 1px;
		left: 0;
		position: absolute;
		bottom: 0;
		background-color: #E5E5E5;
	}
	
	.list-box h4 {
		padding: 19px 0 10px 0;
		font-size: 12px;
		margin: 0;
	}
	
	.list-box h4 a {
		float: right;
		font-weight: normal;
		color: #848689;
	}
	
	.list-box h4 a i {
		display: inline-block;
		width: 13px;
		height: 13px;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFNUUxODlFNDFENTExRTZCRDMwQTYyRkI5RTlCQTE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFNUUxODlGNDFENTExRTZCRDMwQTYyRkI5RTlCQTE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTEzNUIyN0Y0MUQxMTFFNkJEMzBBNjJGQjlFOUJBMTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTEzNUIyODA0MUQxMTFFNkJEMzBBNjJGQjlFOUJBMTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4RF+u9AAABA0lEQVR42mKcOXMmAwEQBcR6aGLngXglIY0sDITBIiBmRhP7RYzhTEQYDjL4CBCbQDGIzUaEPqJcDgIfgfgsEpsowMRAQ0BTw1moYIY1EPejOfQ/EJdTw3BbIDYF4mdA/AMa2TJA7AoyPAWIM9A0gBRFA/FDEiwJh6YkXSC+BAuWACA2BuJ7UEV8QCwCxDokGo43QpWhuG5IpJZRw0cNJ69sgVVJWljU6SLJ6+IwqxSIY4FYCNnwx1B2GlrB8xLKfg7Ecmjyj5HYz6C0H5plTxiBdSgzVDMjksQ3IH6BVhwgg1dA/AWJL4cWCn+A+BFIYCMQe9MgyDtYoCXZNxoYfhkgwAD0Ei5wyQxJEQAAAABJRU5ErkJggg==") no-repeat;
		background-size: 100% 100%;
		position: relative;
		top: 1px;
		left: -4px;
	}
	
	.list-box .item {
		font-size: 12px;
		padding: 12px;
	}
	
	.list-box-slider {
		margin: 10px;
	}
	
	.list-box-slider li {
		width: 100%;
	}
	
	.list-box-slider li img {
		width: 100%;
		height: auto;
	}
	
	.list-box img {
		width: 100%;
		height: auto;
	}
	
	.set-margin-t44 {
		padding-top: 44px;
		height: 100%;
		box-sizing: border-box;
	}
</style>