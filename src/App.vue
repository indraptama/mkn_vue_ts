<template>
  <v-app>
    <AppBar />

    <SideBar />
    <v-content class="blue-grey lighten-5">
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "@/components/AppBar.vue";
import SideBar from "@/components/SideBar.vue";

@Component({
  components: {
    AppBar,
    SideBar
  }
})
export default class App extends Vue {}
</script>

<style></style>
