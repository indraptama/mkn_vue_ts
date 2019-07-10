<template>
  <div>
    <v-toolbar flat dark color="teal">
      <v-toolbar-side-icon />
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-menu :nudge-width="100">
        <template v-slot:activator="{ on }">
          <div class="ml-2" v-on="on">
            <v-avatar size="32">
              <img src="avatar.jpg" />
            </v-avatar>
            <v-icon dark>arrow_drop_down</v-icon>
          </div>
        </template>

        <v-list>
          <v-list-tile v-for="item in items" :key="item" @click.prevent>
            <v-list-tile-title v-text="item"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppBar extends Vue {
  items = ["All", "Family", "Friends", "Coworkers"];
}
</script>

<style></style>
