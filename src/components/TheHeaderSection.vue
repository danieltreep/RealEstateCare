<template>
  <!-- Header sectie die op elke pagina terug komt -->
  <ion-header>
    <ion-toolbar>
      <img 
        :src="require('../../public/assets/logo.svg')" 
        class="ion-padding" 
        aria-hidden="true" 
        alt="logo"
      />
      <NotificationBar slot="end" />                    
      
      <router-link 
        to="/instellingen" 
        slot="end"
      >
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
<style lang="css" scoped>
  ion-header ion-icon {
    fill: white;
    font-size: large;
  }
  ion-header {
    border-bottom: 2px solid white;
  }
  ion-toolbar {
    --background: var(--dark-color);
  }
</style>