<template>
	<div class="ChildComponent">
	<h1>Hey Im Child Componen</h1>
	{{ someProps }}

	<button  
	@click="handleClick()">
	Click to Fired Parent
	</button>
	</div>
</template>

<script>
export default {
	name: 'ChildComponent',
	props: [ 'someProps' ],
	// props: {
	// 	someProps: {
	// 		type: String,
	// 		default: ''
	// 	}
	// },
	data () {
		return {
			msg: 'Welcome to veu js'
		}
	},
	methods: {
		handleClick () {
			this.$emit('clickMe', 'I pass')
		}
	}
}
</script>

<style>
	
</style>