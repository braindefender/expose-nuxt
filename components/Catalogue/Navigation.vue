<template lang="pug">
nav.nav
  ul.nav__list
    li.nav__list-item
      a.nav__link.nav__link--spsl(href="http://spsl.nsc.ru") ГПНТБ СО РАН
    li.nav__list-item
      a.nav__link(href="/")            Главная
    li.nav__list-item
      a.nav__link(href="/catalogue")   Каталог
    li.nav__list-item
      a.nav__link(href="/collections") Коллекции
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navigation',
})
</script>

<style lang="sass" scoped>
.nav
  display: flex
  align-items: center
  background-color: var(--color-bg-10)
  height: 48px
  padding: 0 var(--main-grid-padding)


  &__list
    display: flex
    align-items: center
    list-style-type: none
    > li
      margin-right: 20px
      &:last-child
        margin-right: 0


  &__link
    text-decoration: none
    font-size: 14px
    color: white

    &:hover
      color: #79a3ff

    &--spsl
      position: relative
      font-weight: bold
      font-size: 18px
      margin-left: 45px

      &::after
        content: ''
        position: absolute
        top: -5px
        left: -45px
        width: 32px
        height: 32px
        background: url('~assets/icons/spsl-logo.svg') center no-repeat
        background-size: cover
</style>
