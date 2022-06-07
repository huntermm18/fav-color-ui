<template :key="favColor">
  <div v-if="favColor">
    <FavoriteColorCard
      :key="favColor"
      :name="$store.state.user.name.givenName"
      :fav-color="favColor"
      :byu-id="$store.state.user.byuId"
    />
  </div>

  <div v-else>
    <v-dialog
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
    <div class="missingColorBox">
      <h1>It looks like you haven't set a favorite color yet</h1>
      <img src="https://i.pinimg.com/564x/31/ae/cf/31aecf64a591fe45a108ef8330430b1b--food-inspiration-random-stuff.jpg"/>
    </div>

  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FavoriteColorCard from '~/components/FavoriteColorCard.vue'
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
    const response = await this.$axios.$get('https://api.byu.edu:443/domains/fullstack-training/mhm62-fav-color/V1/')

    // see if the list of people contains the currently logged-in user
    const person = response.find((obj) => {
      return obj.byuId === userByuId
    })

    this.favColor = person?.fav_color
    console.log('fav color: ' + this.favColor)
  }

  async addFavoriteColor () {
    const response = await this.$axios.$post('https://api.byu.edu:443/domains/fullstack-training/mhm62-fav-color/V1/'
      , {
        byu_id: this.$store.state.user.byuId,
        fav_color: this.newFavColor
      })

    // add new favorite color to list of students
    this.students.push.apply(this.students, response)

    // refresh
    this.$router.go(0)
  }

  dialog = false
}

</script>

<style>
.missingColorBox {
  object-fit: scale-down;
  margin-top: 70pt;
  text-align: center;
}
</style>
