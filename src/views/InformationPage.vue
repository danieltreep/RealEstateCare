<!-- Informatie pagina -->
<template>
  <ion-page>
    <HeaderSection />
    <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
      <ion-list>
        <ion-item>
          <ion-label><i>Gebouwd door:</i></ion-label>
          <ion-label>Daniel Treep</ion-label>
        </ion-item>
        <ion-item>
          <ion-label><i>Studentnummer:</i></ion-label>
          <ion-label>312840519</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonList, IonItem, IonLabel} from '@ionic/vue';
import HeaderSection from '@/components/HeaderSection.vue';

export default {
  name: 'InformationPage',
  components: {
    IonPage,
    IonContent,
    HeaderSection,
    IonList,
    IonItem,
    IonLabel
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    }
  }
}
</script>
