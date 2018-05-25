<template>
	<div class="disblock">
		<div class="dash-grid grid-2">
			<div class="item">
				<div class="item-content">
					<p>
						{{resource.title}}
					</p>
					<div class="item-info">
						<img :src="resource.authorIcon"><span>{{resource.author}}</span>
						<span v-show="isShow">{{resource.flow}}人阅读</span>
					</div>
				</div>
			</div>
			<div class="item">
				<img :src="resource.img">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'disblock',
		props:["resource"],
		data() {
			return {
				screenWidth:document.body.clientWidth
			}
		},
		computed:{
			isShow(){
				return this.screenWidth>360?true:false
			}
		},
		mounted() {
			const that = this
			window.onresize = () => {
				return(() => {
					window.screenWidth = document.body.clientWidth
					that.screenWidth = window.screenWidth
				})()
			}
		},
		watch: {
			screenWidth(val) {
				this.screenWidth = val
				window.location=location
			}
		}
	}
</script>
<style scoped>
	.item-info {
		text-align: left;
		font-size: 14px;
		z-index: 99;

	}
	.dash-grid{
		grid-template-columns:auto 170px
	}
	.item-info img {
		width: 20px;
		height: auto;
		float: left;
	}
	.disblock{
		margin-bottom: 10px
	}
	.item-info span:nth-of-type(1) {
		width: 56px;
		display: inline-block;
		float: left;
		padding-left: 8px;
		-webkit-line-clamp:1;
		-webkit-box-orient:vertical;
		overflow: hidden;
		height: 18px;
	}
	.item-info span{
		color: #848689;

	}
	.item-info span:nth-of-type(2) {
		float: right;
	}
	
	.disblock .item {
		padding: 0;
		position: relative;
	}
	
	.disblock .item:nth-of-type(1) {
		padding: 10px;
	}
	
	.disblock .item:nth-of-type(2) {
		padding-left: 0;
	}
	
	.disblock .item:nth-of-type(2) img {
		width: 100%;
	}
	.item-content p{
		text-align: left;
		text-overflow:ellipsis;
		color: #333333;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
		-webkit-line-clamp:2;
		display: -webkit-box;
		white-space:normal;
		/*超出省略号*/
		-webkit-box-orient:vertical
	}
	.item-info {
		position: absolute;
		bottom: 10px;
		width: 100%;
	}
	.item-content{
		width: 100%;
		height: 100%;
		position: relative;
		
	}
</style>