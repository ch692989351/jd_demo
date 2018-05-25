<template>
	<div class="common-header dash-grid">
		<div class="item">
			<router-link :to="path"><img src="../img/common-back.png"></router-link>
		</div>
		<div class="item">
			<div class="common-search-box" v-if="centershow">
				<img src="../img/common-search.png">
				<input @focus="$store.commit('switch_menu')" @click="listBoxShow" type="text" value="" class="common-search-input" placeholder="三星京东超级品牌日，S9震撼上市" />
				<div class="common-search-list" v-show="listboxshow">
					<!--最近搜索-->
					<div>
						<h5>
						最近搜索<img src="../img/common-del.png">
					</h5>
						<div>
							<a>三星</a>
							<a>手机分期用</a>
							<a>除湿机</a>
						</div>
					</div>
					<!--最近搜索end-->

					<!--热门搜索start-->
					<div>
						<h5>
						热门搜索
					</h5>
						<div>
							<a>三星</a>
							<a>脸部卸妆油</a>
							<a>除湿机</a>
							<a>微波炉</a>
							<a>无损播放器</a>
						</div>
					</div>
					<!--热门搜索end-->
				</div>
			</div>
			<div class="common-header-title" v-else>
				{{title}}
			</div>
		</div>
		<div class="item">
			<div v-if="typeof(rightshow)=='undefined'?true:false">
				<img src="../img/common-menu.png" @click="pullShow">
			<transition name="fade">
				<div class="pull-down-box" v-if="menuStoreShow">
					<a id="triangle-up"></a>
					<ul>
						<router-link :to="'/'">
							<li @click="pullShow">
								<i></i>首页
							</li>
						</router-link>
						<router-link :to="'/home'">
							<li @click="pullShow">
								<i></i>分类搜索
							</li>
						</router-link>
						<router-link :to="'/trolley'">
							<li @click="pullShow">
								<i></i>购物车
							</li>
						</router-link>
						<router-link :to="'/login'">
							<li @click="pullShow">
								<i></i>我的京东
							</li>
						</router-link>
						<router-link :to="'/'">
							<li @click="pullShow">
								<i></i>浏览记录
							</li>
						</router-link>
						<!--<li @click="langChange()">
							<i></i>{{theme}}
						</li>-->
					</ul>
				</div>
			</transition>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'commonheader',
		props: ["path", "centershow", "title","rightshow"],
		data() {
			return {
				listboxshow: false,
				theme:'经典=>粉红'
			}
		},
		//		computed:mapState({
		//			//es6
		//			pullDownShow:state=>state.pulldownmenu.show1
		//			//es5
		//			puDownShow:function(state){
		//			return state.pulldownmenu.show1
		//}
		//		})

		//		computed:{
		//		//方法2
		//			pullDownShow(){
		//				return this.$store.state.pulldownmenu.show
		//			}			
		//				
		//			}
		computed: {
			...mapState({
				menuStoreShow: state => state.pulldownmenu.show
			})
		},
//		created(){		
//			this.initSkyTips()
//		},
		methods: {
			pullShow() {
				this.$store.state.pulldownmenu.show = !this.$store.state.pulldownmenu.show
			},
			listBoxShow() {
				this.listboxshow = !this.listboxshow
			}
		}
	}
</script>

