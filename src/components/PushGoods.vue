<template>
	<div class="pushgoods">
		<div>
			<img :src="resource.img">
			<div class="totrolley">
				{{resource.title}}
			</div>
			<div>
				<span>¥{{resource.price}}</span>
				<i>
					<img src="../img/pushgoodscar.png" />
				</i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'pushgoods',
		data() {
			return {

			}
		},
		props: ["resource"]
	}
</script>

<style lang="scss">
	$bgcolor:white;
	$carbgcolor:#f2f2f7;
	$bordercolor:#ddd;
	$fontcolor:#333;
	.pushgoods {
		height: auto!important;
		>div {
			text-align: left;
			background: $bgcolor;
			img {
				width: 100%;
				height: auto;
			}
			div {
				padding: 10px;
				i {
						background: $carbgcolor;
						float: right;
						border: 1px solid $bordercolor;
						border-radius: 2px;
						width: 22px;
						height: 22px;
						text-align:center;
						position:relative;
						top:-6px;
					img {
						width: 16px;
						height: auto;
						margin-top: 3px;
					}
				}
			}
		}
		.totrolley {
			background: $bgcolor;
			font-size: 12px;
			color: $fontcolor;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			padding: 0 10px;
			margin: 2px 0;
			height: 3em;
			line-height: 1.5em;
		}
	}
</style>