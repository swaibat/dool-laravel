<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-8">
				<div class="card">
					<div class="card-header">Register</div>
					<div class="card-body">
						<form>
							<div class="form-group row">
								<label class="col-md-4 col-form-label text-md-right">Name</label>
								<div class="col-md-6">
									<input v-model="name" type="text" :class="'form-control' + errors.name ? 'is-invalid':''" name="name" required autocomplete="name" autofocus />
									<span v-if="errors.name" class="invalid-feedback" role="alert">
										<strong>{{ errors.name[0] }}</strong>
									</span>
								</div>
							</div>

							<div class="form-group row">
								<label class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

								<div class="col-md-6">
									<input v-model="email" type="email" :class="'form-control' + errors.email && 'is-invalid'" name="email" required autocomplete="email" />
									<span v-if="errors.email" class="invalid-feedback" role="alert">
										<strong>{{ errors.email[0] }}</strong>
									</span>
								</div>
							</div>

							<div class="form-group row">
								<label class="col-md-4 col-form-label text-md-right">Password</label>
								<div class="col-md-6">
									<input v-model="password" type="password" :class="'form-control' + errors.email && 'is-invalid'" name="password" required autocomplete="new-password" />
									<span v-if="errors.password" class="invalid-feedback" role="alert">
										<strong>{{ errors.password[0] }}</strong>
									</span>
								</div>
							</div>
							<div class="form-group row mb-0">
								<div class="col-md-6 offset-md-4">
									<button v-on:click="register" class="btn btn-primary">
										Register
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Register',
	data() {
		return {
			name: '',
			email: '',
			password: '',
			errors: {},
		};
	},
	methods: {
		register() {
			const user = { name: this.name, email: this.email, password: this.password };
			$.post('/api/v1/auth/register', user, res => console.log(res));
		},
	},
};
</script>
