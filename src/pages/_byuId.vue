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

    // run echo v2 api to get jwt
    const responseJwt = await this.$axios.$get('/api'
      , {
        headers: {
          Authorization: 'Bearer d7675cebedfb2e31d944b16c2a529855'
        }
      })
    const jwt = responseJwt.headers['X-Jwt-Assertion'].at(0)

    // call backend api for this website
    const response = await this.$axios.$get(`https://mhm62-fav-color-dev.byu-oit-fullstack-trn.amazon.byu.edu/${this.byuId}`
      , {
        headers: {
          'X-Jwt-Assertion': jwt
        }
      })

    // set favColor
    console.log(response)
    console.log('Favorite Color: ' + this.favColor)
    this.favColor = response.fav_color
    this.byuId = response.byuId
    this.name = response.name
  }
}
</script>
