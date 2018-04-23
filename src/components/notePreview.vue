<template>
	<div id="Preview">
		<h3>Preview</h3>
		<p v-html="content"></p>
	</div>
</template>
<script>
	import marked from 'marked'
	export default {
		computed: {
			content() {
				return marked(this.$store.getters.content)
			}
		},
		mounted() {}
	}
</script>

<style lang="scss">
	#Preview {
		width:40%;
		p {	
			padding: 10px;
		}
	}
</style>