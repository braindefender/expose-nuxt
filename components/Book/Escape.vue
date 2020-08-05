<template lang="pug">
a.escape(:href="link" :style="style") {{ title }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    style(): string {
      return `background-image: url(${this.image});`
    },
  },
})
</script>

<style lang="sass" scoped>
.escape
  display: flex
  align-items: center
  justify-content: center

  background: center no-repeat
  background-size: cover
  color: white

  width: 960px
  height: 60px
  padding: 0 50px
  text-decoration: none
  font-weight: bold
  overflow: hidden
</style>
