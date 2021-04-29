<template>
  <div class="tabs">
    <tabs-headers :headers="headers" @click="selectTab" />
    <div class="tabs-panel">
      <slot />
    </div>
  </div>
</template>

<script>
import TabsHeaders from './TabsHeaders'
export default {
  name: 'MaTabs',

  components: {
    TabsHeaders,
  },

  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      selectedIndex: this.value,
      tabs: [],
    }
  },

  computed: {
    headers() {
      const headers = []
      this.tabs.forEach((tab) => {
        const headerContent = tab.$slots.header?.[0]

        if (headerContent) {
          headers.push(tab.$slots.header?.[0])
        }
      })

      return headers
    },
  },

  created() {
    this.tabs = this.$children
  },

  mounted() {
    if (this.tabs.length) {
      console.log('holi')
      this.tabs[this.selectedIndex].isActive = true
    }
  },

  methods: {
    selectTab(i) {
      if (i === this.selectedIndex) return

      this.selectedIndex = i

      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i
      })

      this.$emit('input', i)
    },
  },
}
</script>

<style lang="postcss"></style>
