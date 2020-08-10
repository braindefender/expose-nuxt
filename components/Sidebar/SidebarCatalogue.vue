<template lang="pug">
Sidebar
  SidebarHeader
  SidebarInfo
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import SidebarInfo from './SidebarInfo.vue'
import SidebarHeader from './SidebarHeader.vue'

@Component({
  components: { SidebarInfo, SidebarHeader },
})
export default class SidebarCatalogue extends Vue {}
</script>
