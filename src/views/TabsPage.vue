<template>
  <ion-page background-color="black">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="taken" href="/taken">
          <ion-icon aria-hidden="true" :icon="build" />
          <ion-label>Taken</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="zoeken" href="/zoeken">
          <ion-icon aria-hidden="true" :icon="search" />
          <ion-label>Zoeken</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="informatie" href="/informatie">
          <ion-icon aria-hidden="true" :icon="alertCircle" />
          <ion-label>Informatie</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { alertCircle, build, search } from 'ionicons/icons';
</script>

<style scoped>
  ion-tab-bar, ion-tab-button {
    background-color: var(--main-color);
  }
  ion-tab-bar ion-icon {
    fill: white;
  }
  ion-label {
    color: white;
  }
</style>