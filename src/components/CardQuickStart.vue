<template>
  <v-card :color="linkList.color" dark hover :to="linkList.link">
    <v-img height="160" :src="linkList.img">
      <v-layout fill-height justify-center align-end ma-0>
        <v-flex xs12 flexbox>
          <v-layout align-center class="CardFooter">
            <div class="subheading font-weight-medium">
              {{ linkList.title }}
            </div>

            <div class="ml-2">
              <v-icon>arrow_forward</v-icon>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    linkList: {
      type: Object,
      default: {
        title: "Your Title",
        img: "https://placeimg.com/640/480/any",
        link: "/",
        color: "primary"
      }
    }
  }
})
export default class CardQuickStart extends Vue {}
</script>

<style scoped>
.CardFooter {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 0%
  );
  margin: 0;
  padding: 3rem 1rem 0.5rem;
}
</style>
