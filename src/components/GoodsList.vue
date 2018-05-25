<template>
	<div class="goodslist">
		<ul>
			<li v-for="item in goodslist">
				<a>
					<div class="rate">
						<strong>{{item.rate}}</strong>
						<p>七日年化收益率</p>
					</div>
					<div class="introduction">
						<p>{{item.bank}}<span class="device">|</span>{{item.name}}</p>
						<div>
							<span>期限{{item.term}}个月</span>
							<span>{{item.type}}</span>
							<span>{{item.type1}}</span>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goodslist: [{
					rate: '6%',
					bank: '民生银行',
					name: '永安增益1号',
					term: 6,
					type: '本息保障',
					type1: '存款'
				},{
					rate: '6%',
					bank: '民生银行',
					name: '永安增益1号',
					term: 6,
					type: '本息保障',
					type1: '存款'
				},{
					rate: '6%',
					bank: '民生银行',
					name: '永安增益1号',
					term: 6,
					type: '本息保障',
					type1: '存款'
				},{
					rate: '6%',
					bank: '民生银行',
					name: '永安增益1号',
					term: 6,
					type: '本息保障',
					type1: '存款'
				}]
			}
		}
	}
</script>

<style scoped>
	.goodslist li{
		margin-top: 15px;
	}
	.goodslist li a {
		position: relative;
		width: 100%;
		height: auto;
	}
	
	.introduction {
		margin-left: 110px;
	}
	
	.rate {
		position: absolute;
		width: 100px;
		top: 0;
		left: 0;
		padding-left: 10px;
	}
	p{
		margin: 0;
	}
	.rate strong{
		color: deeppink;
		font-size: 24px;
	}
	.rate p{
		font-size: 10px;
	}
	.introduction span{
		margin: 0 5px;
	}
	.introduction p{
		font-size: 18px;
		line-height: 22px;
		padding-top: 4px;
		width: 100%;
		margin-right: 10px;
	}
	.introduction span{
		font-size: 14px;
		border:1px solid #ccc;
		padding:0 3px
	}
	.introduction .device{
		border: none;
	}
</style>