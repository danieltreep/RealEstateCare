<template>
  <ion-page>
    <HeaderSection />
    <ion-content :fullscreen="true">
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonContent} from '@ionic/vue';
import HeaderSection from '@/components/HeaderSection.vue';
</script>
