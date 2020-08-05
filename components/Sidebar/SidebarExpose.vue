<template lang="pug">
aside.sidebar
  SidebarHeader
  SidebarInfo
  .sidebar__line
  Contents
</template>

<script lang="ts">
import Vue from 'vue'

import Contents from './Contents.vue'
import SidebarHeader from '@/components/Sidebar/SidebarHeader.vue'
import SidebarInfo from '@/components/Sidebar/SidebarInfo.vue'

export default Vue.extend({
  components: { Contents, SidebarHeader, SidebarInfo },
})
</script>

<style lang="sass" scoped>
.sidebar
  background-color: var(--color-bg-10)
  color: white
  width: 280px
  height: 100vh
  display: flex
  flex-direction: column
  flex-shrink: 0
  overflow: hidden
</style>
