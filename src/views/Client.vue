<template>
  <v-layout fill-height>
    <v-flex shrink color="white" min-height="100vh">
      <ClientBox :peopleData="personData" :orgData="orgData" />
    </v-flex>

    <v-flex grow>
      <v-container>
        <v-card color="teal" dark flat>
          <v-img height="200">
            <v-layout align-end fill-height>
              <v-flex pa-4>
                <v-layout align-end>
                  <v-avatar size="80">
                    <v-img :src="personData[0].avatar" />
                  </v-avatar>
                  <div class="pl-3 align-self-end">
                    <h1 class="title mb-1">{{ personData[0].fullName }}</h1>
                    <h2 class="body-1 mb-1">{{ personData[0].nik }}</h2>
                    <div>
                      <v-icon small>place</v-icon>
                      {{
                      personData[0].address.kecamatan +
                      ", " +
                      personData[0].address.city
                      }}
                    </div>
                  </div>
                  <v-spacer />
                  <div class="align-self-end">
                    <v-layout>
                      <v-flex pl-2 pr-2>
                        <h4>12</h4>
                        <div class="caption">akta</div>
                      </v-flex>
                      <v-flex pl-2 pr-2>
                        <h4>19</h4>
                        <div class="caption">Menerima Berkas</div>
                      </v-flex>
                      <v-flex pl-2 pr-2>
                        <h4>12 Juni 2019</h4>
                        <div class="caption">Terakhir Menghadap</div>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-img>
        </v-card>
      </v-container>
    </v-flex>
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
