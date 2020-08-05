<template lang="pug">
.info-tag(:class="{ 'info-tag--fixed': fixed }")
  .info-tag__key   {{ item[0] }}
  .info-tag__value(
    :class="{ 'info-tag__value--fixed': fixed }"
  ) {{ short }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class InfoTag extends Vue {
  @Prop(Array) readonly item!: [string, string]
  @Prop(Number) readonly index!: number

  get fixed() {
    return this.index !== 0
  }

  get short() {
    if (this.index === 0 && this.item[1].length > 40) {
      return `${this.item[1].substr(0, 40)}…`
    } else {
      return this.item[1]
    }
  }
}
</script>

<style lang="sass" scoped>
.info-tag
  display: flex
  justify-content: center
  align-items: center
  font-size: 13px
  line-height: 17px
  border-radius: 4px
  border: 2px solid rgba(black, 0.15)
  padding: 4px 8px

  &--fixed
    flex-shrink: 0


  &__key
    font-weight: bold
    margin-right: 10px
    flex-shrink: 0

  &__value
    height: 17px
    overflow: hidden
    white-space: nowrap
</style>
