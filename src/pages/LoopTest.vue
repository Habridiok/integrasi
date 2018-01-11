<template>
	<div>
		Loop test
		<ul>
			<li v-for="item in menus">
				{{item.label}}
			</li>
			<router-link v-bind:to"item.url"
			v-for="item in menus">
			<div class="red">
				v-if				
			</div>

		</ul>
	</div>

</template>

<script>
	export default {
		name: 'loop-test',
		data() {
			return {
				list: [1, 2, 3, 4],
				menus: {
					home: {
						url: '/',
						label: 'Home'
					},
					about: {
						url: '/about',
						label: 'About'
					},
					belajar: {
						url: '/belajar-props',
						label: 'Belajar-Props'
					},
					api: {
						url: '/learn-api',
						label: 'LearnApi'
					},
					looptest: {
						url: '/looptest',
						label: 'LoopTest'
					}
				}
			}
		}
	}
</script>

<style scoped>
	
div.red{
	color: red;
}

</style>

