<template lang="pug">
a.slider-item(:href="link" :style="style")
  h3.slider-item__title {{ item.title }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { prettyDate } from '~/assets/util/date'
import { ExposeCardType } from '~/types/types'

@Component
export default class SliderItem extends Vue {
  @Prop(Object) readonly item!: ExposeCardType

  get link(): string {
    const name = this.item.mode === 'thematic' ? this.item.shortLink : 'vnp'
    return `/expose/${name}-${this.item._id.slice(-8)}`
  }

  // get source(): string {
  //   return this.$store.state.static.sources[this.item.source.full]
  // }

  get date() {
    return prettyDate(this.item.dates.from, this.item.dates.to)
  }

  get style() {
    return `background-image: url(${this.item.image})`
  }
}
</script>

<style lang="sass" scoped>
.slider-item
  display: flex
  align-items: center
  height: 100%
  background: center no-repeat
  background-size: cover
  position: relative
  border-radius: 5px
  text-decoration: none
  color: white
  padding: 30px

  &::after
    content: ''
    border-radius: inherit
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: rgba(black, 0.4)


  &__title
    font-size: 22px
    line-height: 24px
    position: relative
    z-index: 10
    white-space: pre-wrap
</style>
