<template lang="pug">
a.card(:href="link" :style="style")
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
      const foreground = color.isDark ? '#fff' : '#000'
      this.style = `background-color: ${color.rgba}; color: ${foreground};`
    })
  }

  get link() {
    if (this.expose.source) {
      console.log(this.expose.source)
    }
    return `/expose/${this.expose.shortLink}-${this.expose._id.slice(-8)}`
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
  text-decoration: none
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
    justify-content: space-between


  &__title
    font-size: 16px
    line-height: 18px
    max-height: 36px
    overflow: hidden
    color: white
    letter-spacing: -0.2px
    align-self: flex-start


  &__date
    display: flex
    justify-content: center
    align-items: center
    flex-shrink: 0
    height: 30px
    padding: 0 9px
    font-size: 14px
    line-height: 18px
    border-radius: 5px
    color: white
    background: rgba(black, 0.3)
    -webkit-backdrop-filter: blur(20px)
</style>
