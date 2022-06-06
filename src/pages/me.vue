<template>
  <FavoriteColorCard :name="this.$store.state.user.name.givenName" :favColor="favColor" :net-id="this.$store.state.user.netId" :key="this.favColor"/>
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

    //const responseJwt = await this.$axios.$get('https://api.byu.edu:443/echo/v2/echo')
    const responseJwt = await this.$axios.$get('/api'
      , {
      headers: {
        Authorization: 'Bearer d7675cebedfb2e31d944b16c2a529855'
      }
    })
    console.log(responseJwt.headers['X-Jwt-Assertion'])
    const jwt = responseJwt.headers['X-Jwt-Assertion'].at(0)
    //const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlkySTVNemd4WWpZNVlUUXdNVGxqWkRVek4yWTJaamxqTURVNFpXWmpaVE14WmpWbU9USmxNZyJ9.eyJpc3MiOiJodHRwczovL2FwaS5ieXUuZWR1IiwiZXhwIjoxNjU0NTI4MjUwLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL3N1YnNjcmliZXIiOiJCWVUvbWhtNjIiLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FwcGxpY2F0aW9uaWQiOiIxMjM5NiIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvYXBwbGljYXRpb25uYW1lIjoiRGVmYXVsdEFwcGxpY2F0aW9uIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcHBsaWNhdGlvbnRpZXIiOiJVbmxpbWl0ZWQiLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FwaWNvbnRleHQiOiIvZWNoby92MiIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvdmVyc2lvbiI6InYyIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy90aWVyIjoiVW5saW1pdGVkIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9rZXl0eXBlIjoiU0FOREJPWCIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvdXNlcnR5cGUiOiJBUFBMSUNBVElPTiIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvZW5kdXNlciI6Im1obTYyQGNhcmJvbi5zdXBlciIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvZW5kdXNlclRlbmFudElkIjoiLTEyMzQiLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2NsaWVudF9pZCI6InEyRHdKUmRFWmZDRFpteUFrUWZSZ1JySE9VRWEiLCJodHRwOi8vYnl1LmVkdS9jbGFpbXMvY2xpZW50X3Jlc3Rfb2ZfbmFtZSI6Ik1pY2hhZWwgSHVudGVyIiwiaHR0cDovL2J5dS5lZHUvY2xhaW1zL2NsaWVudF9wZXJzb25faWQiOiI1NDAyMjU4MzIiLCJodHRwOi8vYnl1LmVkdS9jbGFpbXMvY2xpZW50X3NvcnRfbmFtZSI6Ik1hZHNlbiwgTWljaGFlbCBIdW50ZXIiLCJodHRwOi8vYnl1LmVkdS9jbGFpbXMvY2xpZW50X2NsYWltX3NvdXJjZSI6IkNMSUVOVF9TVUJTQ1JJQkVSIiwiaHR0cDovL2J5dS5lZHUvY2xhaW1zL2NsaWVudF9uZXRfaWQiOiJtaG02MiIsImh0dHA6Ly9ieXUuZWR1L2NsYWltcy9jbGllbnRfc3Vic2NyaWJlcl9uZXRfaWQiOiJtaG02MiIsImh0dHA6Ly9ieXUuZWR1L2NsYWltcy9jbGllbnRfbmFtZV9zdWZmaXgiOiIgIiwiaHR0cDovL2J5dS5lZHUvY2xhaW1zL2NsaWVudF9zdXJuYW1lIjoiTWFkc2VuIiwiaHR0cDovL2J5dS5lZHUvY2xhaW1zL2NsaWVudF9zdXJuYW1lX3Bvc2l0aW9uIjoiTCIsImh0dHA6Ly9ieXUuZWR1L2NsYWltcy9jbGllbnRfbmFtZV9wcmVmaXgiOiIgIiwiaHR0cDovL2J5dS5lZHUvY2xhaW1zL2NsaWVudF9ieXVfaWQiOiIwODM4MTQ5MjMiLCJodHRwOi8vYnl1LmVkdS9jbGFpbXMvY2xpZW50X3ByZWZlcnJlZF9maXJzdF9uYW1lIjoiSHVudGVyIn0.eplqn2N3PncsnkREcPP7ghiAQUe80MCQE_nUj3JlM98dvUguaVc7Xqivuwrc_TuRvHJwSq33HY4WOkVZhZtzTcstKwEwruosBRII9dI0Ujl5qj5IST6Sw47GE0R2k-xZ5wVWconIdRir7A1Xm5v5pLS4p1lVAp_mawYPp7qgb9T9bESvV5uCylloZHDjPK3NrJyG1cQwaGhCMYKTjlSoN7XE6kBgQ0l7RFgbTnGKYNC983L60rAIDJIhfyOIqK3aw8bFPvVH5-LIBH_LfI7b1uNtC7oyJpiOSGRn2Fd88YB6qvqZlUGBM8gCDpmZlvZbr_EgRn-qU1p5MArMQDuXPg'
    // console.log('responseFromJWT call: ', responseJwt['X-Jwt-Assertion'])
    // console.log(jwt)

    const response = await this.$axios.$get(`https://mhm62-fav-color-dev.byu-oit-fullstack-trn.amazon.byu.edu/${this.$store.state.user.byuId}`
     , {
      headers: {
        'X-Jwt-Assertion': jwt
      }
    })
    // console.log(response)
    // // const response = await this.$axios.$get('/api')
    this.favColor = response.fav_color
    console.log(this.favColor)
    console.log(response)
  }
}
</script>
