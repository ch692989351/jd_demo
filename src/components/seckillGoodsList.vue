<template>
	<div class="jd-seckill">
			<div class="jd-seckill-header">
				京东秒杀<strong>{{seckill.time}}点场</strong><div class="remain-time"><span>00</span><em>:</em><span>{{seckill.countdown.minute}}</span><em>:</em><span>{{seckill.countdown.second}}</span></div>
				<a>
					京选轮番秒<strong>></strong>
				</a>
			</div>
			<div class="jd-seckill-content">
				<ul :style="seckill.ulwidth">
					<li v-for="item in sekillgoodslist" :style="seckill.liwidth">
						<div class="seckill-item">
							<a>
							<img :src="item.imgUrl"/>							
						</a>
						<h4><span>¥</span>{{item.crtPrice}}</h4>
						<p><span>¥</span><span>{{item.orgPrice}}<i></i></span></p>
						</div>
					</li>
				</ul>
			</div>
	</div>
</template>

<script>
	export default{
		methods:{
			timeCountDown(){
				var _this=this			
				var inv=setInterval(function(){
					var nowDate=new Date()
					var nowHours=nowDate.getHours()
					var nowMinute=59-nowDate.getMinutes()
					var nowSecond=60-nowDate.getSeconds()
					if(nowMinute<10){
						nowMinute='0'+nowMinute
					}
					if(nowSecond<10){
						nowSecond='0'+nowSecond
					}
					_this.seckill.time=nowHours
					_this.seckill.countdown.second=nowSecond
					_this.seckill.countdown.minute=nowMinute				
				},1000)
				var nowDate=new Date()
				var nowHours=nowDate.getHours()
				if(nowHours>=0&&nowHours<8){
					_this.seckill.time='00'
					_this.seckill.countdown.second='00'
					_this.seckill.countdown.minute='00'
					clearInterval(inv)
				}
			},
			seckillGoodsWidth(columns){
				var l=this.sekillgoodslist.length
				var liWidth=window.screen.width/columns
				var ulWidth=liWidth*l
				this.seckill.liwidth='width:'+liWidth+'px'
				this.seckill.ulwidth='width:'+ulWidth+'px'
			}
		},
		props:["sekillgoodslist"],
		mounted(){
			this.timeCountDown()
			this.seckillGoodsWidth(3)
		},
		
		data(){
			return {
				seckill:{
					time:'00',
					countdown:{
						minute:'00',
						second:'00'
					},
					liwidth:'',
					ulwidth:''
				}
			}
		}
	}
</script>

<style scoped>
	.jd-seckill-header{
		font-size: 15px;
		padding: 6px 0;
		padding-left: 6px;
		color: red;
	}
	.jd-seckill strong{
		font-size: 12px;
		display: inline-block;
		position: relative;
		top: -1px;
		margin:0 10px;
		color: #000000;
	}
	.remain-time{
		color: #000000;
		font-size: 12px;
		display: inline-block;
	}
	.jd-seckill-header a{
		font-size:12px;
		float: right;
		margin-right: 16px;
		padding-top: 2px;
	}
	.jd-seckill-header a strong{
		display: inline-block;
		background: red;
		color: #FFFFFF;
		padding: 0;
		height: 12px;
		width: 14px;
		padding-bottom: 2px;
		margin-left: 4px;
		margin-right: 0;
		line-height: 12px;
		text-indent: 2px;
		border-radius: 100%;
	}
	.remain-time em{
		font-style: normal;
		position: relative;
		top: -2px;
		padding: 0 2px;
	}
	.remain-time span{
		border: 1px solid #CCCCCC;
		padding: 0 3px;
	}
	.jd-seckill-content img{
		min-width: 60px;
		width: 100%;
		height: auto;
		display: inline-block;
	}
	.jd-seckill-content{
		overflow: hidden;
	}
	.jd-seckill-content ul li{
		float: left;
		padding: ;
	}
	.seckill-item a{
		display: block;
	}
	.seckill-item{
		padding: 0 10px;
	}
	.seckill-item span{
		font-size: 11px;
		padding-right: 2px;
		position: relative;
		top: 0px;
	}
	.seckill-item h4,.seckill-item p{
		margin: 0;
		text-align: center;
	}
	.seckill-item p{
		font-size: 12px;
		margin: 4px 0 11px;
		position: relative;
	}
	.seckill-item p i{
		position: absolute;
	    left: 0;
	    top: 7px;
	    width: 100%;
	    height: 1px;
	    background-color: #686868;
	}
	.seckill-item p span:last-child{
		position: relative;
	}
	.seckill-item h4 span,.seckill-item h4{
		color: red;
		font-size: 16px;
		line-height: 16px;
		margin-top: 8px;
		
	}
</style>