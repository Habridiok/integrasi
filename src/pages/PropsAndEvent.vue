<template> 
	<div class="prop-and-event">
		<h1>Hello im props</h1>
		<div>
			{{ dataParent }}
		</div>
		<input type="text" v-model="dataParent" placeholder="Input anything">
		<ChildComponent v-bind:someProps="dataParent" @clickMe="someMethod"></ChildComponent>

	</div>
</template>	

<script>
import ChildComponent from '@/components/ChildComponent'
	export default {
		name: 'data-binding',
		components: { ChildComponent },
		data () {
			return {
				dataParent: 'Hey im parent data'
			}
		},
		methods: {
			someMethod (param) {
				alert (`${param}`)
			}
		}
	}
</script>

<style scoped>

</style>