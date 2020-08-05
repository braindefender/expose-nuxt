<template lang="pug">
a.expose-card(:href="link")
  .expose-card__layer.expose-card__image
    img(:src="image" :alt="meta")
  .expose-card__layer.expose-card__info
    .expose-card__title {{ item.title }}
    .expose-card__date {{ date }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ExposeCardType } from '../../types/types'
import { prettyDate } from '../../assets/util/date'

@Component
export default class ExposeCard extends Vue {
  @Prop(Object) readonly item!: ExposeCardType

  get date() {
    return prettyDate(this.item.dates.public)
  }

  get meta() {
    return `${this.item.title} - ${this.date}`
  }

  get image() {
    return this.item.image
      ? this.item.image
      : this.$store.state.static.sources[this.item.source.full].image
  }

  get link() {
    const name = this.item.mode === 'thematic' ? this.item.shortLink : `vnp`
    return `/expose/${name}-${this.item._id.slice(-8)}`
  }
}
</script>
