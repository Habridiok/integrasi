<template>
	<div>
		<h1>Hey lets learn api</h1>

		<ul>
			<li v-for="(film, index) in films" :key="film.id">
				{{index+1}} {{film.title}} ({{film.release_date}})
			</li>
		</ul>
	
		<button @click="callApi"> Clik api </button>
	</div>
</template>

<script >
	import axios from 'axios'
	export default {
		name: 'LearnApi',
		data () {
			return {
				films:[]
			}
		},
		methods: {
			callApi () {
				const URL = 'https://ghibliapi.herokuapp.com/films'
				//call api here
				axios.get(URL)
					.then(response => {
						console.log('Hi im response', response)
						this.films = response.data
					})
					.catch(error => {
						console.log(error)
					})
			}
		}
	}
</script>

<style scoped>

</style>