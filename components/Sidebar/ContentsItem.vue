<template lang="pug">
.contents-item(v-if="item.items && item.items[0].items")
  a.contents-item__header-box(
    :href="getLink(item.header)"
    @click.prevent="scrollTo(getLink(item.header))")
    .contents-item__header {{ item.header }}
    span.contents-item__header-count {{ item.items.length }}
  ul.contents-item__list
    li.contents-item__list-item(
      v-for="(entry, index) in item.items"
      :key="index")
      .contents-item__nested(
        :class="{ 'contents-item__nested--active': entry.active }")
        ContentsItem(:item="entry" :inner="true")
.contents-item(v-else-if="!inner")
  a.contents-item__header-box(
      :href="getLink(item.header)"
      :class="{ 'contents-item__header-box--active': item.active }"
      @click.prevent="scrollTo(getLink(item.header))")
    .contents-item__header {{ item.header }}
    span.contents-item__header-count {{ item.items.length }}
.contents-item(v-else)
  a.contents-item__link(
    :href="getLink(item.header)"
    :class="{ 'contents-item__link--active': item.active }"
    @click.prevent="scrollTo(getLink(item.header))")
    span.contents-item__title {{ item.header }}
    span.contents-item__count {{ item.items.length }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ExposeSectionType } from '~/types/types'

@Component
export default class ContentsItem extends Vue {
  @Prop(Object) readonly item!: ExposeSectionType
  @Prop(Boolean) readonly inner!: boolean

  getLink(header: string): string {
    return `#${header.replace(/\s+/g, '-')}`
  }

  // :href="getLink(item.header)"

  scrollTo(header: string) {
    document.querySelector(header)!.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
</script>

<style lang="sass" scoped>
.contents-item


  &__nested
    padding-left: 12px
    position: relative

    &::before
      position: absolute
      content: ''
      width: 2px
      height: 100%
      margin-left: -12px
      border-radius: 2px

    &--active
      &::before
        background-color: #18AAF2


  &__header, &__header-count
    font-size: 14px
    font-weight: 500
    line-height: 20px
    max-width: 90%


  &__header-box
    color: white
    display: flex
    align-items: center
    justify-content: space-between
    text-decoration: none
    margin-bottom: 12px

    &--active
      color: #18AAF2


  &__list
    position: relative
    margin-bottom: 12px

    &::before
      position: absolute
      content: ''
      width: 2px
      height: 100%
      background-color: #393F45
      border-radius: 2px


  &__link
    display: flex
    align-items: center
    justify-content: space-between
    text-decoration: none
    color: #8F99A3
    font-size: 14px
    line-height: 20px
    min-height: 28px
    margin-bottom: 7px
    position: relative

    &::before
      position: absolute
      content: ''
      width: 2px
      height: 100%
      margin-left: -12px
      border-radius: 2px

    &:hover
      color: hsla(210, 10, 80, 1)


    &--active
      color: #18AAF2

      &::before
        background-color: #18AAF2
      &:hover
        color: #18AAF2
</style>
