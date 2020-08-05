<template lang="pug">
.slider
  div(v-swiper="swiperDirectiveOption")
    .swiper-wrapper
      .swiper-slide(
        v-for="(item, index) in list"
        :key="index")
        SliderItem(:item="item")
    .swiper-pagination.swiper-pagination-bullets
    button.slider__arrow.slider__arrow--prev(slot="button-prev")
    button.slider__arrow.slider__arrow--next(slot="button-next")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { SwiperOptions } from 'swiper/swiper'

import { Context } from '@nuxt/types'

import SliderItem from './SliderItem.vue'

@Component({
  components: { SliderItem },
})
export default class Slider extends Vue {
  swiperDirectiveOption: SwiperOptions = {
    loop: true,
  }

  async asyncData(ctx: Context) {
    const res = await ctx.app.$axios.$get('/catalogue/current')
    if (res.current.length === 0) {
      return { show: false }
    } else {
      return { show: true, list: res.current }
    }
  }
}
</script>
