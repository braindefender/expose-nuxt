<template lang="pug">
  aside.sidebar
    slot
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'Sidebar'
})
export default class Sidebar extends Vue {}
</script>
</script>

<style lang="sass">
.sidebar
  background-color: var(--color-bg-10)
  color: white
  width: 280px
  height: 100vh
  display: flex
  flex-direction: column
  flex-shrink: 0
  overflow: hidden

.sidebar-separator
  height: 1px
  background-color: rgba(white, 0.1)
  margin: 25px 0
</style>
