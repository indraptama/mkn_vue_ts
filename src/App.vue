<template>
  <v-app>
    <AppBar />
    <v-content class="pt-5">
      <v-layout fill-height>
        <v-flex shrink>
          <SideBar />
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
