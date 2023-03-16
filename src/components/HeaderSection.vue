<template>
    <ion-header>
      <ion-toolbar color="dark">
        <img :src="require('../../public/assets/logo.svg')" class="ion-padding" />
        <NotificationBar slot="end" />
        <!-- <div slot="end">
            <ion-icon 
                aria-hidden="true" 
                :icon="notifications" 
                size="large" 
                id="click-trigger"
              />
            <ion-popover trigger="click-trigger" triggerAction="click">
                <ng-template>
                    <ion-content class="ion-padding">Hello World!</ion-content>
                    <ion-content class="ion-padding">Hello World!</ion-content>
                </ng-template>
            </ion-popover>
        </div> -->
        <router-link to="/tabs/settings" slot="end">
          <ion-icon 
            aria-hidden="true" 
            :icon="settingsSharp" 
            class="ion-margin-horizontal" 
            size="large"  
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
</style>