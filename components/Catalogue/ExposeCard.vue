<template lang="pug">
a.card(:href="expose.link" :style="style")
  img.card__image(ref="img" :src="expose.image" @load="onLoad")
  .card__info
    h3.card__title {{ expose.title }}
    .card__date {{ date }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import FastAverageColor from 'fast-average-color'
import { ExposeCardType } from '~/types/types'
import { prettyDate } from '~/assets/util/date'

@Component
export default class ExposeCard extends Vue {
  @Prop(Object) readonly expose!: ExposeCardType
  $refs: any
  style: string = ''

  onLoad() {
    const fac = new FastAverageColor()
    fac.getColorAsync(this.$refs.img).then((color) => {
      console.log(color)
      const foreground = color.isDark ? '#fff' : '#000'
      this.style = `background-color: ${color.rgba}; color: ${foreground};`
    })
  }

  get date() {
    return prettyDate(this.expose.dates.public)
  }
}
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-direction: column
  width: 410px
  margin-top: 20px
  padding: 20px
  background: #414658
  border-radius: 10px
  cursor: pointer
  box-shadow: 0 0 24px rgba(black, 0.15), 0 16px 24px -16px rgba(black, 0.6)

  &:hover
    .card__image
      top: -5px


  &__image
    width: 370px
    height: 120px
    position: relative
    top: 0
    margin-top: -40px
    margin-bottom: 20px
    object-fit: cover
    border-radius: 5px
    box-shadow: 0 0 24px rgba(black, 0.15), 0 16px 24px -16px rgba(black, 0.6)
    transition: all ease-in-out 0.3s


  &__info
    display: flex
    align-items: center


  &__title
    font-size: 16px
    line-height: 18px
    max-height: 36px
    color: white


  &__date
    display: flex
    justify-content: center
    align-items: center
    flex-shrink: 0
    height: 30px
    padding: 0 12px
    font-size: 14px
    line-height: 18px
    border-radius: 5px
    color: white
    background: rgba(black, 0.3)
    -webkit-backdrop-filter: blur(20px)
</style>
