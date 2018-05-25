<template>
	<div class="search-wrap" :class="search.scrollFlag?'':'light-bg'">
		<div class="search">
			<div class="search-l">
				<span class="search_img"></span><span class="search-icon"></span>
				<input type="text" :placeholder="search.placeholder">
			</div>
		</div>
		<div class="login">
			<button><router-link to="/login">登录</router-link></button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: {
					placeholder: '满199减100',
					fg: 'background:linear-gradient(#eb88f0,rgba(236,138,237))',
					scrollFlag: true
				}
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			handleScroll() {
				var scrollT = document.getElementsByTagName('html')[0].scrollTop
				if(scrollT >= 60) {
					this.search.scrollFlag = false
				} else {
					this.search.scrollFlag = true
				}
			}
		}
	}
</script>

<style scoped>
	.login a{
		color: #FFFFFF;
		text-decoration: none;
		cursor: pointer;
	}	
	.search-wrap {
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0.2rem 0;
	}
	
	.search-icon {
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAB/0lEQVRIiaXVTUhVQRjG8d+1Mm2TRWALoXLRh4i1yPbRIoNw0SJwGS1KKSqLCgJpU1BBughKaJ2LwEUGfe7aFQR9aUEUVOSuDyIuWlKLM2PT6VzJex848M4z5/3PzHvOzJSGh4dV0DL0YAc6sBLT+IDXuIURfK4EWFjgNeAIjqMp11eP9eHZiTO4gEGU86C6XHs1HuFsAbhITWGAhyG3IrwFD9CeeOPoR1tYUUOI+0NfVHvIbSmCN2A06SyjT1brQUxgKjwTwevAQdl3iJMbRWMefhidIZ5GNy5jJr/URDO4JKt9HKAzsGbhy3EySTqK+3NA87onK1PUicBUJ/vdloaOF2HG89WVkCuweiJ8e/LSVXOXopJmQm5UV4RvSsw7VYCjbifxxghvTsw3NcDT3OYIn0rMXzXA093+M8InE7O1BviqJJ6M8FeJ2VUDfGsSP4nw9CPuxYIqwCX0Ju27ET6Cr8Fsx/4q4H3+nEnfcT3CP+Fc8uJFbJsHeDPOJ+2hwJw9W4bwLMT1GMM+/x7JqUqynTiGJcF7LjuCpfAyduFjaDfKtvRTHMI6LMJirJXV9zGuyW6oqBZZieqhlLvm1uCGv8/0ajSO7vyy32ILTuHLf0C+Kd7VbRgoqmlZds214gBu4h1+yHbz++D1yq62DThWNJl8WWrRCpzGHrzE7t8cqmerthhqyQAAAABJRU5ErkJggg==") no-repeat 100%;
		background-size: contain;
		background-position: 0 0;
		width: 0.8rem;
		height: 0.8rem;
		display: inline-block;
		position: absolute;
		top: .4625rem;
		left: 2.1rem;
	}
	
	.search-wrap button {
		font-size: .9rem;
	}
	
	.search-l {
		background: #FFFFFF;
	}
	
	.search .search_img {
		display: inline-block;
		position: absolute;
		left: .5rem;
		top: 0.4rem;
		width: 1.125rem;
		height: .9325rem;
		background: url(../img/search-logo.png)no-repeat;
		background-size: 100% 100%;
	}
	
	.search input {
		border: none;
		width: 100%;
		height: 1rem;
		font-size: .8rem;
	}
	
	.search {
		background: #FFFFFF;
		position: relative;
		margin: .3rem;
		margin-right: 4rem;
		border-radius: .9375rem;
		padding: .3rem .3rem .3rem 3.8rem;
	}
	
	.login {
		position: absolute;
		right: .5rem;
		top: .7rem;
		margin-top: 0;
	}
	
	.login button {
		background-color: transparent;
		color: #FFFFFF;
		border: none;
	}
</style>