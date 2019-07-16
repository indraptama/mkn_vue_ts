<template>
  <div>
    <v-list-tile @click="getID(nik)">
      <v-list-tile-avatar color="teal">
        <span class="white--text headline">{{ fullName.charAt(0) }}</span>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ fullName }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ nik }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider inset />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    _id: {
      default: 0
    },
    nik: {
      default: 0
    },
    fullName: {
      type: String,
      default: "a"
    }
  }
})
export default class ClientBoxList extends Vue {
  getID(nik: String) {
    this.$store.dispatch("updateActiveContact", nik);
  }
}
</script>

<style></style>
