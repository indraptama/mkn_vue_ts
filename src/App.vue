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
import AppBar from "@/components/AppBar";
import HelloWorld from "@/components/HelloWorld";

@Component({
  components: {
    AppBar,
    HelloWorld
  }
})
export default class App extends Vue {}


</script>
