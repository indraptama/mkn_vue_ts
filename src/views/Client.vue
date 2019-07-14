<template>
  <v-layout fill-height>
    <v-flex shrink color="white" min-height="100vh">
      <ClientBox :peopleData="personData" :orgData="orgData" />
    </v-flex>

    <v-flex grow></v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ClientBox from "@/components/ClientBox.vue";
import axios from "axios";
import _ from "lodash";

@Component({
  components: {
    ClientBox
  }
})
export default class Client extends Vue {
  ripple = false;
  tabs = null;
  personData: Object[] = [];
  orgData: Object[] = [];
  clientData: Object[] = [];

  mounted() {
    axios
      .get("http://localhost:3000/people")
      .then(res => {
        this.personData = res.data;
      })
      .catch(err => console.log(err));

    axios
      .get("http://localhost:3000/company")
      .then(res => {
        this.orgData = res.data;
      })
      .catch(err => console.log(err));
  }
}
</script>

<style></style>
