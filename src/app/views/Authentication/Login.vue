<template>
  <div class="fullscreen d-flex">
    <v-col v-if="$vuetify.breakpoint.mdAndUp" class="fullscreen ma-0 pa-0" cols="6">
      <v-img
        class="fullscreen"
        src="https://source.unsplash.com/random/1920x1080"
      ></v-img>
    </v-col>

    <v-col
      class="fullscreen d-flex align-start justify-center flex-wrap"
      cols="12" md="6"
    >
      <v-col cols="6" >
        <h1 class="font-weight-light">Default Project</h1>
      </v-col>
      <v-spacer></v-spacer>
      <v-switch
        v-model="darkTheme"
        @change="changeTheme()"
        :prepend-icon="icons.mdiWhiteBalanceSunny"
        :append-icon="icons.mdiMoonWaningCrescent"
        color="red lighten-1"
      ></v-switch>

      <v-col class="text-center login" lg="8" cols="10">
        
        <h2 class="my-5 font-weight-light">Login</h2>
        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
          <v-form lazy-validation @submit.prevent="handleSubmit(logar)">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <v-text-field
                v-model="user.user"
                class="rounded-lg"
                filled
                solo
                color="purple lighten-1"
                :append-icon="icons.mdiAccount"
                :error-messages="errors[0]"
                label="Usuario"
              ></v-text-field>
            </ValidationProvider>

            <ValidationProvider rules="required" v-slot="{ errors }">
              <v-text-field
                v-model="user.password"
                class="rounded-lg"
                solo
                filled
                color="purple lighten-1"
                :append-icon="icons.mdiLock"
                :error-messages="errors[0]"
                label="Senha"
                type="password"
              ></v-text-field>
            </ValidationProvider>

            <v-btn class="my-5 red lighten-1" large type="submit">
              <span class="d-flex align-center">
                <v-icon class="mr-2"> {{ icons.mdiLogin }} </v-icon>
                Logar
              </span>
            </v-btn>
          </v-form>
        </ValidationObserver>
      </v-col>
    </v-col>
  </div>
</template>

<script>
/* eslint-disable */

import {
  mdiAccount,
  mdiLock,
  mdiLogin,
  mdiWhiteBalanceSunny,
  mdiMoonWaningCrescent
} from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        mdiAccount,
        mdiLock,
        mdiLogin,
        mdiWhiteBalanceSunny,
        mdiMoonWaningCrescent
      },
      user: {
        user: "",
        password: ""
      },
      loading: false,
      darkTheme: ""
    };
  },

  methods: {
    logar() {
      console.log("logado");
      this.$router.push({ name: "Home" });
    },
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
        this.darkTheme = true
      } else {
        this.$vuetify.theme.dark = false;
        this.darkTheme = false
      };
  },
};
</script>

<style>
.fullscreen {
  height: 100%;
}

.login {
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(88, 88, 88, 0.4);
}
</style>
