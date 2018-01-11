<template>
	<div>
		<h1>Lets Learn Vuex</h1>
		{{getCount}}
 		<ul>
			<li v-for="item in getFilms">
				{{item.name}}
			</li>
		</ul>

		<button @click="handelClick">click me</button>
		<button @click="handelClickAPI">Get API</button>


	</div>
</template>

<script>

	import { mapGetters } from 'vuex'
	export default{
		name: 'LearnVuex',
		computed: {
			...mapGetters([
				'getCount',
				'getFilms'
				])
		},
		methods: {
			handelClick () {
				this.$store.dispatch('doIncrement')
				// alert('click')
			},
			handelClickAPI () {
				this.$store.dispatch('getData')
			}
		}
	}	
</script>