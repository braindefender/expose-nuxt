<template lang="pug">
.container
  .container__panel
    h2.container__title {{ title }}
    .container__actions
      .container__action(
        v-for="(action, index) in actions"
        :key="index")
        button.container__link(
          v-if="action.type === 'button'"
          @click="action.call") {{ action.title }}
        a.container__link(
          v-if="action.type === 'link'" 
          :href="action.link") {{ action.title }}
  .container__grid
    slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CardsContainer extends Vue {
  @Prop(String) readonly title!: string
  @Prop(Array) readonly actions!: object[]
}
</script>

<style lang="sass" scoped>
.container
  display: grid
  grid-template-rows: min-content 1fr
  grid-row-gap: 20px
  width: 100%


  &__panel
    display: flex
    align-items: center
    justify-content: space-between


  &__title
    font-size: 20px
    font-weight: bold


  &__actions
    display: flex
    > *
      margin-right: 20px
      &::last-child
        margin-right: 0


  &__link
    font-size: 14px


  &__grid
    display: grid
    grid-template-columns: repeat(var(--main-grid-columns), min-content)
    grid-gap: calc((var(--main-width) - var(--main-grid-columns) * var(--main-grid-cell)) / 2)
    grid-auto-flow: row
</style>
