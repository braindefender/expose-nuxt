<template lang="pug">
.slider(
  v-swiper:mySwiper="swiperDirectiveOption"
  @ready="handleSwiperDirectiveReady")
  .swiper-wrapper
    .swiper-slide(
      v-for="(item, index) in list"
      :key="index")
      SliderItem(:item="item")
  .swiper-pagination.swiper-pagination-bullets
  .slider__navigation
    .slider__date {{ date }}
    .swiper-pagination.swiper-pagination-bullets
    button.slider__arrow.slider__arrow--prev(@click="prev")
    button.slider__arrow.slider__arrow--next(@click="next")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { SwiperOptions } from 'swiper/swiper'

import SliderItem from './SliderItem.vue'

import { ExposeCardType } from '~/types/types'
import { prettyDate } from '~/assets/util/date'

@Component({
  components: { SliderItem },
})
export default class Slider extends Vue {
  mySwiper: any
  active: number = 0
  list: ExposeCardType[] = []
  swiperDirectiveOption: SwiperOptions = {
    loop: false,
    autoplay: {
      delay: 10000,
    },
    effect: 'coverflow',
  }

  async mounted() {
    const res = await this.$axios.$get('/catalogue/current2')
    this.list = res
  }

  get date() {
    if (this.list.length > 0) {
      const dates = this.list[this.active].dates
      return prettyDate(dates.from, dates.to)
    } else {
      return null
    }
  }

  handleSwiperDirectiveReady() {
    this.active = this.mySwiper.activeIndex
    this.mySwiper.updateSlides()
  }

  prev() {
    this.mySwiper.slidePrev()
    this.active = this.mySwiper.activeIndex
  }

  next() {
    this.mySwiper.slideNext()
    this.active = this.mySwiper.activeIndex
  }
}
</script>

<style lang="sass" scoped>
.slider
  width: 850px
  height: 272px
  position: relative


  &__navigation
    display: flex
    align-items: center
    justify-content: center
    height: 32px
    border-radius: 5px
    position: absolute
    z-index: 10
    right: 30px
    bottom: 30px
    --webkit-backdrop-filter: blur(20px)
    background-color: rgba(black, 0.5)


  &__date
    padding: 0 12px
    color: white
    font-size: 14px
    line-height: 20px
    letter-spacing: -0.2px


  &__arrow
    width: 32px
    height: 32px
    background: center no-repeat
    position: relative
    z-index: 100

    &::after
      content: ''
      position: absolute
      top: 8px
      left: 0
      width: 1px
      height: 16px
      background-color: rgba(white, 0.25)

    &--prev
      background-image: url('/icons/chevron-left.svg')

    &--next
      background-image: url('/icons/chevron-right.svg')


.swiper-container
  margin: 0


.swiper-slide
  flex-shrink: 0
  -moz-transform-style: flat
</style>
