<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="task" href="/tabs/task">
          <ion-icon aria-hidden="true" :icon="build" />
          <ion-label>Active Tasks</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon aria-hidden="true" :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="information" href="/tabs/information">
          <ion-icon aria-hidden="true" :icon="alertCircle" />
          <ion-label>Information</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { alertCircle, build, search } from 'ionicons/icons';
</script>

<style>
  ion-tab-bar, ion-tab-button {
    background-color: rgba(0,170,162);
  }
  ion-tab-bar ion-icon {
    fill: white;
  }
  ion-label {
    color: white;
  }
</style>