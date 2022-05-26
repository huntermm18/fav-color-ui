<template>
  <FavoriteColorCard :name="this.$store.state.user.name.givenName" :favColor="favColor" :net-id="this.$store.state.user.netId" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FavoriteColorCard from '~/components/FavoriteColorCard.vue'
// import { getJWT } from '~/components/GetJWT'

@Component({
  components: {
    FavoriteColorCard
  }
})
export default class Me extends Vue {

  name: string = 'Cool Person'
  favColor: string = 'black'
  netId: string = 'nid32'

  async mounted() {


    const responseJwt = await this.$axios.$get('https://api.byu.edu:443/echo/v2/echo', {
      headers: {
        Authorization: 'Bearer d7675cebedfb2e31d944b16c2a529855'
      }
    })
    const jwt = responseJwt['X-Jwt-Assertion'].at(0)

    const response = await this.$axios.$get('https://mhm62-fav-color-dev.byu-oit-fullstack-trn.amazon.byu.edu/api/083814923', {
      headers: {
        'X-Jwt-Assertion': jwt
      }
    })
    console.log(response)
    // const response = await this.$axios.$get('/api')
    this.favColor = response.fav_color
    console.log(this.favColor)
  }
}
</script>
