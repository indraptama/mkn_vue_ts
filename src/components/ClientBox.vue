<template>
  <v-sheet width="320" color="white">
    <div class="pa-3 grey lighten-4">
      <v-text-field
        prepend-inner-icon="search"
        placeholder="Cari Klien"
        hide-details
        solo
        v-model="searchBox"
      />
    </div>

    <v-toolbar dense flat>
      <h6 class="subheading">
        {{
        SortByName_All.length == 0
        ? "Nama tidak ditemukan"
        : SortByName_All.length + " klien"
        }}
      </h6>
      <v-spacer />
      <v-btn color="primary" small depressed>
        <v-icon left>add</v-icon>Add New Client
      </v-btn>
    </v-toolbar>
    <v-divider />

    <v-list two-line dense>
      <template v-for="contact in SortByName_All">
        <ClientBoxList :key="contact._id" :fullName="contact.fullName" :nik="contact.nik" />
      </template>
    </v-list>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import _, { Object } from "lodash";

import ClientBoxList from "@/components/ClientBoxList.vue";

const AppProps = Vue.extend({
  props: {
    peopleData: Array,
    orgData: Array
  }
});

@Component({
  components: {
    ClientBoxList
  }
})
export default class ClientBox extends AppProps {
  tabs = null;
  searchBox = "";

  // computed
  get SortByName_All() {
    let sort = _.chain(this.peopleData)
      .concat(this.orgData)
      .sortBy([(client: any) => client.fullName])
      .value();

    let searchResultName = sort.filter((contact: any) => {
      return _.lowerCase(contact.fullName).match(this.searchBox);
    });

    let searchResultNum = sort.filter((contact: any) => {
      return _.lowerCase(contact.nik).match(this.searchBox);
    });

    return searchResultName;
  }

  get SortByName_People() {
    let sorted = _.sortBy(this.peopleData, [(client: any) => client.fullName]);
    return sorted;
  }

  get SortByName_Org() {
    let sorted = _.sortBy(this.orgData, [(client: any) => client.fullName]);
    return sorted;
  }
}
</script>

<style></style>
