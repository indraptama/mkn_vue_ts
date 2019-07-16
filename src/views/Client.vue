<template>
  <v-layout fill-height>
    <v-flex shrink color="white" min-height="100vh">
      <ClientBox :peopleData="personData" :orgData="orgData" />
    </v-flex>

    <v-flex grow>
      <!-- Profile Card -->
      <v-container justify-center>
        <ProfileCard :propKTP="selectedContact" />
      </v-container>
    </v-flex>
  </v-layout>
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

<style scouped>
.bl {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
