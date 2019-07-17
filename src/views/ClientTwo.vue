<template>
  <div>
    <!-- Page Header -->
    <div class="white">
      <v-container pb-0>
        <v-layout align-center>
          <v-flex>
            <h2 class="display-1 font-weight-thin mb-3 pl-2">Daftar Klien</h2>
            <v-layout>
              <v-flex shrink>
                <v-tabs color="transparent" height="64" :ripple="ripple">
                  <v-tab>Semua Klien</v-tab>
                  <v-tab>Perorangan</v-tab>
                  <v-tab>Badan</v-tab>
                </v-tabs>
              </v-flex>
              <v-flex></v-flex>
              <v-spacer />
            </v-layout>
          </v-flex>
          <v-flex>
            <v-layout justify-end>
              <v-btn dark depressed color="primary">
                <v-icon left>person</v-icon>add new contact
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <!-- Head Contact Client -->
    <v-container pb-0 mb-0>
      <div class="pl-3">
        <span>{{ clientData.length + " Klien" }}</span>
      </div>
      <v-layout pl-3 pr-3>
        <v-flex xs4>
          <v-layout align-center>
            <v-list-tile-content>
              <v-list-tile-title>
                <span class="pb-4 font-weight-medium">Nama Lengkap</span>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-layout>
        </v-flex>
        <v-flex xs3 class="body-1 font-weight-medium">Nomor Telephone</v-flex>
        <v-flex xs3 class="body-1 font-weight-medium">Tempat Kedudukan</v-flex>
        <v-flex xs2 class="body-1 font-weight-medium">Keterangan</v-flex>
      </v-layout>
    </v-container>

    <!-- Daftar Kontak -->
    <v-container>
      <v-list two-line>
        <v-list-tile v-for="item in clientData" :key="item.id" @click.stop>
          <v-layout>
            <v-flex xs4>
              <v-layout align-center>
                <v-list-tile-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.fullName }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text-primary">
                    {{
                    item.nik
                    }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-layout>
            </v-flex>
            <v-flex xs3 class="body-1">{{ item.phone }}</v-flex>
            <v-flex xs3 class="body-1">
              {{
              item.address.kecamatan + ", " + item.address.city
              }}
            </v-flex>
            <v-flex xs2 class="body-1">{{ item.phone }}</v-flex>
          </v-layout>
        </v-list-tile>
      </v-list>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import _ from "lodash";

@Component({})
export default class Client extends Vue {
  ripple = false;
  clientData: Object[] = [];

  mounted() {
    axios.get("http://localhost:3000/people").then(res => {
      let sortByName = _.sortBy(res.data, [
        (people: any) => {
          return people.fullName;
        }
      ]);
      this.clientData = sortByName;
    });
  }
}
</script>

<style></style>
