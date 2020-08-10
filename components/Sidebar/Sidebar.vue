<template lang="pug">
aside.sidebar
  slot
</template>

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
