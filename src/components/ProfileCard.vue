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

        <div class="pt-3 pb-3">
          <v-layout align-baseline class="pl-5 pr-5 pt-2 pb-2">
            <v-flex xs4>
              <span class="caption font-weight-medium text--white"
                >Nomor Induk Penduduk</span
              >
            </v-flex>
            <v-flex xs8>
              <span class="body-1">{{ propKTP.nik }}</span>
            </v-flex>
          </v-layout>
          <v-layout align-baseline class="pl-5 pr-5 pt-2 pb-2">
            <v-flex xs4>
              <span class="caption font-weight-medium text--white"
                >Nama Lengkap</span
              >
            </v-flex>
            <v-flex xs8>
              <span class="body-1">{{ propKTP.fullName }}</span>
            </v-flex>
          </v-layout>
          <v-layout align-baseline class="pl-5 pr-5 pt-2 pb-2">
            <v-flex xs4>
              <span class="caption font-weight-medium text--white"
                >Tempat / Tanggal Lahir</span
              >
            </v-flex>
            <v-flex xs8>
              <span class="body-1">{{
                propKTP.birthPlace + ", " + propKTP.birthDate
              }}</span>
            </v-flex>
          </v-layout>
          <v-layout align-baseline class="pl-5 pr-5 pt-2 pb-2">
            <v-flex xs4>
              <span class="caption font-weight-medium text--white"
                >Jenis Kelamin</span
              >
            </v-flex>
            <v-flex xs8>
              <span class="body-1">{{ propKTP.genders }}</span>
            </v-flex>
          </v-layout>
          <v-layout align-baseline class="pl-5 pr-5 pt-2 pb-2">
            <v-flex xs4>
              <span class="caption font-weight-medium text--white"
                >Alamat Lengkap</span
              >
            </v-flex>
            <v-flex xs8>
              <span class="body-1">
                {{
                  propKTP.address.street +
                    " RT." +
                    propKTP.address.rt +
                    " RW." +
                    propKTP.address.rw +
                    " Kelurahan/Desa " +
                    propKTP.address.kelurahan +
                    " Kecamatan " +
                    propKTP.address.kecamatan +
                    " " +
                    propKTP.address.city
                }}
              </span>
            </v-flex>
          </v-layout>
          <v-layout align-baseline class="pl-5 pr-5 pt-2 pb-2">
            <v-flex xs4>
              <span class="caption font-weight-medium text--white"
                >No.Telepone</span
              >
            </v-flex>
            <v-flex xs8>
              <span class="body-1">{{ propKTP.phone }}</span>
            </v-flex>
          </v-layout>
          <v-layout align-baseline class="pl-5 pr-5 pt-2 pb-2">
            <v-flex xs4>
              <span class="caption font-weight-medium text--white">Email</span>
            </v-flex>
            <v-flex xs8>
              <span class="body-1">{{ propKTP.email }}</span>
            </v-flex>
          </v-layout>
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
export default class ProfileCard extends AppProps {}
</script>
