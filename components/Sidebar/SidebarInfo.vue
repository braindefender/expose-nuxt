<template lang="pug">
.sidebar-info
  .sidebar-info__container
    a.sidebar-info__link(
      v-for="(item, index) in info"
      :key="index"
      :href="item.link"
      :class="item.icon"
    ) {{ item.title }}
  .sidebar-separator
</template>

<script lang="ts">
import Vue from 'vue'

import { Info } from '~/types/types'

export default Vue.extend({
  name: 'SidebarInfo',
  computed: {
    info() {
      return this.$store.state.expose.info.map((item: Info) => ({
        ...item,
        icon: `sidebar-info__link--${item.icon}`,
      }))
    },
  },
})
</script>

<style lang="sass" scoped>
.sidebar-info
  display: flex
  flex-direction: column
  padding: var(--sidebar-padding)


  &__link
    display: flex
    align-items: center
    font-size: 14px
    line-height: 20px
    text-decoration: none
    height: 32px
    color: rgba(white, 0.6)
    margin-bottom: var(--sidebar-padding)

    &:last-child
      margin-bottom: 0

    &:visited
      color: rgba(white, 0.4)

    &::before
      content: ''
      width: 32px
      height: 32px
      background: center no-repeat
      background-size: 32px 32px
      margin-right: var(--sidebar-padding)

    &--web
      &::before
        background-image: url('/icons/info-web.svg')

    &--email
      &::before
        background-image: url('/icons/info-email.svg')

    &--phone
      &::before
        background-image: url('/icons/info-phone.svg')

</style>
