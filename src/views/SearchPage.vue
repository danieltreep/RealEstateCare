<!-- Zoek pagina met links naar andere pagina's -->
<template>
  <ion-page>
    <HeaderSection />
    <ion-content 
      :fullscreen="true" 
      :class="darkMode ? 'darkMode' : ''" 
    >
      <ion-searchbar @ionInput="onSearch($event.detail.value)"></ion-searchbar>
      <ion-list class="list">
        <ion-item 
          v-for="(result, index) in results" 
          :key="index"
        >
          <router-link :to="`/${result}`">
            <ion-label>{{ result }}</ion-label>
          </router-link>
          <ion-icon 
            :icon="openOutline" 
            slot="end" 
            aria-hidden="true"
          ></ion-icon>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import {IonPage, IonIcon, IonContent, IonList, IonItem, IonLabel, IonSearchbar} from '@ionic/vue';
import { openOutline } from 'ionicons/icons';
import HeaderSection from '@/components/TheHeaderSection.vue';

export default {
  name: 'SearchPage',
  components: {
    IonPage, 
    IonContent,
    HeaderSection,
    IonList,
    IonItem,
    IonLabel,
    IonSearchbar,
    IonIcon
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    }
  },
  setup() {
    const data = ['Taken', 'Documentatie', 'Rapporten', 'Uitgevoerd', 'Instellingen', 'Informatie'];
    const results = ref(data);

    return { data, results, openOutline };
  },
  methods: {
    // Zoek functie die query vergelijkt met de data. Filter als de letters niet aanwezig zijn
    onSearch(event) {
      const query = event.toLowerCase();
      this.results = this.data.filter(data => data.toLowerCase().indexOf(query) > -1);
    }
  }
  
}
</script>