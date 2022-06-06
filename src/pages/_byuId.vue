<template>
  <FavoriteColorCard :name="name" :fav-color="favColor" :net-id="netId" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FavoriteColorCard from '~/components/FavoriteColorCard.vue'

@Component({
  components: {
    FavoriteColorCard
  }
})
export default class Me extends Vue {
  name: string = 'from _byuId'
  favColor: string = 'purple'
  netId: string = 'nid33'
}
</script>
