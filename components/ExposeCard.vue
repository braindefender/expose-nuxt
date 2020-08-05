<template lang="pug">
a.card(:href="link")
  img.card__image(:src="image" :alt="meta")
  .card__info
    .card__title {{ title }}
    .card__date {{ date }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ExposeCard',
  props: { item: { type: Object, required: true } },
  computed: {
    meta() {
      return ''
      // return `${this.item.title} - ${this.prettyDate}`
    },
  },
})
</script>

<style lang="sass" scoped>
.card
  position: relative
  background-color: var(--color-bg-10)
  width: var(--card-width)
  height: var(--card-height)
  border-radius: 16px
  overflow: hidden


  &__image
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    opacity: 0.6
    object-fit: cover


  &__info
    display: flex
    flex-direction: column
    justify-content: space-between
    position: relative
    padding: 24px
    z-index: 10


  &__title
    max-width: 90%
    font-weight: bold
    font-size: 22px
    line-height: 25px
    white-space: pre-wrap


  &__date
    text-align: right
    font-size: 16px
</style>