<style scoped>
	.common-header {
		grid-template-columns: 50px auto 50px;
		grid-template-rows: 44px;
		border-bottom: 1px solid #E5E5E3;
		position: fixed;
		top: 0;
		width: 100%;
		background: #FFFFFF;
		z-index: 99;
	}
	
	.common-header .item {
		padding: 0;
	}
	
	.common-header .item img {
		width: 28px;
		height: 28px;
		margin-top: 6px;
	}
	
	.common-search-box {
		border-radius: 10px;
		background: #F7F7F7;
		position: relative;
		margin: 6px;
		padding-left: 36px;
	}
	
	.common-search-input {
		height: 10px;
		border: none;
		font-size: 12px;
		background: transparent;
		width: 90%;
		padding: 9px 0;
		margin-right: 10px;
	}
	
	.common-search-input:focus {
		outline: none
	}
	
	.common-header .item .common-search-box>img {
		width: 22px;
		height: auto;
		float: left;
		margin: 4px 10px;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.common-header .item:nth-of-type(3) {
		position: relative;
	}
	
	.common-header-title {
		padding: 10px;
	}
	
	.common-search-list {
		position: fixed;
		top: 45px;
		left: 0;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		text-align: left;
		font-weight: normal;
	}
	
	.common-search-list>div {
		padding: 0 10px;
	}
	
	.common-search-list a {
		color: #686868;
		background: #f0f2f5;
		display: inline-block;
		padding: 3px 12px;
		font-size: 12px;
		border-radius: 2px;
		width: auto;
		margin-right: 12px;
		margin-bottom: 6px;
	}
	
	.common-header .item .common-search-list img {
		float: right;
		display: inline-block;
		width: 18px;
		height: 18px;
		margin: 0;
	}
	
	.pull-down-box {
		position: absolute;
		top: 45px;
		right: 8px;
		background: #000000;
		font-size: 14px;
		border-radius: 4px;
	}
	
	.pull-down-box li {
		width: 85px;
		margin-left: 40px;
		height: 40px;
		line-height: 40px;
		color: #FFFFFF;
		text-align: left;
		border-bottom: 1px solid rgba(255, 255, 255, .2);
		position: relative;
	}
	
	.pull-down-box li i {
		display: inline-block;
		width: 18px;
		height: 18px;
		margin: 0 6px;
		position: absolute;
		top: 10px;
		left: -33px;
	}
	
	#triangle-up {
		position: absolute;
		top: -10px;
		right: 14px;
		width: 0;
		height: 0;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-bottom: 12px solid #000000;
	}
	
	.pull-down-box ul a:nth-of-type(1) i {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAAG2bMCoAAAAAXNSR0IArs4c6QAAA2hJREFUWAnNmD1IVmEUx30tizAUDKPACBIcbWqwtsB2Q9obmgJdCxsDA1sFQWiMpqZaQ1tToiV0iQbBFoWgoC+q3/96z+O53x+vL3Xg9JyP//9/nue993ov9fUV2R/MeoRzFuevQmND+qdjECUWh5Xa25AooDAcr1l0QJqWrVEjkQSoCwCs4fsqZcAUxjPFJPlG6BNsuV4iTPQCw420mq3+F1o0qU6ncx+A5W/In1svrACSv17ouMDGsO7ja651EFKcM5A1yYd9rT9OtthH2K/ApJ9VUx8bN4F6K4xmvyOE6K7SLBvh43BdrWirwBb3G7NqjU4K6ybAKwJzUH9VorxKRGOnNDplU2XEzBYhnzIBiNP6zb2pZn1hC8Vp7sbAzUJQqgF+M+bshhaFD/i3UGgZSENaLek1aKhHVgOagKR5mYvi0YB3YsIiq1y24zGF8QH28JYWMF1L53kYv8MnHiCy8jwzYYeJuHnYTA3SLfyr1kyzSQEB3U7emt8SsMecwqw2QD7ramO1NgVhJSb9Yj3mScpx1WUrvpeJAejulj3LNF1B/QiV90TR8A/3hOMVhnAmYkEt0xGQYCMuHj7IhRLZBlz747FhN+h8Fla/guC8NlSf8c+Qbbfpef757PogpWJMXddkZ+tlE8NLXQS9WDxYNfJVfA8/g9/Jw6Rr0S0COGGxWKilczV8rfSYQaVmcKRix/1Qv2Vf93EZxosNQHqAn/TkVPwolX8nf5iqtUvZpb6xnmq3Oab6UDvlliwG6vtzAf+Je1slOY9r9SbcAn6k1zuxfcRn8D3c22uSCwlgnKiOq+9N/Jk8fOMaQpP4e69O/BG/2kQM/LWYxxJMupNNdPQQj+IvgsRB8IXldiOhArB0cOl507zRXAqNAXwJ/42bKX6Mn8gldVmUbqyfnql96EmP/txtk3h7SXK2y9mN6JqHa663bV3GQfwSfrqRYo/A2ke8n8EejeiRLLu+iN/V2qMRCdmyeYn3u1iAw1dY5j2ekD2apGyefxc2noawDncdv4z7p/oH+Tv8FQcMhyXvznQSszIlMMuGq1iXK3QCPY1rfVmlaGJ5l7+qb9wyXO9exja9i/W/3lzeA/GJw57TgfnJl1j0Zd6VoXOvQEBf/GaaW24IjeD2X0aE1ZanWM1KIDRvJK3zF+VnwY9g2V+mAAAAAElFTkSuQmCC) no-repeat center center;
		background-size: 100% 100%;
	}
	
	.pull-down-box ul a:nth-of-type(2) i {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAFp3oPPAAAAAXNSR0IArs4c6QAAAzJJREFUWAnVljtrVFEQx3dN8IVY+UphUmgjVkq00VLER2LrB/CDCEISQcTCTrBTCYpgtLC3UAv1A5hYWEaEKFlNNmZdf//rmbOzd+9rV1l0YPbM4z//M3vPnXtvreak3W5vOrdWI9BWQOsWl/kSbFs7qQTJz6wME6XrhiF4HHvN/Lh6xCTR6HcQIoyeDPy4U/AbxFSu3DF0RXaXEOxiSXx+ZmRIDI15BP2BvrNY4Qqwt2tVkHiDvojVOCazAeC3jbYv6FSHKAwv/bEovDNWFBna2/LRlhFkxiVfE3uluMVyVzBX0d25AEsAqtf5KaOcs4LCFZ4VkWVIIxaSjOfrgMkfxdc5S5I7JxYFg7juJMnR7PPtADVAI3UkTWK+WLCb6YOzvK0nZYDN6+hEAE52DYHYgyT3lbER02BkSecaGXiQNTC/VW3uf69KLDKwvY+XqgQ9OAizjj90XXmJc9GzQToA5U30K/oZrXYnGwkFl9A8OZfgyDZTiKYjmAi5RYvZSvx9yI3r3lkPji3rDqhYy/z0Sm4T/ZmOd/liQKa6gs4hNy2AC/WaAiDbezO/I+R2CFA2U0KfySOxXOHdq10Athjw0Swi0rpe9bJOJgCNAM46nSVyqj+k08k9YgDKX0Dz5KwwhUecAMIPLNdRPUqX0WuoZN5j+rYheJDQcDiFF7aMWSRgPpXhCvNwXA5EhbjSJCS5N2NpsQfoLaip3eqDfdobulmKB6ic8U/rOzvwj8bR52gVeQJI0/B3BdLz6IbrQM+qeyG+h3UU3Ydqgu6jypuobjp2hLNqmZJ1NRYFA/yCq1nC3p/GZPng9qL2pBbFsyxc5RgEc2IJMtBYU/vICFj7e6n5TinWW9FkzOeq2hQfMALW5bJHbhGvf5YXv8/yWfz+ld5EeVR3XeK2s/sxbznwHWf3b3Jp/Sgv6rJXYREO/YCaPK5SV4qBTR9HfrRb+PPoFDqGbkM12vqyeIimR/ti3ITkwKMdSTDgmUCfolXlO8BxzzF0mwZOpbo9PfQm/IY0cxD95pq64vNDt2lEH5YfXUM3/JwPtSG+OddQvSztVXB4qA38V5vpy0pv413/QNeNXxjWvZIdtAPeAAAAAElFTkSuQmCC) no-repeat center center;
		background-size: 100% 100%;
	}
	
	.pull-down-box ul a:nth-of-type(3) i {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAF9MBMNAAAAAXNSR0IArs4c6QAAAvNJREFUWAnNWDtOHEEQ3TWWFwksITniADiFBB/AOaEtgSUOQYhDG0JSDoGELYGPQL6k+AAOWGmDxRKgxetXreqe6u6q+e14cUtDd1W9eq96aqYZ6M1ms+NeMvpkIzBL/LnzJSO2LPSEqSYqnxNiRC7m1cE9zUrqY7zwCDL8OsxIy3YWgnKh1s4AigUZ+H7KxGT9NrFLTKLFeCyBFCFCFpa+8jW6+oA/oiRlDF06Aps6j2txvBGAjzQw/NPIT3KRgw3v9w+Lc3unltDOlzJGNoz0lmy1k1GySAkjPBtYHztP/R9fIlrkfaXcyFnTYM39DM6BRttGzinlZWTkYMIbNWg4OedUDSPomqQGFSfw+0SohAoX4o8EajCqjw2QjZlwu5AqVlbcv6YFct4VlB64EpqqSy8R7BMZ4q88Rj1XfbDuDNLWD3OmAbJNXFHLYcpbQOGycR+agO1dkwLQjd4KUdUgkAnnB7+GwIDuYdUA/ofPCTPvIZwqIVCx4LzbCAbnDQUiZw2DyQ4jKJyNO4qcVSZbTcmyjkYAxQDRZyJTQuFYqt1R8Iw8mdZNEgkdVRVj5xuYl7GLLVJpMd5bZE1/ydT73FDVmjqxzW3e6ljLrYpHOQBPmExteVU8JXvHZFZlapwOR/qajZ/egpq+hV7jRb8vXM+8QsHnvFOaPj1XOdZLdSYKavKCibT5l/nfDeDE3Rpg+o1rCdcfXCtpa4EpexyQMve4Mxkg/g2XHwtpLcTcocui+iccVQzArq8M83dzFx0GoOMOcdbdMKkBWMY1ZeAT2Sa4gwD43Tcq611UUgK4sNZCa8iF0aT/opEVA7QnEv5Za6kYoTOUNZhrJCyktdC5FMXlf2lZFSJJtnbPwrX1g39DFDaSPNYhLDHyQP4oAx2tDwTPiVj31ENYArArekvpwI3+iyAxHa2fwLOGw94+fDsS6oSm8s6lKriT6/DtsP8CO/2VYsrsefNNbhBf4UrHlZmQBJDYKL/OC5FILM78r9v6Fx346V9Ef2tUAAAAAElFTkSuQmCC) no-repeat center center;
		background-size: 100% 100%;
	}
	
	.pull-down-box ul a:nth-of-type(4) i {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAjCAYAAAFgNSO1AAAAAXNSR0IArs4c6QAAA8VJREFUWAm9mF9ojlEcx/duM2PZFnZjqV0oRSLZFe3CBVfcTdxQUtxYcYXQ8ifKJZKiGCEXXGBlKDUpiuRKLS2WEuVPW2hmr8/v2Tnv+zvPc877Ps/el199d35/vr/vOc/7vOect9XUGMvn89esH40k1jgJHVCcLMQET22An68BgzaRGCmOJJKSiFptxQlM9aAqtlnfGX1decugWFyzTcpIIfGkCSVDbJRCzE5asZwh/cnlcnU2qUcaFxOv1DmZXlR/gW1OgaDeJigex29FWcgzQB4/mtFyolEKOkH4WMe1Okjlo3ACnBUyYzS1t5Hid+BYgijVRHJKuZgPkWyjrad5mNW2yTui1CdqAWvxNpH0ziwi1NrlxfiM2jcoD0KiTh5ijxF08jqgvq8cR/OjPUbDIyepAhHDgnVFLbo03Ija/H9ai8wSHr27Vf8WH5V6HRg0vOBubjeEAZ9IKEdPrekbL3BILDLJjkIyo0N/tC2iNoJjQPZyRYbGWFkBSJvAMBgHt8Ccsk1xAk0zQcj64/ySsVKZrYnke03tss4HfciXTEPyDKSL2hWpBwV0wQgN6VzcN5zN8bz3IIB0P070xO49ACEktt7THE+9iCcSMY9gz7rKPzNRN5+JDKG32ZdYRSiBiO9ytXM8DPUl8nTst10lxp/UmhPNOgFBto3YK9Cga9Ynv0EIxo7avDPaKmOHUwgE8O6ZnnMOhaS9Yb2rccgqoC/aDYzLojROFxBL/PRRfUGXvh/SbMUm8SeC7DIFeltEDOuy36nuMj0ly1Na+eEczigXcfZDT8mj0UO4XKXSuzRvBe9BOfsMQS780BmQftJSTJkA3AXaPhAcACtAM2gCS8AeMAS0PSNoLDXHtGqIyk1rN5xM6N9MHnW4O6VBWelffR6NYApR+cn7VYl3BsmBAr0LwYTRkHFegJotjdB2IyrD9WzdRTa9p5TO4WIl7KX5oqa7f8Nz2Iq+r6qjydPKdTOmnrrS1yqH4AK74opHxJaC32qBlWyItRUvKC7AwupBv1qguFmOkufwm+K6VYkRngv2gjcgq72j4RCo6uvsRPCtZyVfyMn1vAOsAm2gAcinKw8hh7LcIhfARxA3ya2b1qdGY29MbZRYDlO94zJr098NPgFt5wnKnxqQNgLZTdYGcJxfmJlX5GlAUz7hq3YSM+7yUKdSEG4q8gj+/CC5SgXmmAVeq3mf4Ltvh8QdRbhYpblTyzD3ETX/y0Ijyej/E6Z4u1D4zw7zn1ELPB1NT8Ke/nIhp/s3xT9YOHPXATkFrNX+BSB8ooU9mPUcAAAAAElFTkSuQmCC) no-repeat center center;
		background-size: 100% 100%;
	}
	
	.pull-down-box ul a:nth-of-type(5) i {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAEDGXMMAAAAAXNSR0IArs4c6QAABMZJREFUWAmlmF+oFVUUxu+RMMoe0ohSQS4ZmBAU9P9BTAkFq5eghKDo3XpM0CL6A2VZcoUEIYgIIgp6sfIhIuuhMiJ7KpMsiEhvD964GZWWnn7fPnvtWXvPPnPn3hZ8Z6/9fd9aM3NmZs+cMzERYzgcnrB8kRKInQy/xHyoUeSdISk/EEJVyTdzv4HAQihuAc82tphJsd0YbRrBtrAj2XGdkFUhshyT0UQMK400s83DWCNrnJnTvnSZpL2nD2JgleuYHNCEcRdYHAT/ARkimpTLGI44+SDOSYmmd0mPgNBNPDETzCTa5HmrJN8N0rdrppyAxfOpFSUT5MUZOTI+nHGYPgZZR6bTmUmTiikU2RmvFWyFXFcT1OwwOJt1ZaLD93HOqh0ZbgLm+qJDmCeNsAeiloYkFgmGxUBnbJckxikwA6qnewtCV8xaf2eaMi6MUUiHlolxgmd59H1f07Wbg2i4p2pwJL7roneVo5sUcWU0aPgWjO6BxpKy6DuYiHEJxkXR/HjNE7Xsyqv5dKiro3ltzRC1z2taxmHcFs3ZqYVbE/nOk1I2W0bRr7HQhjcyk5/g0EWpCy3dE+TZxef9rRxzWEYYLUIjJmoawopszhiuauPDbexEpWPvJ+cLnq4mYZlMBpfQxFZEHaqge2tKe/IYsAjfPBNdM0+DQ+A78A7Y4PqpTg1CeD7ksD9FbdzwkIyIustDhEL7gAmLEuMrxtkINwnOAMVu47MR4ZEgD4dbMqGY4LGz1l5CEf9Qk6KmOpWPeLslQs5KaQkVQj5FS4K7PyjD4astsSDw6Yy1m8gHf1xijPuK2jRFf0meRJQJ2q0yxPi61DVHu1d6Tcs4PFrtqkZoWzYvUlH7NDWtTjdpK1semXCFdzW5uVXaELcrHQwGZxuqkulQiOpSOJKaQ+3aE7WeLPvT4Hjk1pdaa475YNyi7qe3wFdxrmF/q2AcgflJV6j0NLim6kfYCc6DMrR06m05C7j0FuEKsiUTXouWLWK6aZVnT5CsqSYYWm8gcGVkqyairQjely29fTzlzuhE31iSlXnpmcTzPDgZoXwS+HjdT2Je4xobR6CXvPJJ5o9YWnpENpULz+i3128g5s1rmTYI7Pms06DcHq+XkL8Iyoc91Nj4DeU5cGW523Dp+eWqZ8a+cakBxm0ML5fNmH8DPgQ/gz/BX+BysBrcAMrTCjWxj5Uk/A6gry7kF8CDEgidvu0hKz8wLwXTwEIPmNtK31xzataCH6wJo+7YO+aqy3QKvnQNXsvEBUzotdn1U3p3rzYYlxSF1/cqnMNEz0ddX92F/YKiT1zhR+Sd11afrvS4ANirkdpv7lOnC1dvdEdU4eJH8geA1qYFBbV+gd07ryYUXwreBLX4DLL+Q2nMVvDbDwv1OzrG1o+mwSZwWJ1cbOpXHZaKja7u7751nT4avu+aPtNpdiI1N7k6pcuc3PlO5X1l7h8Px0qxY77GabMsgqP/XRw5r5Sj2eqO7nfyXhc0Pv14P+pq98xrwzUzzZ5wDT+oeUoO/1XglKv7ovQsaE7Dq11TpXoFvKJsBqdHyg6gb8/HU6X3f83pvAIc81uYI/8HfTvoXDw7xT57zAYuxHcXuBZcBv4F0yA82blIz5D3iv8AygYvrfqZyYcAAAAASUVORK5CYII=) no-repeat center center;
		background-size: 100% 100%;
	}
	

</style>