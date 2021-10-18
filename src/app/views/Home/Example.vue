<template>
  <v-container>
    App model
    <!-- <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <v-form lazy-validation @submit.prevent="handleSubmit(teste)">
        <ValidationProvider>
          <v-text-field label="Teste"></v-text-field>
        </ValidationProvider>

        <v-btn type="submit">Teste</v-btn>
      </v-form>
    </ValidationObserver> -->
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
  methods: {
    teste() {
      console.log("teste");
    }
  }
};
</script>

<style>
</style>