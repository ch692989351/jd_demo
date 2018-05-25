<template>
	<div class="slider-wrap">
		<div>
			<ul class="slider" @mouseover="stop">
				<li v-for="(slider,index) in sliders" v-show="index==indexNow">
					<a :href="slider.url">
						<img :src="slider.img">
					</a>
				</li>
			</ul>
			<ul class="slider-pointers" v-if="sliders.length>1?true:false">
				<li v-for="(slider,index) in sliders" :class="{'active':index==indexNow}">

				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'slider',
		methods: {
			sliderGo() {
				var _this = this
				if(_this.sliders.length == 1) {
					clearInterval(this.timer)
					_this.indexNow = 0				
				} else {
					_this.timer = setInterval(function() {
						_this.indexNow++
							if(_this.indexNow == _this.sliders.length) {
								_this.indexNow = 0
							}
					}, 2000)
				}

			},
			stop() {
				clearInterval(this.timer)
			}
		},
		created(){
			this.sliderGo()
		},
		watch:{
			sliders:function(){
				this.sliderGo()
			}
		},
		props: ["sliders","nowIndex"],
		data() {
			return {
				indexNow: 0
			}
		}
	}
</script>

<style scoped>
	.slider-wrap {
		position: relative;
	}
	
	.slider li {
		display: inline-block;
		width: 100%;
	}
	
	.slider li img {
		width: 100%;
		height: auto;
	}
	
	.slider li a {
		display: block;
		width: 100%;
		cursor: pointer;
	}
	.slider-pointers {
		text-align: center;
		position: absolute;
		bottom: 20px;
		width: 100%;
	}
	
	.slider-pointers .active {
		background: #FFFFFF;
	}
	
	.slider-pointers li {
		display: inline-block;
		margin: 0 5px;
		border: 1px solid #FFFFFF;
		background-color: transparent;
		width: 5px;
		height: 5px;
		border-radius: 100%;
	}
</style>