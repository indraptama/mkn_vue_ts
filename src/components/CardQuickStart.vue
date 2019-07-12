<template>
  <v-card height="160" :color="linkList.color" dark hover :to="linkList.link">
    <v-img height="80" :src="linkList.img"></v-img>
    <v-card-text>
      <span class="subheading font-weight-medium">{{ linkList.title }}</span>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    linkList: {
      default: {}
    }
  }
})
export default class CardQuickStart extends Vue {}
</script>

<style scoped></style>
