<template>
  <div>
    <v-toolbar flat color="primary"></v-toolbar>
    <div style="max-width: 1140px; margin-top: -64px" class="mx-auto">
      <v-card max-width="1396" class="mx-auto">
        <v-layout fill-height>
          <v-flex xs4 shrink color="white" min-height="100vh">
            <ClientBox :peopleData="personData" :orgData="orgData" />
          </v-flex>

          <v-flex xs8 grow class="bl grey lighten-3">
            <!-- Profile Card -->
            <v-toolbar flat></v-toolbar>
            <v-divider />
            <div style="height: calc(100vh - 140px)">
              <vue-scroll>
                <v-container>
                  <ProfileCard :propKTP="selectedContact" />
                </v-container>
              </vue-scroll>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ClientBox from "@/components/ClientBox.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import axios from "axios";
import _ from "lodash";

@Component({
  components: {
    ClientBox,
    ProfileCard
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

    // axios
    //   .get("http://localhost:3000/company")
    //   .then(res => {
    //     this.orgData = res.data;
    //   })
    //   .catch(err => console.log(err));

    fetch("http://localhost:3000/company")
      .then(res => res.json())
      .then(result => (this.orgData = result))
      .catch(err => console.log(err));
  }

  get selectedContact() {
    let selected = _.chain(this.personData)
      .find(["nik", this.$store.state.activeContact])
      .value();
    return selected;
  }
}
</script>

<style scoped>
.bl {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
