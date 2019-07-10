<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="menuStatus"
    hide-overlay
  >
    <div class="mt-5">{{ testProps }}</div>
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
  items = [
    { title: "Home", icon: "dashboard" },
    { title: "About", icon: "question_answer" }
  ];

  mounted() {
    // AppMenu.$on("menuLeftisClick", menuStatus => {
    //   this.mini = menuStatus;
    // });
  }

  get menuStatus() {
    return this.$store.state.appSideBarStatus;
  }
}
</script>

<style></style>
