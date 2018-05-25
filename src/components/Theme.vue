<template>
	<div class="theme" v-if="show">
		<h5>主题</h5>
		<div @click="langChange(0)">
			经典
		</div>
		<div @click="langChange(1)">
			粉红
		</div>
	</div>
</template>

<script>
	export default {
		name :'theme',
		props:{
			show:false
		},
		methods:{
			
		}
	}
</script>