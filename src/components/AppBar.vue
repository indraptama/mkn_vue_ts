<template>
  <div>
    <v-toolbar flat dark color="teal">
      <v-toolbar-side-icon />
      <v-toolbar-title>This is MKN</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppBar extends Vue {}
</script>

<style></style>
