<template>
	<div class="myself">
		{{msg}}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'我是用户页面'
			}
		}
	}
</script>

<style scoped>
	.myself{
		background: red;
	}
</style>