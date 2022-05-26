<template>
  <FavoriteColorCard name="from mepage" fav-color="black" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FavoriteColorCard from '~/components/FavoriteColorCard.vue'

@Component({
  components: {
    FavoriteColorCard
  }
})

@Component
export default class Me extends Vue {
  name: string = 'Bob Student'
  favColor: string = 'blue'
}
</script>
