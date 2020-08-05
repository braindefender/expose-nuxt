<template lang="pug">
a.sidebar-header(href="/")
  .sidebar-header__logo
  .sidebar-header__title {{ title }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SidebarHeader',
  data() {
    return {
      title: 'Каталог виртуальных \nвыставок ГПНТБ СО РАН',
    }
  },
})
</script>

<style lang="sass" scoped>
.sidebar-header
  display: flex
  align-items: center
  padding: var(--sidebar-padding)
  background-color: var(--color-bg-15)
  text-decoration: none
  color: white


  &__logo
    width: 40px
    height: 40px
    background: url('/icons/spsl-logo-dark.svg') center no-repeat
    background-size: cover
    margin-right: var(--sidebar-padding)


  &__title
    font-weight: 500
    font-size: 15px
    line-height: 18px
    white-space: pre-wrap
</style>
