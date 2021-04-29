<script>
export default {
  name: 'TabsHeaders',

  props: {
    headers: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    handleClick(index) {
      console.log('emitting', index)
      this.$emit('click', index)
    },
  },

  render(h) {
    return h('ul', { attrs: { role: 'tablist' } }, [
      this.headers.map((header, index) =>
        h(
          'li',
          {
            on: {
              click: () => this.handleClick(index),
            },
          },
          [header]
        )
      ),
    ])
  },
}
</script>

<style scoped></style>
