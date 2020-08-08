<template lang="pug">
a.card(:href="expose.link")
  img.card__image(:src="expose.image")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { ExposeCardType } from '~/types/types'

@Component({
  head: { title: this.expose.title },
})
export default class ExposeCard extends Vue {
  @Prop(Object) readonly expose!: ExposeCardType
}
</script>
