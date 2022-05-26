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
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>Favorite Color: {{ favColor }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        :color="favColor"
      />
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

@Component({
  name: 'from component'
})

@Component
export default class FavoriteColorCard extends Vue {
  name?: 'from component'
}
</script>
