<template lang="pug">
Sidebar
  SidebarHeader
  SidebarInfo
  SidebarContents
</template>

<script lang="ts">
import Vue from 'vue'

import Sidebar from './Sidebar.vue'
import SidebarContents from './SidebarContents.vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarInfo from './SidebarInfo.vue'

export default Vue.extend({
  components: { SidebarContents, SidebarHeader, SidebarInfo, Sidebar },
})
</script>
