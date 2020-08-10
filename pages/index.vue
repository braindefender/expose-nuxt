<template lang="pug">
.main
  SidebarCatalogue
  .main__main
    .main__header
    .main__content
      .main__block.main__block--slider
        h2.heading-h2 Демонстрируются сейчас
        Slider
      .main__block.main__block--collections
        h2.heading-h2 Обновлённые коллекции
        .main__flex
          Collection(
            v-for="(collection, index) in collections"
            :key="index"
            :collection="collection")
      .main__block.main__block--expose
        h2.heading-h2 Новые выставки
        .main__grid
          ExposeCard(
            v-for="(expose, index) in catalogue"
            :key="index" 
            :expose="expose")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

import ExposeCard from '~/components/Catalogue/ExposeCard.vue'
import Collection from '~/components/Catalogue/Collection.vue'
import Slider from '~/components/Catalogue/Slider/Slider.vue'

@Component({
  components: { ExposeCard, Collection, Slider },
  async asyncData(ctx: Context) {
    const catalogue = await ctx.app.$axios.$get('/catalogue/main2')
    const collections = await ctx.app.$axios.$get('/catalogue/collections', {
      params: { amount: 5 },
    })
    return { catalogue, collections }
  },
})
export default class Main extends Vue {
  test(): void {}
}
</script>

<style lang="sass" scoped>
.main
  display: flex
  height: 100vh


  &__main
    display: flex
    flex-direction: column
    width: 100%


  &__header
    background: url('/images/spsl-background.jpg') center no-repeat
    height: 80px
    flex-shrink: 0
    position: relative

    &::after
      content: ''
      background: rgba(black, 0.4)
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0


  &__content
    display: grid
    grid-auto-rows: min-content
    grid-template-columns: repeat(3, var(--card-width))
    grid-gap: 30px
    color: black
    overflow-y: auto
    padding: 30px 20px


  &__block

    .heading-h2
      margin-bottom: 24px

    &--slider
      grid-column: 1 / 3

    &--collections
      grid-column: 3 / 3

    &--expose
      grid-column: 1 / 4


  &__grid
    display: grid
    grid-template-columns: repeat(3, min-content)
    grid-gap: 30px

  @media only screen and (max-width: 1610px)
    .main__content
      grid-template-columns: repeat(2, var(--card-width))


    .main__grid
      grid-template-columns: repeat(2, min-content)


    .main__flex
      width: 100%
      display: grid
      grid-column-gap: 20px
      grid-template-columns: repeat(2, 1fr)
      grid-template-rows: 1fr 1fr
      overflow: hidden


    .main__block
      &--slider
        grid-column: 1 / 3

      &--collections
        grid-column: 1 / 3

      &--expose
        grid-column: 1 / 3
</style>
