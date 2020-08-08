<template lang="pug">
a.slider-item(:href="link")
  .slider-item__inner.slider-item__image
    img(:src="item.image || source.image" :alt="item.meta")
  .slider-item__inner.slider-item__content
    .slider-item__title {{ item.title }}
    .slider-item__info
      .slider-item__date(v-if="item.dates.from") {{ date }}
      .slider-item__place {{ source.title }}
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

  get source(): string {
    return this.$store.state.static.sources[this.item.source.full]
  }

  get date() {
    return prettyDate(this.item.dates.from, this.item.dates.to)
  }
}
</script>

<style lang="sass" scoped>
.slider-item
  display: flex
  position: relative
  height: 225px
  cursor: pointer
  text-align: center
  color: white


  &__content
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center


  &__inner
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0


  &__image
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    border-radius: 5px
    overflow: hidden
    -webkit-mask-image: -webkit-radial-gradient(white, black)

    img
      width: 100%

    &::after
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: rgba(black, 0.4)


  &__title
    font-size: 18px
    font-weight: bold
    line-height: 22px
    white-space: pre


  &__info
    position: absolute
    bottom: 35px


  &__date
    font-size: 16px
    line-height: 20px


  &__place
    font-size: 13px
    color: rgba(white, 0.6)
</style>
