<template>
	<div id="Editor">
		<h3>Editor</h3>
		<textarea v-model="content" @input="updateContent" placeholder="Type here.."></textarea>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				content: this.$store.getters.content
			}
		},
		methods: {
			updateContent() {
				this.$store.dispatch('updateContent', this.content)
			}
		}
	}
</script>

<style lang="scss">
	#Editor {
		width:40%;
		height: 99vh;
		textarea {
			width: 100%;
			height: 100%;
			padding: 15px;
			border: none;
			border-right: 3px solid rgba(68, 68, 68, .5);
			resize: none;
			outline: none;
		}
	}
</style>