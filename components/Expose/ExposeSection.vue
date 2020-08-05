<template lang="pug">
.expose-section(
  :id="header"
  v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }")
  .expose-section__info
    a.expose-section__header(
      v-if="section.header"
      :class="{ 'expose-section__header--no-margin': hidden }"
      :href="headerLink") {{ section.header }}
    button.expose-section__button(
      :class="{ 'expose-section__button--active': hidden }"
      @click="toggle"
    )
  ul.expose-section__list(v-if="!hidden")
    li.expose-section__list-item(
      v-for="(item, index) in section.items"
      :key="index"
      :class="{ 'expose-section__list-item--full-size': item.header }")
      ExposeSection(v-if="item.header" :section="item")
      BookCard(v-else :book="item")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import BookCard from './BookCard.vue'
import { ExposeSectionType } from '~/types/types'

@Component({
  components: { BookCard },
})
export default class ExposeSection extends Vue {
  @Prop(Object) readonly section!: ExposeSectionType

  data() {
    return {
      hidden: false as boolean,
      intersectionOptions: {
        threshold: [0.4, 0.6],
      },
    }
  }

  $waypointMap!: {
    going: string
    direction: string
    GOING_IN: string
    GOING_OUT: string
    DIRECTION_TOP: string
    DIRECTION_RIGHT: string
    DIRECTION_BOTTOM: string
    DIRECTION_LEFT: string
  }

  get header(): string {
    return `${this.section.header.replace(/\s+/g, '-')}`
  }

  get headerLink(): string {
    return `#${this.section.header.replace(/\s+/g, '-')}`
  }

  onWaypoint({ going }: { going: string; direction: string }) {
    if (going === this.$waypointMap.GOING_IN) {
      this.$store.commit('expose/toggle', { element: this.section, to: true })
      // eslint-disable-next-line no-console
      // console.log(going, direction, this.section.header)
    }
    if (going === this.$waypointMap.GOING_OUT) {
      this.$store.commit('expose/toggle', { element: this.section, to: false })
    }
  }

  toggle() {
    this.$data.hidden = !this.$data.hidden
  }
}
</script>

<style lang="sass" scoped>
.expose-section
  display: flex
  flex-direction: column
  flex-grow: 1
  padding: var(--content-padding)
  background-color: rgba(black, 0.03)
  border-radius: 10px


  &__info
    display: flex
    justify-content: space-between


  &__header
    margin-bottom: var(--content-padding)
    text-decoration: none
    font-weight: 500
    font-size: 16px
    line-height: 20px
    color: var(--color-bg-10)

    &--no-margin
      margin-bottom: 0


  &__button
    width: 22px
    height: 22px
    border-radius: 5px
    background-color: white
    position: relative
    transition: all ease-in-out 0.15s

    &::before, &::after
      position: absolute
      width: 10px
      height: 2px
      content: ''
      transition: all ease-in-out 0.15s
      background-color: #8F99A3
      border-radius: 5px
      top: calc(50% - 1px)
      left: calc(50% - 5px)

    &::before
      transform: rotate(90deg)
      opacity: 0

    &:hover

      &::after, &::before
        background-color: var(--color-accent)

    &--active
      background-color: var(--color-accent)
      &::before
        background-color: white
        opacity: 1
        transform: rotate(180deg)
      &::after
        background-color: white
        transform: rotate(90deg)

      &:hover
        &::after, &::before
          background-color: white


  &__list
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 20px


  &__list-item
    width: 100%

    &--full-size
      grid-column: 1 / 3
</style>
