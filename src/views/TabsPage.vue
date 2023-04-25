<template>
  <ion-page v-if="loggedIn">
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
          <ion-icon aria-hidden="true" :icon="informationCircle" />
          <ion-label>Informatie</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { informationCircle, build, search } from 'ionicons/icons';

  export default {
    name: 'TabsPage',
    components: {
      IonTabBar,
      IonTabButton,
      IonTabs, 
      IonLabel,
      IonIcon,
      IonPage,
      IonRouterOutlet
    },
    data() {
      return {
        informationCircle,
        build,
        search
      }
    },
    computed: {
      loggedIn() {
        return this.$store.state.loggedIn;
      }
    },
    mounted() {
      if (!this.loggedIn) {
        this.$router.push('/login');
      }
    }
  }
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