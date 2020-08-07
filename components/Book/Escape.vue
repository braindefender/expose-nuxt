<template lang="pug">
a.escape(:href="link" :style="style") 
  span {{ title }}
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

  border-radius: 6px
  background: center no-repeat
  background-size: cover
  color: white

  position: relative
  width: 960px
  height: 60px
  padding: 0 38px
  margin-bottom: 10px
  font-size: 15px
  text-decoration: none
  letter-spacing: -0.2px
  overflow: hidden

  &::before, &::after
    content: ''
    position: absolute

  &::before
    top: calc(50% - 8px)
    left: 10px
    width: 16px
    height: 16px
    background: url('/icons/chevron-left.svg') center no-repeat
    background-size: contain

  &::after
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: rgba(black, 0.4)

  > span
    position: relative
    z-index: 10
</style>
