<template>
	<div class="login">
		<div>
			<commonheader :title="'京东购物'" :rightshow="false" :centershow="false" :path="'/'"></commonheader>
		</div>
		<div>
			<tab></tab>
		</div>
	</div>
</template>

<script>
	import CommonHeader from '../components/CommonHeader.vue'
	import Tab from '../components/Tab.vue'
	export default {
		name: 'login',
		components: {
			commonheader: CommonHeader,
			tab: Tab
		},
		data() {
			return {
					
			}
		}
	}
</script>

<style lang="scss">
	body{
		height: auto;
	}
	.login {
		margin-top: 45px;
		min-height: 100%;
	}
</style>