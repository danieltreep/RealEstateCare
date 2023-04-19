<template>
  <ion-page>
    <HeaderSection />
    <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent} from '@ionic/vue';
import HeaderSection from '@/components/HeaderSection.vue';

export default {
  name: 'InformationPage',
  components: {
    IonPage,
    IonContent,
    HeaderSection
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    }
  }
}
</script>
