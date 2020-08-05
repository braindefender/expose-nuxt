<template lang="pug">
.book-card
  .book-card__image-block
    img.book-card__image(
      :src="book.image"
      :alt="book.title")
  .book-card__content-block
    .book-card__main
      .book-card__authors {{ authors }}
      .book-card__title {{ book.title }}
      p.book-card__annotation(v-if="book.annotation") {{ book.annotation }}
    ul.book-card__info
      li.book-card__tag(v-if="book.year") {{ book.year }}
      li.book-card__tag(v-if="book.publisher") {{ book.publisher }}
      li.book-card__tag(v-if="book.pages") {{ book.pages }} с.
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { BookCardType } from '~/types/types'

export default Vue.extend({
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true,
    } as PropOptions<BookCardType>,
  },
  computed: {
    authors(): string {
      return this.book.authors !== null
        ? this.book.authors.join(', ')
        : 'Автор не указан'
    },
  },
})
</script>

<style lang="sass">
.book-card
  display: flex
  padding: 0 20px
  margin-top: 20px
  border-radius: 10px
  background-color: white
  box-shadow: 0px 5px 20px rgba(black, 0.1)
  transition: all ease 0.3s
  cursor: pointer

  &:hover
    box-shadow: 0px 8px 30px rgba(black, 0.15)

    .book-card__image-block
      top: -5px

  &__image-block
    width: 144px
    min-height: 144px
    background-color: rgba(black, 0.15)
    margin-top: calc(-1 * var(--content-padding))
    margin-bottom: var(--content-padding)
    transition: all ease-in-out 0.3s
    flex-shrink: 0
    flex-grow: 0
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
    border-radius: 5px
    position: relative
    top: 0

  &__image
    width: 144px
    height: 216px
    border-radius: 5px
    object-fit: cover

  &__content-block
    padding-top: 20px
    padding-left: 20px
    padding-bottom: 20px
    flex-grow: 1
    flex-shrink: 1
    display: flex
    flex-direction: column
    justify-content: space-between

  &__main
    position: relative

  &__authors
    margin: 0
    padding: 0
    font-size: 15px
    line-height: 19px
    color: var(--color-accent)
    margin-bottom: 10px

  &__title
    margin: 0
    padding: 0
    font-size: 18px
    line-height: 20px
    color: #393F45
    margin-bottom: 10px
    max-height: 60px
    overflow: hidden

  &__annotation
    margin: 0
    padding: 0
    font-size: 14px
    line-height: 16px
    color: #5C6670
    overflow: hidden
    height: 48px

  &__info
    margin: 0
    padding: 0
    list-style-type: none
    display: flex
    padding-top: 14px

  &__tag
    color: #393F45
    font-weight: 500
    font-size: 13px
    line-height: 17px
    padding: 3.5px 8.5px
    padding-top: 4px
    border-radius: 5px
    background-color: #F1F2F4
    margin-right: 10px
    &:last-child
      margin-right: 0
</style>
