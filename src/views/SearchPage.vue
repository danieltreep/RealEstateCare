<template>
  <ion-page>
    <HeaderSection />
    <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''" >
      <ion-searchbar @ionInput="onSearch($event.detail.value)"></ion-searchbar>
      <ion-list>
        <ion-item v-for="(result, index) in results" :key="index">
          <router-link :to="`/${result}`">
            <ion-label>{{ result.toUpperCase() }}</ion-label>
          </router-link>
        </ion-item>
        
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import {IonPage, IonContent, IonList, IonItem, IonLabel, IonSearchbar} from '@ionic/vue';
import HeaderSection from '@/components/HeaderSection.vue';

export default {
  name: 'SearchPage',
  components: {
    IonPage, 
    IonContent,
    HeaderSection,
    IonList,
    IonItem,
    IonLabel,
    IonSearchbar
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    }
  },
  setup() {
    const data = ['Taken', 'Documentatie', 'Rapporten', 'Uitgevoerd', 'Instellingen', 'Informatie'];
    const results = ref(data);

    return { data, results };
  },
  methods: {
    onSearch(event) {
      const query = event.toLowerCase();
      this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
    }
  }
  
}
</script>

<style>

</style>