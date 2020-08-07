<template lang="pug">
.page
  Escape(
    v-if="escape"
    :link="escape.link"
    :title="escape.title"
    :image="escape.image")
  BookPopup(:book="book" :popup="true")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { Context } from '@nuxt/types'
import { Book } from '~/types/types'

import BookPopup from '~/components/Book/BookPopup.vue'

@Component({
  components: { BookPopup },

  async asyncData(ctx: Context) {
    const path = ctx.route.path.split('/')
    const pathExpose = path[path.length - 3]
    const pathBook = path[path.length - 1]

    // const link = encodeURI(`/expose/${pathExpose}/book2/${pathBook}`)
    const title = 'vnp-f458f16c'
    const link = encodeURI(`/expose/${title}/book2/Г2020-1575*114695920`)
    console.log(link)
    const book = await ctx.app.$axios.$get(link, { params: {} })
    console.log('Book', book)
    const escape = await ctx.app.$axios.$get('info/escape', {
      params: { _id: book.id, title },
    })
    console.log('Escape', escape.expose)
    return { book, escape: escape.expose }
  },
})
export default class BookPage extends Vue {
  escape: object | null = null

  testbook: Book = {
    title: 'Виктория Кальватоне: судьба одного шедевра.',
    authors: ['Автор не указан'],
    annotation:
      'Амелия - самая добрая девочка-вампир, которую вы когда-либо встречали! Она любит Тыквика (преданную ручную тыкву), обнимашки и сэндвичи с прикуси-языком. Вместе со своими друзьями - Флоренс, Смертиком и принцем Танжином - Амелия отправляется в опасное путешествие в Царство света, чтобы найти пропавшую маму Танжина. Ведь даже принцам очень нужна мама.\nПрисоединяйтесь к очередному приключению Амелии! Будет весело.',

    cover: 'testbook/cover.jpeg',
    images: ['testbook/image-1.jpeg', 'testbook/image-2.jpeg'],
    catalogue: '#',
    link: '#',
    contents: 'null',

    main: [
      ['Издательство', 'Издательство Государственного Эрмитажа'],
      ['Город', 'Москва'],
      ['Год', '2019'],
      ['Стр.', '231, [1]'],
    ],

    info: [
      ['ISBN', '978-5-93572-879-3'],
      ['Общие примечания', 'В надзаг.: Государственный Эрмитаж'],
      ['Предметная рубрика', 'Скульптура древнеримская, Бронза, В скульптуре'],
      ['Редакторы', '340 редактор, Апонасенко, А. Н.'],
      ['Другие коллективы', 'Государственный Эрмитаж, Санкт-Петербург'],
      ['Вид документа', 'Однотомное издание'],
      ['Место хранения', 'Ч/з №3'],
      ['Индекс ГРНТИ', '18.31'],
      ['Примечание', 'авторы статей А. Н. Апонасенко и др.'],
      ['Ответственный редактор', 'А. Н. Апонасенко'],
    ],
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/util/svg-bg.sass'

.page
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  background-color: #f1f2f4
  height: 100vh
  +topography
</style>
