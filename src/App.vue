<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
  export default {
    name: 'App',
    components: {
      IonApp,
      IonRouterOutlet
    }
  }
</script>

<style>
  :root {
    --main-color: rgba(0,170,162);
  }
  .darkMode * {
    --color: white;
    color: white;
    fill: white;
  }
  .darkMode {
    --ion-background-color: var(--ion-color-dark);
  }
  .darkMode ion-card {
    --background: #33363b;
  }
  h1 {
    text-align: center;
  }
  .darkMode ion-select { 
    --placeholder-color: white;
  }
</style>