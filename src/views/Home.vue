<template>
  <div>
    <div class="blue-grey lighten-5">
      <v-container class="home">
        <h1 class="subheading font-weight-bold mb-3">Quick Start</h1>
        <v-container fluid pa-0 grid-list-md>
          <v-layout row wrap justify-start>
            <template v-for="item in quickStart">
              <v-flex xs12 md6 lg3 :key="item.id">
                <CardQuickStart :linkList="item" />
              </v-flex>
            </template>
          </v-layout>
        </v-container>
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
      title: "Add New Client",
      img: "/img/route-img/client.png",
      link: "/notaris",
      color: "primary"
    },
    {
      title: "Create Akta Notaris",
      img: "/img/route-img/storage.png",
      link: "/notaris",
      color: "teal"
    },
    {
      title: "Create Akta PPAT",
      img: "/img/route-img/hosting.png",
      link: "/notaris",
      color: "primary"
    },
    { title: "Add New Client", img: "/aa.jpg", link: "/notaris" }
  ];
}
</script>
