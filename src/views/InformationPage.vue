<template>
  <ion-page>
    <ion-header >
      <ion-toolbar color="secondary" >
        <img :src="require('../../public/assets/logo.svg')" class="ion-padding" />
        <ion-icon aria-hidden="true" :icon="notifications" size="large" slot="end" />
        <ion-icon aria-hidden="true" :icon="settingsSharp" class="ion-margin-horizontal" size="large" slot="end" />
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonIcon } from '@ionic/vue';
import { notifications, settingsSharp} from 'ionicons/icons';
</script>
