<template>
  <FavoriteColorCard name="from mepage" favColor="black"/>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FavoriteColorCard from "~/components/FavoriteColorCard.vue"

@Component({
  components: {
    FavoriteColorCard,
  }
})
export default class IndexPage extends Vue {
  name?: 'from mepage'
  favColor?: 'black'
}
</script>
