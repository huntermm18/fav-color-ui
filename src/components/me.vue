<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Favorite Color Card
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Hunter M
        </v-list-item-title>
        <v-list-item-subtitle>Favorite Color: Blue</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="blue"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MePage extends Vue {
  head (this: MePage): object {
    return {
      title: 'me'
    }
  }
}
</script>
