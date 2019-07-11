<template>
  <v-navigation-drawer v-model="drawer" clipped stateless fixed app>
    <v-list>
      <!--  -->
      <SideBarMenu :listMenu="menuItems[0]" />
      <SideBarMenu :listMenu="menuItems[1]" />
      <!-- Notaris -->
      <SideBarSubMenu :listMenu="menuNotaris" />
      <SideBarSubMenu :listMenu="menuPPAT" />
      <SideBarMenu :listMenu="menuItems[4]" />
      <SideBarMenu :listMenu="menuItems[5]" />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppMenu } from "@/plugins/AppMenu";
import SideBarMenu from "@/components/SideBarMenu.vue";
import SideBarSubMenu from "@/components/SideBarSubMenu.vue";

const AppProps = Vue.extend;

@Component({
  components: {
    SideBarMenu,
    SideBarSubMenu
  }
})
export default class SideBar extends Vue {
  // state
  mini = true;
  drawer = true;
  right = null;
  menuItems = [
    { title: "Dashboard", icon: "dashboard", link: "/" },
    { title: "Klien", icon: "account_box", link: "/about" },
    {
      title: "Notaris",
      icon: "book",
      link: "/about"
    },
    { title: "PPAT", icon: "public" },
    { title: "Tanda Terima", icon: "cached" },
    { title: "Akunting", icon: "money" }
  ];
  menuNotaris = {
    title: "Notaris",
    icon: "book",
    link: "/about",
    submenu: [
      {
        title: "Akta Notaris",
        icon: "book",
        link: "/"
      },
      {
        title: "Legalisasi",
        icon: "book",
        link: "/"
      },
      {
        title: "Warmerking",
        icon: "book",
        link: "/"
      },
      {
        title: "Daftar Wasiat",
        icon: "book",
        link: "/"
      },
      {
        title: "Keterangan Waris",
        icon: "book",
        link: "/"
      }
    ]
  };

  menuPPAT = {
    title: "PPAT",
    icon: "public",
    link: "/about",
    submenu: [
      {
        title: "Akta PPAT",
        icon: "book",
        link: "/"
      },
      {
        title: "Daftar Sertifikat",
        icon: "book",
        link: "/"
      },
      {
        title: "Warmerking",
        icon: "book",
        link: "/"
      },
      {
        title: "Daftar Wasiat",
        icon: "book",
        link: "/"
      },
      {
        title: "Keterangan Waris",
        icon: "book",
        link: "/"
      }
    ]
  };

  mounted() {
    AppMenu.$on("menuLeftisClick", () => {
      this.drawer = !this.drawer;
    });
  }

  get menuStatus() {
    this.drawer = this.$store.state.appSideBarStatus;
    return this.$store.state.appSideBarStatus;
  }
}
</script>

<style></style>
