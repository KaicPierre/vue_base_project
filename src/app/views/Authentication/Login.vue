<template>
  <div class="fullscreen d-flex">
    <v-col class="fullscreen ma-0 pa-0" cols="6">
      <v-img
        class="fullscreen"
        src="https://source.unsplash.com/random/1920x1080"
      ></v-img>
    </v-col>
    <v-col
      class="fullscreen d-flex align-start justify-center flex-wrap"
      cols="6"
    >
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">Default Project</h1>
      </v-col>
      <v-col class="text-center login" cols="8">
        <h2 class="my-5 font-weight-light">Login</h2>
        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
          <v-form lazy-validation @submit.prevent="handleSubmit(logar)">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <v-text-field
                v-model="user.user"
                class="rounded-lg"
                filled
                solo
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
                :append-icon="icons.mdiLock"
                :error-messages="errors[0]"
                label="Senha"
                type="password"
              ></v-text-field>
            </ValidationProvider>

            <v-btn class="my-5" large type="submit">
              
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

import { mdiAccount, mdiLock, mdiLogin } from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        mdiAccount,
        mdiLock,
        mdiLogin
      },
      user: {
        user: "",
        password: ""
      },
      loading: false
    };
  },

  methods: {
    logar() {
      console.log("logado");
      this.$router.push({name: "Home"})
    }
  }
};
</script>

<style>
.fullscreen {
  height: 100%;
}

.login {
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
}
</style>
