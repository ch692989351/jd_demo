<template>
	<div class="disblock">
			<h5>{{resource.title}}</h5>
			<img :src="resource.img">
			<div class="item-info">
				<img :src="resource.authorIcon"><span>{{resource.author}}</span>
				<span v-show="true">{{resource.flow>=10000?"1w+":resource.flow}}人阅读</span>
			</div>
	</div>
</template>
<script>
	export default {
		name: 'disblock',
		props:["resource"],
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.disblock {
		width: 100%;
	}
	
	.disblock img {
		display: block;
		width: 100%;
		height: auto;
	}
	
	.item-info {
		text-align: left;
		overflow: hidden;
		font-size: 14px;
		z-index: 99;
	}
	
	.item-info img {
		width: 20px;
		height: auto;
		float: left;
	}
	.disblock{
		margin-bottom: 10px
	}
	.item-info{
		padding: 15px;
		background: #FFFFFF;
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
	h5{
		margin: 0;
		padding: 0 15px;
		background: #FFFFFF;
		line-height: 45px;
		height: 45px;
		font-size: 16px;
		overflow: hidden;
		text-overflow:ellipsis;
		color: #2c3e50;
		font-weight: normal;
	}
</style>