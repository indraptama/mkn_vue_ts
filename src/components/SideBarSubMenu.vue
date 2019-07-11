<template>
  <v-list-group>
    <template v-slot:activator>
      <v-list-tile :to="listMenu.link">
        <v-list-tile-action>
          <v-icon>{{ listMenu.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ listMenu.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
    <v-list-tile
      to="listMenu.link"
      v-for="item in listMenu.submenu"
      :key="item.id"
      @click.stop
    >
      <v-list-tile-content>{{ item.title }}</v-list-tile-content>
    </v-list-tile>
  </v-list-group>
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
export default class sideBarSubMenu extends Vue {}
</script>

<style></style>
