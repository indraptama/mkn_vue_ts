<template>
  <div>
    <div class="blue-grey lighten-5">
      <v-container class="home">
        <h1 class="subheading font-weight-bold">Quick Start</h1>
        <v-container fluid pa-0 grid-list-md>
          <v-layout row wrap justify-start>
            <template v-for="item in quickStart">
              <v-flex shrink :key="item.id">
                <v-card width="256" height="200" :color="item.color" dark hover>
                  <v-img height="100" :src="item.img"></v-img>
                  <v-card-text>
                    <span class="title font-weight-medium">{{
                      item.title
                    }}</span>
                  </v-card-text>
                </v-card>
              </v-flex>
            </template>
          </v-layout>
        </v-container>
      </v-container>
    </div>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
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
      title: "Add Akta Notaris",
      img: "/img/route-img/storage.png",
      link: "/notaris",
      color: "red"
    },
    {
      title: "Add New Akta PPAT",
      img: "/img/route-img/hosting.png",
      link: "/notaris",
      color: "teal"
    },
    { title: "Add New Client", img: "/aa.jpg", link: "/notaris" },
    { title: "Add New Client", img: "/aa.jpg", link: "/notaris" }
  ];
}
</script>
