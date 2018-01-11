<template>
	<div class="container">
		<div class="notification">
			<div class="field">
				<label class="label">Name</label>
				<div class="control">
					<input v-model="name" class="input" type="text" placeholder="Text input">
				</div>
				<label class="label">Street</label>
				<div class="control">
					<input v-model="street" class="input" type="text" placeholder="Text input">
				</div>
				<label class="label">City</label>
				<div class="control">
					<input v-model="city" class="input" type="text" placeholder="Text input">
				</div>
				<label class="label">Province</label>
				<div class="control">
					<input v-model="province" class="input" type="text" placeholder="Text input">
				</div>
				<label class="label">Country</label>
				<div class="control">
					<input v-model="country" class="input" type="text" placeholder="Text input">
				</div>
				<div class="field is-grouped">
					<div class="control">
						<button class="button is-link" @click="handleSaveCustomer">Submit</button>
					</div>
				</div>
				<div class="field is-grouped">
					<div class="control">
						<button class="button is-link" @click="handelCustomerClickAPI">Lihat Customer</button>
					</div>
				</div>
			</div>
		</div>
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Alamat</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in getCustomers">
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td><button class="button is-link" @click="handleDetailCusomer(item.id)">Detil Dan Edit</button></td>
					<td><button class="button is-link" @click="handleDeleteCusomer(item.id)">Delete</button></td>
				</tr>
			</tbody>
		</table>

		<div class="field" v-for="item in customerWithAddress">
				<div class="control">
					<input v-model="item.customer.id" readonly="true" class="input" type="text" placeholder="Text input">
				</div>
				<label class="label">Name</label>
				<div class="control">
					<input v-model="item.customer.name" class="input" type="text" placeholder="Text input">
				</div>
				<label class="label">Street</label>
				<div class="control">
					<input v-model="item.street" class="input" type="text" placeholder="Text input">
				</div>
				<label class="label">City</label>
				<div class="control">
					<input v-model="item.city" class="input" type="text" placeholder="Text input">
				</div>
				<label class="label">Province</label>
				<div class="control">
					<input v-model="item.province" class="input" type="text" placeholder="Text input">
				</div>
				<label class="label">Country</label>
				<div class="control">
					<input v-model="item.country" class="input" type="text" placeholder="Text input">
				</div>
				<div class="field is-grouped">
					<div class="control">
						<button class="button is-link" @click="handleEditCustomer(item.customer.id)">Submit</button>
					</div>
				</div>
		</div>
				
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import axios from 'axios'
	export default{
		name: 'LearnVuex',
		data () {
			return {
				customerWithAddress: []
			}
		},
		computed: {
			...mapGetters([
				'getCustomers',
				
				]),
		},
		methods: {
			handelCustomerClickAPI () {
				this.$store.dispatch('getData');
			},
			handleSaveCustomer: function () {
				const URL = '/api/register'
				axios.post(URL, {
					name: this.name,
					address: {
						country: this.country,
						province: this.province,
						city: this.city,
						street: this.street
					}
				})
					.then(response => {
						alert('success')
					})
					.catch(error => {
						alert(error)
					})
			},
			handleDetailCusomer (id) {
				const URL = '/api/customers/'+id+'/address'
				axios.get(URL)
				.then(response => {
					console.log('Hi im response', response.data)
					this.customerWithAddress = response.data
				})
				.catch(error => {
					console.log(error)
				})
			},
			handleDeleteCusomer (id) {
				const URL = '/api/customer/'+id
				axios.delete(URL)
					.then(response => {
						alert('success')
					})
					.catch(error => {
						alert(error)
					})
			},
			handleEditCustomer (id) {
				const URL = '/api/customer/'+id
				axios.put(URL, {
					name: this.item.customer.name,
					address: {
						country: this.item.country,
						province: this.item.province,
						city: this.item.city,
						street: this.item.street
					}
				})
					.then(response => {
						alert('success')
					})
					.catch(error => {
						alert(error)
					})
			}
		}
	}	
	
</script>