<template>
  <v-app>
    <AppBar />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "@/components/AppBar.vue";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    AppBar,
    HelloWorld
  }
})
export default class App extends Vue {}
</script>

<style></style>
