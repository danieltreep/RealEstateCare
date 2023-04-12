<template>
  <ion-page>
    <HeaderSection />
    <ion-content :fullscreen="true">
      <div class="grid">
        <ion-row ion-no-margin>
          <ion-col>
            <router-link to="/rapporten">
              <ion-card>
                <ion-card-content>
                  <ion-icon :icon="clipboardOutline" />
                  <h1>Toegewezen rapporten</h1>
                </ion-card-content>
              </ion-card>
            </router-link> 
          </ion-col>
          <ion-col>
            <router-link to="/uitgevoerd">
              <ion-card>
                <ion-card-content>
                  <ion-icon :icon="checkmarkCircle" />
                  <h1>Uitgevoerde rapporten</h1>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
        </ion-row>
        <ion-row >
          <ion-col>
            <router-link to="/documentatie">
              <ion-card>
                <ion-card-content>
                  <ion-icon :icon="grid" />
                  <h1>Documentatie</h1>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
          <ion-col>
            <router-link to="/instellingen">
              <ion-card>
                <ion-card-content>
                  <ion-icon :icon="settingsSharp" />
                  <h1>Instellingen</h1>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
        </ion-row>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonContent, IonIcon, IonCard, IonCardContent, IonRow, IonCol } from '@ionic/vue';
  import { clipboardOutline, checkmarkCircle, grid, settingsSharp} from 'ionicons/icons';
  import HeaderSection from '@/components/HeaderSection.vue';
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
    stroke: black !important;
  }
  a {
    text-decoration: none;
  }
</style>