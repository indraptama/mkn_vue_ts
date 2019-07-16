<template>
  <v-card max-width="960">
    <v-layout fill-height>
      <!-- Left -->
      <v-flex xs8>
        <v-layout align-center pa-5>
          <v-card width="96" height="96">
            <v-img :src="propKTP.avatar" />
          </v-card>
          <div class="pl-3">
            <h1 class="title mb-1">{{ propKTP.fullName }}</h1>
            <h2 class="body-1 mb-2">{{ propKTP.nik }}</h2>
            <div>
              <v-icon small>place</v-icon>
              {{ propKTP.address.kecamatan + ", " + propKTP.address.city }}
            </div>
          </div>
        </v-layout>
        <v-divider />
        <v-toolbar flat dense class="pl-4 pr-4">
          <h5>Profile Lengkap</h5>
        </v-toolbar>
        <v-divider />

        <div class="pt-3 pb-3">
          <template v-for="(item,i) in clientProfile">
            <v-layout align-baseline class="pl-5 pr-5 pt-2 pb-2" :key="i">
              <v-flex xs4>
                <span class="caption font-weight-medium text--white">{{item.title}}</span>
              </v-flex>
              <v-flex xs8>
                <span class="body-1">{{ item.value }}</span>
              </v-flex>
            </v-layout>
          </template>
        </div>
      </v-flex>

      <!-- Right -->
      <v-flex xs4 class="bl grey lighten-4">
        <div class="pa-5 white">
          <h4>History</h4>
        </div>
        <v-divider />
        <div class="pa-5">lalala</div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

const AppProps = Vue.extend({
  props: {
    propKTP: Object
  }
});

@Component({})
export default class ProfileCard extends AppProps {
  get clientProfile() {
    return [
      {
        title: "Nomor Induk Kependudukan",
        value: this.propKTP.nik
      },
      {
        title: "Nama Lengkap",
        value: this.propKTP.fullName
      },
      {
        title: "Tempat Tanggal Lahir",
        value: this.propKTP.birthPlace + ", " + this.propKTP.birthPlace
      },
      {
        title: "Jenis Kelamin",
        value: this.propKTP.genders
      },
      {
        title: "Alamat Lengkap",
        value:
          this.propKTP.address.street +
          ", " +
          this.propKTP.address.rt +
          ", " +
          this.propKTP.address.rw +
          ", " +
          this.propKTP.address.kelurahan +
          ", " +
          this.propKTP.address.kecamatan +
          ", " +
          this.propKTP.address.city
      },
      {
        title: "Status Perkawinan",
        value: this.propKTP.martialStatus
      },
      {
        title: "Pekerjaan",
        value: this.propKTP.job
      },
      {
        title: "No. Telephone",
        value: this.propKTP.phone
      },
      {
        title: "email",
        value: this.propKTP.email
      }
    ];
  }
}
</script>
