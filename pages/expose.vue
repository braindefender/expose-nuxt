<template lang="pug">
.expose
  SidebarExpose
  .expose__main
    .expose__header(
      ref="header"
      :style="headerStyle" 
      :class="{ 'expose__header--small': small }")
      .expose__spacer(v-if="!small")
      h1.expose__title(:class="{ 'expose__title--small': small }") {{ expose.title }}
      .expose__controls(:class="{ 'expose__controls--small': small }")
        button.expose__control.expose__control--prev
        .expose__date {{ date }}
        button.expose__control.expose__control--next.expose__control--inactive
    .expose__content(
      ref="content" 
      :style="contentStyle"
      @scroll.prevent="handleScroll")
      //- .expose__breadcrumbs Каталог » Периодические » Еженедельная выставка новых поступлений отделения ГПНТБ СО РАН
      ExposeSection(
        v-for="(section, index) in expose.sections"
        :key="index"
        :section="section")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { prettyDate } from '~/assets/util/date'

import { Expose } from '~/types/types'

import SidebarExpose from '@/components/Sidebar/SidebarExpose.vue'

@Component({
  components: { SidebarExpose },
})
export default class ExposePage extends Vue {
  small = false
  padding = 20

  $refs!: {
    content: HTMLElement
  }

  get expose(): Expose {
    return this.$store.state.expose
  }

  get background(): string {
    return `background-image: url(${this.$store.state.expose.source.image});`
  }

  get headerStyle(): string {
    return `${this.background}`
  }

  get contentStyle(): string {
    return `padding-top: ${this.padding}px;`
  }

  get date(): string {
    const from = this.$store.state.expose.dates.from
    const to = this.$store.state.expose.dates.to
    if (to !== undefined) {
      return prettyDate(from, to)
    } else {
      return prettyDate(from, null)
    }
  }

  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$store.state)
  }

  handleScroll() {
    const offset = this.$refs.content.scrollTop
    if (offset <= 200) {
      this.small = false
    } else {
      this.small = true
    }
  }
}
</script>

<style lang="sass" scoped>
.expose
  display: flex
  height: 100vh

  &__main
    display: flex
    flex-direction: column
    background-color: white
    flex-grow: 1


  &__header
    display: flex
    height: 340px
    justify-content: space-between
    padding: calc(2 * var(--content-padding))
    background: center no-repeat
    background-size: cover
    position: relative
    flex-direction: column
    flex-shrink: 0
    transition: all ease-in-out 0.5s

    &--small
      height: 80px
      padding: 24px var(--content-padding)
      flex-direction: row
      align-items: center

    &::after
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: rgba(black, 0.66)


  &__spacer
    height: 32px


  &__title
    position: relative
    z-index: 10
    font-weight: 500
    font-size: 24px
    line-height: 29px
    letter-spacing: -0.25px
    white-space: pre-wrap
    transition: all ease-in-out 0.5s

    &--small
      width: 60%
      height: 20px
      white-space: nowrap
      text-overflow: ellipsis
      font-size: 18px
      line-height: 20px
      overflow: hidden


  &__controls
    position: relative
    z-index: 10
    display: flex
    align-items: center
    background-color: rgba(white, 0.15)
    border-radius: 5px
    height: 32px
    align-self: end

    &--small
      align-self: end


  &__control
    width: 32px
    height: 32px
    right: 0
    background: center no-repeat
    transition: all ease-in-out 0.3s
    position: relative

    &--inactive
      opacity: 0.25
      pointer-events: none

    &--prev
      background-image: url('/icons/chevron-left.svg')
      left: 0

      &:hover
        left: -2px

    &--next
      background-image: url('/icons/chevron-right.svg')
      right: 0

      &:hover
        right: -2px


  &__date
    font-size: 14px
    line-height: 20px
    letter-spacing: -0.5px
    color: white
    padding: 0 12px
    position: relative
    display: flex
    align-items: center
    height: 32px

    &::before, &::after
      position: absolute
      content: ''
      top: 8px
      bottom: 8px
      width: 1px
      background-color: rgba(white, 0.2)

    &::before
      left: 0

    &::after
      right: 0


  &__content
    padding: var(--content-padding)
    display: grid
    grid-template-rows: 1fr
    grid-row-gap: var(--content-padding)
    overflow-y: auto


  &__breadcrumbs
    color: var(--color-bg-10)
    font-size: 14px
    line-height: 20px
</style>
