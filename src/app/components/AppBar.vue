<template>
  <div>
    <v-app-bar color="transparent" dense>
      <div>
        <h1 class="font-weight-light">Default Project</h1>
      </div>

      <v-spacer></v-spacer>
      <div>
        <v-switch
          class="mt-5"
          v-model="darkTheme"
          @change="changeTheme()"
          :prepend-icon="icons.mdiWhiteBalanceSunny"
          :append-icon="icons.mdiMoonWaningCrescent"
          color="red lighten-1"
        ></v-switch>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
/* eslint-disable */

import {
  mdiWhiteBalanceSunny,
  mdiMoonWaningCrescent
} from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        mdiWhiteBalanceSunny,
        mdiMoonWaningCrescent
      },
      darkTheme: false
    };
  },
  methods: {
    changeTheme() {
      localStorage.setItem("dark", this.darkTheme);
      if (localStorage.getItem("dark") == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
  created() {
    if (localStorage.getItem("dark") == "true") {
      this.$vuetify.theme.dark = true;
      this.darkTheme = true;
    } else {
      this.$vuetify.theme.dark = false;
      this.darkTheme = false;
    }
  }
};
</script>

<style>
</style>