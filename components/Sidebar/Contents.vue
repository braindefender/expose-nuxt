<template lang="pug">
nav.contents
  ContentsItem(
    v-for="(item, index) in sections" 
    :key="index" 
    :item="item"
    :inner="false")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import ContentsItem from './ContentsItem.vue'
import { ExposeSectionType } from '~/types/types'

@Component({
  components: { ContentsItem },
})
export default class Contents extends Vue {
  get sections(): ExposeSectionType {
    return this.$store.state.expose.sections
  }
}
</script>

<style lang="sass" scoped>
.contents
  display: flex
  flex-direction: column
  padding-left: var(--content-padding)
  padding-right: var(--content-padding)
  padding-bottom: var(--content-padding)
  margin-top: var(--content-padding)
  overflow-y: auto
</style>
