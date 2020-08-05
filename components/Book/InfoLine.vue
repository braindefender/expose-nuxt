<template lang="pug">
.info-line
  .info-line__key   {{ item[0] }}
  .info-line__value {{ item[1] }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: { type: Array, required: true },
  },
})
</script>

<style lang="sass" scoped>
.info-line
  display: flex
  align-items: center
  justify-content: space-between
  font-size: 13px
  line-height: 17px


  &__key
    font-weight: bold
</style>
