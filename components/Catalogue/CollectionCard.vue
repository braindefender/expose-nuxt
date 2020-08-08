<template lang="pug">
.collection-card
  .collection-card__layer.collection-card__image
    img(:src="item.link" :alt="meta")
  .collection-card__layer.collection-card__info
    .collection-card__title {{ item.title }}
    .collection-card__date {{ date }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { prettyDate } from '~/assets/util/date'
import { CollectionCardType } from '~/types/types'

@Component
export default class CollectionCard extends Vue {
  @Prop(Object) readonly item!: CollectionCardType

  get date() {
    return prettyDate(this.item.update)
  }

  get meta() {
    return `${this.item.title} - ${this.date}`
  }

  get image() {
    return this.item.image
  }

  get link() {
    return `/collections/${this.item.alt}`
  }
}
</script>
