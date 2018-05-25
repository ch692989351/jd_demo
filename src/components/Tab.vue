<template>
	<div class="tab">
		<div class="dash-grid grid-2">
			<div v-for="(item,index) in loginInfo.tabs" @click="tabChange(index)" :class="{'active':loginInfo.nowIndex==index}">
				<span>{{item}}</span>
			</div>
		</div>
		<div>
			<div class="bycount set-margin-t44" v-if="loginInfo.nowIndex==0">
				<div>
					<label>
					账号
				</label>
					<input type="text" v-model="loginInfo.byCount.num" :placeholder="loginInfo.byCount.placeholder_count">
				</div>
				<div>
					<label>
					密码
				</label>
					<input :type="loginInfo.pwIcon.type0" v-model="loginInfo.byCount.pw" :placeholder="loginInfo.byCount.placeholder_pw">
					<img :src="loginInfo.pwIcon.sel" @click="changePdIcon">
				</div>
			</div>

			<div class="bycount bymsg" v-else>
				<div>
					<label>
					手机号
				</label>
					<input type="text" v-model="loginInfo.byMsg.phone" :placeholder="loginInfo.byMsg.placeholder">
				</div>
				<div>
					<label>
					验证码
				</label>
					<input :type="loginInfo.pwIcon.type0" v-model="loginInfo.byCount.pw" :placeholder="loginInfo.byMsg.placeholder_code">
				</div>
			</div>
			<div class="bycount">
				<div class="btn-group">
					<a>登&nbsp;&nbsp;录</a>
					<a>一键登录</a>
				</div>
				<p>
					<a>
						<i></i>忘记密码
					</a>
					<a>
						<i class="phone"></i>手机快速注册
					</a>
				</p>
			</div>
			<div class="otherway">
				<strong>其他登录方式</strong>
			</div>
			<div class="otherway hideline">
				<div>
					<a><img src="../img/iconqq.png"></a>
					<a><img src="../img/iconwechart.png"></a>
				</div>
			</div>
			<div class="agreement-box">
				登录即代表您已经同意<a>京东隐私政策</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tabs',
		data() {
			return {
				loginInfo: {
					pwIcon: {
						pwIcon0: require('../img/seepw.png'),
						pwIcon1: require('../img/sawpw.png'),
						type0: 'password',
						sel: require('../img/seepw.png')
					},
					nowIndex: 0,
					tabs: ['账号密码登录', '短信验证码登录'],
					byCount: {
						num: '',
						pw: '',
						pwShow: '',
						placeholder_count: '用户名/邮箱/已验证手机',
						placeholder_pw: '请输入密码'
					},
					byMsg: {
						phone: '',
						code: '',
						placeholder: '请输入手机号码',
						placeholder_code: '请输入验证码'
					}
				}
			}
		},
		methods: {
			tabChange(index) {
				this.loginInfo.nowIndex = index
			},
			changePdIcon() {
				if(this.loginInfo.pwIcon.type0 == 'text') {
					this.loginInfo.pwIcon.type0 = 'password'
					this.loginInfo.pwIcon.sel = this.loginInfo.pwIcon.pwIcon0
				} else {
					this.loginInfo.pwIcon.type0 = 'text'
					this.loginInfo.pwIcon.sel = this.loginInfo.pwIcon.pwIcon1
				}
			}
		}
	}
</script>

<style lang="scss">
	$bordercolor:#f23030;
	$bordercolor1: #d7d7d7;
	$boxcolor:#333;
	$btnbg:#eee;
	$btncolor:#848689;
	.tab {
		color: $boxcolor;
		.agreement-box{
			text-align: center;
			font-size: 13px;
			padding-top: 1.6rem;
			a{
				text-decoration: underline;
			}
		}
		.otherway {
			line-height: 1.3rem;
			font-size: 13px;
			position: relative;
			text-align: center;
			color: #848689;
			strong {
				background: #FFFFFF;
				padding: 0 .8rem;
			}
			&::after {
				content: '';
				width: 100%;
				height: 1px;
				background: $bordercolor1;
				position: absolute;
				top: 50%;
				left: 0;
				z-index: -1;
			}
			>div {
				margin-top: 2rem;
				padding-top: 2rem;
				a:nth-of-type(1) img {
					display: inline-block;
					width: 26px;
					height: auto;
					position: relative;
					top: -3px;
					margin-right: 30px;
				}
			}
		}
		.hideline{
			&::after {
				opacity: 0;
			}
			div{
				margin-top: 0;
			}
		}
		.bycount {
			margin: 0 1.5rem;
			.btn-group {
				margin-top: 2rem;
				border-bottom: none;
				a {
					display: block;
					width: 100%;
					line-height: 2.7rem;
					box-sizing: border-box;
					text-align: center;
					border-radius: 2px;
					color: $btncolor;
					&:nth-of-type(1) {
						background: $btnbg;
						border: 2px solid $btnbg;
					}
					&:nth-of-type(2) {
						margin-top: 0.8rem;
						color: $bordercolor;
						border: 2px solid $bordercolor;
					}
				}
			}
			>div {
				position: relative;
				line-height: 3rem;
				border-bottom: 1px solid $bordercolor1;
				>img {
					display: inline-block;
					width: 20px;
					height: 20px;
					line-height: 20px;
					position: absolute;
					right: 10px;
					top: .8rem;
				}
				label {
					position: absolute;
					top: 0%;
				}
				input {
					border: none;
					width: 100%;
					padding: 0 3rem;
					outline: none;
					box-sizing: border-box;
				}
			}
			>p {
				margin-top: 1rem;
			}
			>p a {
				display: inline-block;
				font-size: .75rem;
				i {
					position: relative;
					top: .18rem;
					display: inline-block;
					width: 1rem;
					height: 1rem;
					opacity: .7;
					&:nth-of-type(1) {
						background: url(../img/loginpw.png);
						background-size: 100%;
					}
				}
				.phone {
					background: url(../img/loginphone.png)!important;
					background-size: 100% 100%!important;
				}
			}
			>p a:nth-of-type(2) {
				float: right;
			}
		}
		.bymsg {
			input {
				padding-left: 4rem!important;
			}
		}
		.dash-grid {
			border-bottom: 1px solid $bordercolor1;
			text-align: center;
			div {
				line-height: 3rem;
			}
		}
		span {
			line-height: 3rem;
		}
		.active {
			span {
				display: inline-block;
				position: relative;
				&::after {
					content: '';
					width: 100%;
					padding: 0 8px;
					height: 2px;
					margin-left: -8px;
					position: absolute;
					bottom: 0;
					left: 0;
					background: $bordercolor;
				}
			}
		}
	}
</style>