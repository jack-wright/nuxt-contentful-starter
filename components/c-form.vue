<template>
	<form
		class="c-form"
		:action="`https://formspree.io/${email}`"
		method="POST"
		:id="`${type}-form`">
		<template v-if="type === 'Register'">
			<input
				class="c-form__field c-form__field--input"
				type="hidden"
				name="event"
				:value="eventName">
		</template>
		<label 
			for="name"
			class="c-form__label">Name</label>
		<input
			class="c-form__field c-form__field--input"
			type="text" 
			name="name"
			id="name"
			placeholder="Name"
			required>
		<label 
			for="email"
			class="c-form__label">Email address</label>
		<input
			class="c-form__field c-form__field--input"
			type="email"
			name="email"
			id="email"
			placeholder="Email address"
			required>
		<label 
			for="subject"
			class="c-form__label"
			:style="type !==  'Contact' ? 'display:none' : ''">Subject</label>
		<input
			class="c-form__field c-form__field--input"
			:type="type === 'Contact' 
				? 'text' 
				: hidden"
			name="_subject"
			id="subject"
			:value="type === 'Contact'
				? '' 
				: `Registration for event: ${eventName}`"
			placeholder="Subject"
			required>
		<template v-if="type === 'Contact'">
			<label 
				for="body"
				class="c-form__label">Your message</label>
			<textarea
				class="c-form__field c-form__field--textarea"
				rows="6"
				name="body"
				id="body"
				placeholder="Your message"
				required />
		</template>
		<input
			class="u-button u-button--submit"
			type="submit"
			value="Send">
	</form>
</template>

<script>
export default {
	data() {
		return {
			email: process.env.CONTACT_EMAIL_ADDRESS
		}
	},

	props: [
		'type',
		'eventName'
	]
}
</script>