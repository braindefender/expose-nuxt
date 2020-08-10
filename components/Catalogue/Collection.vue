<template lang="pug">
a.collection(:href="link")
  img.collection__image(:src="image" :alt="metadata")
  .collection__info
    h3.collection__title {{ collection.title }}
    .collection__date {{ date }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { prettyDate } from '~/assets/util/date'
import { CollectionCardType } from '~/types/types'

@Component
export default class CollectionCard extends Vue {
  @Prop(Object) readonly collection!: CollectionCardType

  get date() {
    return prettyDate(this.collection.update)
  }

  get image() {
    return this.collection.image
  }

  get link() {
    return `/collections/${this.collection.alt}`
  }

  get metadata() {
    return `${this.collection.title} - ${prettyDate(this.collection.update)}`
  }
}
</script>

<style lang="sass" scoped>
.collection
  display: flex
  margin-bottom: 8px
  text-decoration: none
  color: black

  &:last-child
    margin-bottom: 0

  &:hover
    .collection__title
      color: var(--color-accent-2)


  &__image
    width: 128px
    height: 48px
    margin-right: 10px
    object-fit: cover
    border-radius: 5px
    box-shadow: 0 0 12px rgba(black, 0.15), 0 4px 8px -4px rgba(black, 0.4)


  &__info
    display: flex
    justify-content: center
    flex-direction: column


  &__title
    width: 272px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    font-size: 16px
    line-height: 18px
    margin-bottom: 1px


  &__date
    font-size: 14px
    opacity: 0.75
</style>
