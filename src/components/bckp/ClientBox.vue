<template>
  <v-sheet width="320" color="white">
    <div class="pa-3 blue-grey lighten-4">
      <v-text-field
        prepend-inner-icon="search"
        placeholder="Cari Klien"
        hide-details
        solo
      />
    </div>

    <v-tabs color="transparent" grow v-model="tabs">
      <v-tab href="#allContact">All</v-tab>
      <v-tab href="#personContact">
        <div>
          <v-icon>person</v-icon>
          <span class="caption block text-capitalize" style="display:block"
            >Perorangan</span
          >
        </div>
      </v-tab>
      <v-tab href="#badanContact">
        <div>
          <v-icon>business</v-icon>
          <span class="caption block text-capitalize" style="display:block"
            >Badan</span
          >
        </div>
      </v-tab>
    </v-tabs>
    <v-divider />
    <v-tabs-items v-model="tabs">
      <v-tab-item value="allContact">
        <div>
          <v-list two-line dense>
            <template v-for="contact in SortByName_All">
              <ClientBoxList
                :key="contact._id"
                :fullName="contact.fullName"
                :nik="contact.nik"
              />
            </template>
          </v-list>
        </div>
      </v-tab-item>
      <v-tab-item value="personContact">
        <div>
          <v-list two-line dense>
            <template v-for="contact in SortByName_People">
              <ClientBoxList
                :key="contact._id"
                :fullName="contact.fullName"
                :nik="contact.nik"
              />
            </template>
          </v-list>
        </div>
      </v-tab-item>
      <v-tab-item value="badanContact">
        <div>
          <v-list two-line dense>
            <template v-for="contact in SortByName_Org">
              <ClientBoxList
                :key="contact._id"
                :fullName="contact.fullName"
                :nik="contact.nik"
              />
            </template>
          </v-list>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import _ from "lodash";

import ClientBoxList from "@/components/ClientBoxList.vue";

@Component({
  components: {
    ClientBoxList
  },
  props: {
    peopleData: {
      type: Array,
      default: []
    },
    orgData: {
      type: Array,
      default: []
    }
  }
})
export default class ClientBox extends Vue {
  tabs = null;

  get SortByName_All() {
    let sort = _.chain(this.peopleData)
      .concat(this.orgData)
      .sortBy([(client: any) => client.fullName])
      .value();
    return sort;
  }
  get SortByName_People() {
    let sorted = _.sortBy(this.peopleData, [(client: any) => client.fullName]);
    return sorted;
  }

  get SortByName_Org() {
    let sorted = _.sortBy(this.orgData, [(client: any) => client.fullName]);
    return sorted;
  }

  // sortByName_People(n) {
  //   let sorted = _.sortBy(n, [(client: any) => client.fullName]);
  // }
}
</script>

<style></style>
