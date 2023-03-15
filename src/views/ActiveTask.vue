<template>
  <ion-page>
    <ion-header >
      <ion-toolbar color="secondary">
        <img :src="require('../../public/assets/logo.svg')" class="ion-padding" />
        <ion-icon aria-hidden="true" :icon="notifications" size="large" slot="end" />
        <ion-icon aria-hidden="true" :icon="settingsSharp" class="ion-margin-horizontal" size="large" slot="end" />
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="grid">
        <ion-row ion-no-margin>
          <ion-col >
            <ion-card>
              <ion-card-content>
                <ion-icon :icon="bookmarkOutline" />
                <h1>Scheduled</h1>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-content>
                <ion-icon :icon="checkmarkCircle" />
                <h1>Completed</h1>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row >
          <ion-col>
            <ion-card>
              <ion-card-content>
                <ion-icon :icon="grid" />
                <h1>Knowledge base</h1>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-content>
                <ion-icon :icon="settingsSharp" />
                <h1>Settings</h1>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonContent, IonIcon, IonCard, IonCardContent, IonRow, IonCol } from '@ionic/vue';
  import { bookmarkOutline, checkmarkCircle, grid, notifications, settingsSharp} from 'ionicons/icons';
</script>

<style scoped>
  h1 {
    font-size: 1.3rem;
  }
  
  .grid {
    display: grid;
    height: calc(100% - 2rem);
    margin: .5rem;
    gap: .5rem;
  }
  ion-card {
    height: 100%;
    margin: .5rem .2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }
  ion-card ion-icon {
    font-size: 80px;
    fill: black;
    stroke: black;
  }
  
</style>