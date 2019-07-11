<template>
  <v-app>
    <AppBar />
    <v-layout fill-height>
      <v-flex shrink class="pt-5">
        <SideBar />
      </v-flex>
      <v-flex>
        <v-content style="padding-top: 64px">
          <router-view />
        </v-content>
      </v-flex>
    </v-layout>
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
