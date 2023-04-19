<template>
  <ion-header>
    <ion-toolbar color="dark">
      <img :src="require('../../public/assets/logo.svg')" class="ion-padding" />
      <NotificationBar slot="end" />
      
      <router-link to="/instellingen" slot="end">
        <ion-icon 
          router-link="/instellingen"
          aria-hidden="true" 
          :icon="settingsSharp" 
          class="ion-margin-horizontal" 
          size="large"  
          slot="end"
        />
      </router-link>
    </ion-toolbar>
  </ion-header>
</template>
<script lang="ts">
import { IonHeader, IonToolbar, IonIcon} from '@ionic/vue';
import { notifications, settingsSharp} from 'ionicons/icons';
import NotificationBar from '@/components/NotificationBar.vue';

export default {
  name: 'HeaderSection',
  components: {
    IonHeader,
    IonToolbar,
    IonIcon,
    NotificationBar
  },
  data() {
    return {
      notifications,
      settingsSharp
    }
  }
}
</script>
<style lang="css">
  ion-header ion-icon {
    fill: white;
    font-size: large;
  }
  ion-header {
    border-bottom: 2px solid white;
  }
</style>