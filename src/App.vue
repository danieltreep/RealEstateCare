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
  .darkMode ion-label {
    --color: white;
  }
  .darkMode {
    --ion-background-color: var(--ion-color-dark);
    color: white;
    fill: white;
  }
  .darkMode ion-icon {
    fill: white;
    --color: white;
  }
  .darkMode h1 {
    color: white;
  }
  .darkMode ion-card {
    box-shadow: rgba(255, 255, 255, 0.2) 0px 4px 16px;
  }
</style>