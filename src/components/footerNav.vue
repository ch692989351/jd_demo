<template>
	<div class="FooterNav">
		<div class="dash-grid grid-5">
			<div v-for="(item,index) in footer" class="item">
					<div  @click="fn(index)">
						<span v-if="index==2&&item.num!=''">{{item.num}}</span>
						<img :src="item.img">
					</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		mounted(){
			this.setBankNum()
		},
		methods:{
			setBankNum(){
				var _this=this
				_this.$axios.get('./static/initData.json')
					.then(function(res){
						_this.footer[2].num=res.data.bankinfo
					})
			},
			fn(index){
				var _this=this
				switch(index){
					case 0:
					return 
					break;
					case 1:
					_this.$router.push('/home')
					break;
					case 2:
					_this.$router.push('./discovery')
					break;
					case 3:
					_this.$router.push('./trolley')
					break;
					case 4:
					_this.$router.push('./login')
				}
			}
		},
		data(){
			return {
				footer:[
					{
						img:require("../img/firstpage0.png")
					},{
						img:require("../img/firstpage1.png")
					},{
						img:require("../img/firstpage2.png")
					},{
						img:require("../img/firstpage3.png")
					},{
						img:require("../img/firstpage4.png")
					}					
				]
			}
		}
	}
</script>

<style scoped>
	.FooterNav{
		position: fixed;
		width: 100%;
		bottom: 0;
		-webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);	
	}
	.FooterNav img{
		width: 87%;
		height: auto;
	}
	.FooterNav .item{
		padding: 0;
	}
	.router-link-active{
		color: black;
		font-weight: 700;
	}
	
</style>