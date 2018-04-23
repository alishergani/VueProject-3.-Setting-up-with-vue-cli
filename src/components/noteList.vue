<!-- <template>
	<div id="Note-list">
		<h2>Note list</h2>
		<button @click="addNote">+ Add Note</button>
		<div class="notes">
			<div 	class="note" 
						v-for="note in notes"
						@click="selectNote(note)">
				{{ note.title }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			addNote() {
				this.$store.dispatch('addNote')
			},
			selectNote(note) {
				console.log(note)
				this.$store.dispatch('selecNote', note)
			}
		},
		computed: {
			notes() {
				return this.$store.getters.notes
			}
		}
	}
</script>

<style>
	#Note-list {
		width: 20%;
		background-color: rgb(45, 64, 33, .3);
	}
</style> -->