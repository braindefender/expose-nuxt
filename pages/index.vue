<template lang="pug">
.main
  Navigation

  section.cover
    h1.cover__heading Каталог выставок ГПНТБ СО РАН
  
  section.content
    CardsContainer(
      title="Демонстрируемые")
      Slider

    CardsContainer(
      title="Недавно добавленные")
      ExposeCard(
        v-for="(item, index) in catalogue"
        :key="index"
        :item="item")

    CardsContainer(
      title="Недавно обновлённые коллекции")
      CollectionCard(
        v-for="(item, index) in collections"
        :key="index"
        :item="item")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { Context } from '@nuxt/types'

import CardsContainer from '@/components/Catalogue/CardsContainer.vue'
import ExposeCard from '@/components/Catalogue/ExposeCard.vue'
import Navigation from '@/components/Catalogue/Navigation.vue'
import Slider from '@/components/Catalogue/Slider/Slider.vue'

@Component({
  head: { title: 'Виртуальные выставки ГПНТБ СО РАН' },
  components: {
    CardsContainer,
    ExposeCard,
    Navigation,
    Slider,
  },
})
export default class Main extends Vue {
  async asyncData(ctx: Context) {
    const catalogue = await ctx.app.$axios.$get('catalogue/main')
    const collections = await ctx.app.$axios.$get('/catalogue/collections', {
      params: { amount: 6 },
    })

    return {
      catalogue,
      collections,
      local: false,
    }
  }
}
</script>

<style lang="sass" scoped>
.cover
  display: flex
  align-items: center
  justify-content: center
  color: white
  background: url('/images/spsl-background.jpg') center no-repeat
  background-size: cover
  padding-top: 25%
  position: relative

  &::after
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: rgba(black, 0.25)


  &__heading
    position: relative
    z-index: 10
    font-size: 40px
    margin-top: -25%
</style>
