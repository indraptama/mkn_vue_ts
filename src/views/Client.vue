<template>
  <v-layout fill-height>
    <v-flex shrink color="white" min-height="100vh">
      <ClientBox :peopleData="personData" :orgData="orgData" />
    </v-flex>

    <v-flex grow>
      <v-card color="blue darken-5" dark flat>
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
      <!-- Profile Card -->

      <v-container justify-center>
        <v-card max-width="1024">
          <v-layout fill-height>
            <!-- Left -->
            <v-flex>
              <v-layout align-center pa-5>
                <v-card width="96" height="96">
                  <v-img :src="personData[0].avatar" />
                </v-card>
                <div class="pl-3">
                  <h1 class="title mb-1">{{ personData[0].fullName }}</h1>
                  <h2 class="body-1 mb-2">{{ personData[0].nik }}</h2>
                  <div>
                    <v-icon small>place</v-icon>
                    {{
                      personData[0].address.kecamatan +
                        ", " +
                        personData[0].address.city
                    }}
                  </div>
                </div>
              </v-layout>
              <v-divider />
              <v-toolbar flat dense class="pl-4 pr-4">
                <h5>Profile</h5>
              </v-toolbar>
              <v-list>
                <v-list-tile class="pl-5 pr-5">{{
                  personData[0].fullName
                }}</v-list-tile>
              </v-list>
            </v-flex>
            <!-- Right -->
            <v-divider vertical />
            <v-flex class="bl grey lighten-4">
              <div class="pa-5 white">
                <h4>History</h4>
              </div>
              <v-divider />
              <div class="pa-5">lalala</div>
            </v-flex>
          </v-layout>
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

<style scouped>
.bl {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
