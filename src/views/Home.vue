<template>
  <div>
    <!-- Quick Start -->
    <div class="blue-grey lighten-5">
      <v-container pb-0 mb-0>
        <h1 class="display-1 font-weight-thin">Quick Start</h1>
      </v-container>
      <v-container grid-list-md>
        <v-layout row wrap justify-start>
          <template v-for="item in quickStart">
            <v-flex xs12 md6 lg3 :key="item.id">
              <CardQuickStart :linkList="item" />
            </v-flex>
          </template>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import CardQuickStart from "@/components/CardQuickStart.vue";

@Component({
  components: {
    CardQuickStart
  }
})
export default class Home extends Vue {
  quickStart = [
    {
      title: "Daftar Client Baru",
      img: "/img/route-img/client.png",
      link: "/client",
      color: "primary"
    },
    {
      title: "Membuat Akta Notaris",
      img: "/img/route-img/notaris.png",
      link: "/notaris",
      color: "teal"
    },
    {
      title: "Membuat Akta PPAT",
      img: "/img/route-img/ppat.png",
      link: "/notaris",
      color: "primary"
    },
    {
      title: "Membuat Tanda Terima",
      img: "/img/route-img/folder.png",
      link: "/notaris",
      color: "primary"
    }
  ];
}
</script>
