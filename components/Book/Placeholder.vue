<template lang="pug">
.cover-placeholder
  .cover-placeholder__authors {{ authors }}
  .cover-placeholder__title {{ title }}
  .cover-placeholder__info
    .cover-placeholder__info-line(
      v-for="(line, index) in info"
      :key="index"
    ) {{ line.join(' ') }}
</template>

<script>
export default {
  props: {
    authors: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    info: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.cover-placeholder
  display: flex
  flex-direction: column
  justify-content: space-between
  overflow: hidden

  padding: 30px
  height: 100%
  min-width: 320px

  font-size: 13px
  text-align: center

  background-color: rgba(black, 0.03)
  border: 1px solid rgba(black, 0.1)
  border-radius: 5px
  color: black

  &__authors
    font-size: 14px
    color: rgba(black, 0.6)

  &__title
    font-size: 15px

  &__info
    display: flex
    flex-direction: column
    align-items: center
</style>
