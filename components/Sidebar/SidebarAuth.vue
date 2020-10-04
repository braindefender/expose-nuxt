<template lang="pug">
  Sidebar
    SidebarHeader
    SidebarBlocksAuth
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Sidebar from './Sidebar.vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarBlocksAuth from './SidebarBlocksAuth.vue'

@Component({
  name: 'SidebarAuth',
  components: { Sidebar, SidebarHeader, SidebarBlocksAuth }
})
export default class SidebarAuth extends Vue {}
</script>
