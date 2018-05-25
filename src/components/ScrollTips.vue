<template>
	<div class="scrollTips">
		<div class="scrollTips-jx">
			<span class="icon">
			<img src="../img/scrolltips.png">
			</span>
			<div class="tips-content">
				111111
			</div>
			<span class="tips-more">
				<a>|</a>
				<a>
					更多
				</a>
			</span>			
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.scrollTips{
		background: #f8f8f8;
		padding: 0 8px 8px 8px;
	}
	.scrollTips .tips-content{
		margin: 0 60px 0 90px;
	}
	.scrollTips-jx{
		position: relative;
		background: #FFFFFF;
		padding:4px;
		border-radius: 0 0  4px 4px;
	}
	.scrollTips .tips-more{
		position: absolute;
		top: 6px;
		right: 7px;
		font-size: 12px;
	}
	.scrollTips .tips-more a:first-child{
		position: relative;
		top: -1px;		
	}
	.scrollTips .icon{
		position: absolute;
		top: 5px;
		left: 7px;
	}
	.icon img{
		width: 76px;
		height: auto;
	}
</style>