<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="menuStatus"
    hide-overlay
    stateless
  >
    <v-list class="mt-4">
      <v-list-tile v-for="item in menuItems" :key="item.id" @click.stop>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppMenu } from "@/plugins/AppMenu";

const AppProps = Vue.extend;

@Component({
  props: {
    testProps: {
      type: String,
      default: "Hallo from Component Props"
    },
    sideBarClosed: {
      type: Boolean,
      default: true
    }
  }
})
export default class SideBar extends Vue {
  // state
  mini = false;
  drawer = true;
  right = null;
  menuItems = [
    { title: "Dashboard", icon: "dashboard" },
    { title: "Notaris", icon: "question_answer" },
    { title: "PPAT", icon: "question_answer" },
    { title: "Tanda Terima", icon: "question_answer" },
    { title: "Kwitansi", icon: "question_answer" }
  ];

  mounted() {
    // AppMenu.$on("menuLeftisClick", menuStatus => {
    //   this.mini = menuStatus;
    // });
  }

  get menuStatus() {
    this.mini = this.$store.state.appSideBarStatus;
    return this.$store.state.appSideBarStatus;
  }
}
</script>

<style></style>
