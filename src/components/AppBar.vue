<template>
  <div>
    <v-toolbar flat dark fixed color="teal" style="z-index: 5">
      <v-toolbar-side-icon @click.stop="leftMenuClick()" />
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-menu nudge-width="100" nudge-bottom="16">
        <template v-slot:activator="{ on }">
          <div class="ml-2" v-on="on">
            <v-avatar size="32">
              <img src="avatar.jpg" />
            </v-avatar>
          </div>
        </template>

        <v-card>
          <v-list>
            <v-list-tile avatar class="mb-2">
              <v-list-tile-avatar>
                <img src="avatar.jpg" alt="John" />
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Indra Pratama Putra</v-list-tile-title>
                <v-list-tile-sub-title
                  >Notaris/PPAT Kabupaten Garut</v-list-tile-sub-title
                >
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
            <v-list-tile v-for="item in profileMenu" :key="item" @click.prevent>
              <v-list-tile-title v-text="item"></v-list-tile-title>
            </v-list-tile>
          </v-list>
          <v-divider />
          <v-card-actions>
            <v-btn depressed block large color="primary">Log Out</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppBar extends Vue {
  // data
  menuLeftStatus = "closed";
  profileMenu = ["All", "Family", "Friends", "Coworkers"];

  leftMenuClick() {
    console.log(this.menuLeftStatus);
  }
}
</script>

<style></style>
