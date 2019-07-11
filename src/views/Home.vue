<template>
  <div>
    <div class="blue-grey lighten-5">
      <v-container class="home">
        <h1 class="display-1 font-weight-light">Quick Start</h1>
        <v-layout wrap>
          <v-flex xs12 md6 lg3 pa-2>
            <v-card>
              <v-card-title>Klien</v-card-title>
              <v-card-text>Add New Client</v-card-text>
              <v-divider />
              <v-card-actions right>
                <v-btn depressed color="primary">add new client</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 lg3 pa-2>
            <v-card>
              <v-card-title></v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 lg3 pa-2>
            <v-card>
              <v-card-title></v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 lg3 pa-2>
            <v-card>
              <v-card-title></v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
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
export default class Home extends Vue {}
</script>
