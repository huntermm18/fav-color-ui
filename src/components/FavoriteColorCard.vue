<template>
  <v-card
    class="mx-auto color-card"
    max-width="700"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Favorite Color Card
        </div>
        <v-list-item-title class="text-h3 mb-1">
          {{ name }}
        </v-list-item-title>
        <br/>
        <v-list-item-subtitle>Favorite Color: {{ color }}</v-list-item-subtitle>
        <v-list-item-subtitle>Net-ID: {{ netId }}</v-list-item-subtitle>
        <br/><br/>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="180"
        :color="color"
      />
    </v-list-item>

    <!-- V-DIALOG -->
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="edit-button"
          color="blue lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit
        </v-btn>
      </template>

      <v-card class="card">
        <v-card-title class="text-h5 grey lighten-2">
          Edit your favorite color
        </v-card-title><br/>

        <v-card-text>
          Select a color
        </v-card-text>
        <v-select
          v-model="color"
          :items="colors"
          label="Colors"
          outlined
          @change="colorChanged()"
        ></v-select>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End V-DIALOG -->

  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { colors } from '~/components/colors'

@Component
export default class FavoriteColorCard extends Vue {
  @Prop({ required: true })
  name?: string

  @Prop({ required: true })
  netId?: string

  @Prop({ required: true })
  favColor?: string

  color: string = ''
  mounted() {
    this.color = this.favColor ?? ''
  }

  colorChanged() {
    this.$emit('colorChanged', this.color)
  }

  colors = colors
  dialog = false
}
</script>


<style>

.color-card {
  margin: 20pt;
}
.edit-button {
  margin: 10px;
}

.card {
  padding: 15pt;
}
</style>
