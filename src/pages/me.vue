<template :key="favColor">

  <FavoriteColorCard v-if="favColor"
    :name="$store.state.user.name.givenName"
    :favColor="favColor"
    :byuId="$store.state.user.byuId"
    :key="favColor"/>
  <v-dialog v-else
    v-model="dialog"
    width="1000"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        class="edit-button"
        color="blue lighten-2"
        dark
        v-bind="attrs"
        width="200"
        v-on="on"
      >
        Set Color
      </v-btn>
    </template>

    <v-card class="card">
      <v-card-title class="text-h5 grey lighten-2">
        Set Color
      </v-card-title><br>

      <v-card-text>Select a color</v-card-text>
      <v-select
        v-model="newFavColor"
        :items="colors"
        label="Colors"
        outlined
      />

      <v-divider />

      <v-card-actions>
        <v-spacer />

        <v-btn color="primary" text @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="primary" text @click="addFavoriteColor(); dialog = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FavoriteColorCard from '~/components/FavoriteColorCard.vue'
 // import { getJWT } from '~/components/GetJWT'
import { fakeStudents } from '~/components/FakeStudents'
import { colors } from '~/components/colors'

@Component({
  components: {
    FavoriteColorCard
  }
})
export default class Me extends Vue {

  name: string = ''
  favColor: string = ''
  newFavColor: string = ''
  netId: string = ''
  students = fakeStudents
  colors = colors

  async mounted () {
    const userByuId = this.$store.state.user.byuId

    // run echo v2 api to get jwt
    const responseJwt = await this.$axios.$get('/api'
      , {
        headers: {
          Authorization: 'Bearer d7675cebedfb2e31d944b16c2a529855'
        }
      })
    const jwt = responseJwt.headers['X-Jwt-Assertion'].at(0)

    // call backend api for this website
    const response = await this.$axios.$get(`https://mhm62-fav-color-dev.byu-oit-fullstack-trn.amazon.byu.edu`
        , {
          headers: {
            'X-Jwt-Assertion': jwt
          }
        })


    const person = response.find(obj => {
      return obj.byuId === userByuId
    })

    this.favColor = person?.fav_color
    console.log('fav color: ' + this.favColor)
  }


  async addFavoriteColor() {
    const responseJwt = await this.$axios.$get('/api'
      , {
        headers: {
          Authorization: 'Bearer d7675cebedfb2e31d944b16c2a529855'
        }
      })
    const jwt = responseJwt.headers['X-Jwt-Assertion'].at(0)

    // call backend api for this website
    const response = await this.$axios.$post(`https://mhm62-fav-color-dev.byu-oit-fullstack-trn.amazon.byu.edu`
      , {
        "byu_id": this.$store.state.user.byuId,
        "fav_color": this.newFavColor
      }
      , {
        headers: {
          'X-Jwt-Assertion': jwt
        }
      })
    console.log(response)
    this.students.push.apply(this.students, response)
    console.log(this.students)

    this.$router.go(0)
  }


  dialog = false
}

</script>
