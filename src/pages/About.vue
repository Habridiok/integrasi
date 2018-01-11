<template> 
	<div>
		Hello im new router
		<div>
			DataA : {{ dataA }}
		</div>
		<div>
			DataB : {{ dataB }}
		</div>
		<div>
			DataC : {{ dataC }}
		</div>
		<div>
			getCount : {{ getCount }}
		</div>
		<input type="text" v-model="dataB">
	</div>
</template>	

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'about',
		data () {
			return {
				dataA: 'A',
				dataB: 'ini B'
			}
		},
		computed: {
			...mapGetters([
				'getCount',
				]),
			dataC: function () {
				//return this.dataA + ' ' + this.dataB
				return `${this.dataA} ${this.dataB}`
			}
		},
		watch: {
			dataB: function (value) {
				console.log("Hey dudeee, im triggered new value : "+ value	)
			}
		}
	}
</script>

<style scoped>

</style>