<template lang="pug">
div
  Nuxt
  link(href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet")
  link(href="https://fonts.googleapis.com/css2?family=Literata&display=swap" rel="stylesheet")
</template>

<style lang="sass">
html
  font-family: 'PT Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  scroll-behavior: smooth
  box-sizing: border-box
  background-color: var(--color-BGD)
  color: white

// CSS RESET BEGIN


*,
*::before,
*::after
  box-sizing: border-box
  margin: 0


ul[class],
ol[class]
  padding: 0
  list-style: none

img
  max-width: 100%
  display: block


input, button,
textarea, select
  font: inherit


body, blockquote, dl, dd, p, ul[class], ol[class], li, figure, figcaption, h1, h2, h3, h4, h5, h6
  margin: 0


// CSS RESET END


h1, h2, h3, h4, h5, h6
  font-family: 'PT Sans', -apple-system, 'Segoe UI', sans-serif


button
  margin: 0
  padding: 0
  cursor: pointer
  outline: none
  border: none


.heading-h2
  font-size: 20px
  font-weight: bold
  line-height: 26px


\:root
  --color-bg-10: #171A1C
  --color-bg-15: #22262A
  --color-bg-light: #E5E5E5
  --color-accent: #1861F2
  --color-accent-2: #4680FF
  --main-grid-columns: 3
  --main-grid-cell: 540px
  --main-width: 1700px
  --main-grid-padding: calc((100vw - var(--main-width)) / 2)

  --content-padding: 20px

  --card-width: 410px

  --sidebar-padding: 20px
</style>
