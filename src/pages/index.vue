<template>
  <div :key="numAdded">
    <!--v-dialog--
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
          Add New
        </v-btn>
      </template>

      <v-card class="card">
        <v-card-title class="text-h5 grey lighten-2">
          Add a New Favorite Color Card *Not saved to database - just for dev
        </v-card-title><br>

        <v-card-text>Enter your name</v-card-text>
        <v-text-field v-model="newPersonName" label="Name" outlined />

        <v-card-text>Enter your BYU-ID</v-card-text>
        <v-text-field v-model="newByuId" label="BYU-ID" outlined />

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

          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="addColorCard(); dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog-->

    <ul v-for="(student, index) in students" :key="student.byuId">
      <v-row v-if="index == 0 || index % 2 == 0" no-gutters>
        <v-col>
          <favorite-color-card :name="student.name" :byu-id="student.byuId" :fav-color="student.fav_color" />
        </v-col>
        <v-col v-if="students[index+1]">
          <favorite-color-card :name="students[index+1].name" :byu-id="students[index+1].byuId" :fav-color="students[index+1].fav_color" />
        </v-col>
      </v-row>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import VueLogo from '~/components/VueLogo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import me from '~/components/FavoriteColorCard.vue'
import FavoriteColorCard from '~/components/FavoriteColorCard.vue'
import { fakeStudents } from '~/components/FakeStudents'
import { colors } from '~/components/colors'

@Component({
  components: {
    FavoriteColorCard,
    VueLogo,
    VuetifyLogo,
    me
  }
})
export default class IndexPage extends Vue {
  students = fakeStudents
  colors = colors
  dialog = false
  numAdded = 0

  newByuId: string = ''
  newFavColor: string = ''
  newPersonName: string = ''

  addColorCard () {
    const newStudent = {
      byuId: this.newByuId,
      name: this.newPersonName,
      fav_color: this.newFavColor
    }
    console.log('in addColorCard()')
    if (!newStudent.byuId || !newStudent.name || !newStudent.fav_color) {
      return
    }
    this.students.push(newStudent)
    this.numAdded++ // key to refresh the DOM
  }

  async mounted () {
    const response = await this.$axios.$get('https://api.byu.edu:443/domains/fullstack-training/mhm62-fav-color/V1/')
    this.students.push.apply(this.students, response)
    console.log(this.students)
  }
}
</script>

<style>
.card {
  padding: 15pt;
}
</style>
