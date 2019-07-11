<template>
  <v-list-tile @click.stop :to="listMenu.link">
    <v-list-tile-action>
      <v-icon>{{ listMenu.icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ listMenu.title }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    listMenu: {
      default: {}
    }
  }
})
export default class SideBarMenu extends Vue {}
</script>

<style></style>
