<template>
  <FavoriteColorCard :key="favColor" :name="name" :fav-color="favColor" :byu-id="byuId" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FavoriteColorCard from '~/components/FavoriteColorCard.vue'

@Component({
  components: {
    FavoriteColorCard
  }
})
export default class byu_id extends Vue {
  name: string = ''
  favColor: string = ''
  byuId: string = ''

  async mounted () {
    this.byuId = this.$route.params.byuId

    // call backend api for this website
    const response = await this.$axios.$get(`https://api.byu.edu:443/domains/fullstack-training/mhm62-fav-color/V1/${this.byuId}`)

    // set favColor
    console.log(response)
    console.log('Favorite Color: ' + this.favColor)
    this.favColor = response.fav_color
    this.byuId = response.byuId
    this.name = response.name
  }
}
</script>
