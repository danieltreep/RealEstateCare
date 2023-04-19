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
  .darkMode * {
    --color: white;
    color: white;
    fill: white;
    --placeholder-color: white;
  }
  .darkMode {
    --ion-background-color: var(--ion-color-dark);
  }
  .darkMode ion-card {
    box-shadow: rgba(255, 255, 255, 0.2) 0px 4px 16px;
  }
  /* ion-checkbox {
    --checkbox-background: white;
  } */
  h1 {
    text-align: center;
  }
  .darkMode ion-select { 
    --placeholder-color: white;
  }
  :root {
    --main-color: rgba(0,170,162);
  }
</style>