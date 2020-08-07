<template lang="pug">
  .book-popup
    .book-popup__images(v-if="book.images.length !== 0")
      button.book-popup__preview(
        v-for="(img, index) in book.images")
        img.book-popup__preview-image(
          v-img:group="{ src: full(img), thumbnails: true }"
          :src="img"
          :alt="book.title + '-' + index")
    .book-popup__cover
      img.book-popup__image(
        v-if="book.cover"
        :src="book.cover")
      Placeholder(
        v-else
        :title="book.title"
        :authors="authors"
        :info="book.main")
    .book-popup__card
      .book-popup__main
        .book-popup__top
          .book-popup__authors {{ authors }}
          h1.book-popup__title {{ book.title }}
        .book-popup__main-info
          InfoTag(
            v-for="(item, index) in book.main"
            :key="index"
            :index="index"
            :item="item")
        .book-popup__annotation-block(v-if="!showInfo")
          p.book-popup__annotation(v-for="(part, index) in annotation") {{ part }}
        .book-popup__minor-info(v-else)
          InfoLine(
            v-for="(item, index) in book.info"
            :key="index"
            :item="item")
      .book-popup__controls
        a.btn.book-popup__button(
          :href="book.catalogue"
          target="_blank"
          rel="noopener noreferrer" 
        ) Перейти в каталог
        .book-popup__button-box
          a.btn.book-popup__button(
            v-if="book.contents"
            :href="book.contents"
            :class="{ 'book-popup__button--inactive': !showContents }") Содержание
          button.btn.book-popup__button(
            v-if="!freezeInfo"
            :class="{ 'book-popup__button--inactive': !showInfo }"
            @click="toggleInfo") Дополнительно
    .book-popup__control-buttons(v-if="popup")
      button.btn.btn--mini.btn--close(@click="$emit('close')")
      a.btn.btn--mini.btn--open(:href="link")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import InfoLine from '~/components/Book/InfoLine.vue'
import InfoTag from '~/components/Book/InfoTag.vue'

import { Book } from '~/types/types'

@Component({
  components: { InfoLine, InfoTag },
})
export default class BookPopup extends Vue {
  @Prop(Object) readonly book!: Book
  @Prop(Boolean) readonly popup!: boolean

  freezeInfo: boolean = this.book.annotation === null
  showInfo: boolean = this.book.annotation === null
  showContents: boolean = false

  get authors(): string {
    if (this.book.authors.length !== 0) {
      return this.book.authors.join(', ')
    }
    return 'Автор не указан'
  }

  get annotation(): string[] | null {
    // console.log(this.book.annotation)
    if (this.book.annotation !== undefined) {
      return this.book.annotation.split('\n')
    } else {
      return null
    }
  }

  get link(): string | null {
    const link = this.book.link
    return `${this.$route.path}/book/${link}`
  }

  toggleInfo() {
    this.showInfo = !this.showInfo
  }

  full(path: string) {
    const pos = path.indexOf('/books')
    return path.substr(0, pos + 7) + 'full_' + path.substr(pos + 7)
  }
}
</script>

<style lang="sass" scoped>
.btn
  display: flex
  align-items: center
  justify-content: center
  border: none
  outline: none
  cursor: pointer
  user-select: none
  text-decoration: none
  transition: all ease-in-out 0.15s
  background: white

  &--mini
    width: 32px
    height: 32px
    position: relative
    border-radius: 6px
    border: 0px solid var(--color-accent-2)

    &:hover
      border: 2px solid var(--color-accent-2)

    &::after
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0

  &--close
    &::after
      background: url('/icons/button-close.svg') center no-repeat

  &--open
    &::after
      background: url('/icons/button-open.svg') center no-repeat

.book-popup
  display: flex
  font-family: 'PT Sans'
  position: relative


  &__cover
    position: relative
    width: 320px
    margin-right: 10px
    border: none
    outline: none
    background: white
    border-radius: 6px
    box-shadow: 0 16px 24px -16px rgba(black, 0.2), 0 0 24px rgba(black, 0.1)


  &__image
    display: flex
    height: 100%
    border-radius: inherit
    object-fit: cover
    width: 100%


  &__images
    display: flex
    flex-direction: column
    > button
      margin-bottom: 10px
      &:last-child
        margin-bottom: 0


  &__preview
    border-radius: 6px
    overflow: hidden
    position: absolute
    left: -74px
    top: 0


  &__preview-image
    object-fit: cover
    width: 64px
    height: 96px
    border-radius: 6px
    cursor: pointer
    transition: all ease-in-out 0.15s
    border: 0px solid var(--color-accent-2)

    &:hover
      border: 2px solid var(--color-accent-2)


  &__card
    display: flex
    flex-direction: column
    justify-content: space-between
    color: black
    background-color: white
    border-radius: 6px
    padding: 30px
    width: 630px
    box-shadow: 0 16px 24px -16px rgba(black, 0.2), 0 0 24px rgba(black, 0.1)


  &__top
    margin-bottom: 16px


  &__authors
    font-size: 15px
    letter-spacing: -0.25px
    margin-bottom: 10px
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
    height: 19px


  &__title
    font-size: 20px
    letter-spacing: -0.25px
    font-weight: 400
    max-height: calc(26px * 3)
    text-overflow: ellipsis
    overflow: hidden


  &__main-info
    display: flex
    flex-wrap: wrap
    margin-bottom: 6px
    > div
      margin-right: 10px
      margin-bottom: 10px
      &:last-child
        margin-right: 0


  &__minor-info
    margin-bottom: 16px
    > div
      margin-bottom: 3px
      &:last-child
        margin-bottom: 0


  &__annotation-block
    font-family: Literata
    font-size: 14px
    line-height: 20px
    max-height: calc(20px * 8)
    overflow-y: auto
    letter-spacing: -0.2px
    text-align: justify
    text-indent: 20px
    padding: 12px
    background-color: hsla(221, 100, 64, 0.05)
    margin-bottom: 10px


  &__controls
    display: flex
    align-items: center
    justify-content: space-between


  &__button-box
    display: flex
    > a, > btn
      margin-right: 10px

      &:last-child
        margin-right: 0

  &__button
    font-size: 13px
    font-weight: bold
    border-radius: 4px
    border: 2px solid var(--color-accent-2)
    background-color: var(--color-accent-2)
    color: white
    height: 29px
    padding: 0 8px


    &--inactive
      border: 2px solid rgba(black, 0.15)
      color: var(--color-accent-2)
      background-color: white


  &__control-buttons
    position: absolute
    right: -42px
    top: 0
    > .btn
      margin-bottom: 10px

      &:last-child
        margin-bottom: 0
</style>
