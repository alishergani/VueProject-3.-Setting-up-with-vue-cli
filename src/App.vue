<template>
  <div id="app">
    <noteEditor></noteEditor>
    <notePreview></notePreview>
  </div>
</template>

<script>
import noteEditor from './components/noteEditor.vue'
import notePreview from './components/notePreview.vue'

export default {
  components: {
  	noteEditor,
  	notePreview
  }
}
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
	#app {
		display: flex;
	}
</style>
