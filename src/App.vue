<template>
  <v-app>
    <AppBar />
    <v-content class="pt-5">
      <v-layout fill-height>
        <v-flex shrink>
          <v-navigation-drawer :mini-variant.sync="mini"></v-navigation-drawer>
        </v-flex>
        <v-flex>
          <router-view />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "@/components/AppBar.vue";

@Component({
  components: {
    AppBar
  }
})
export default class App extends Vue {
  // state
  mini = true;
  drawer = true;
  right = null;
  items = [
    { title: "Home", icon: "dashboard" },
    { title: "About", icon: "question_answer" }
  ];
}
</script>

<style></style>
