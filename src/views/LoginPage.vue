<template>
<ion-page>
    <ion-content :fullscreen="true" color="dark">
        
            <h1 class="h1">Login</h1>
            
                
            
                <ion-item lines="none">
                    <ion-icon 
                        :icon="personCircle" 
                        aria-hidden="true"
                    ></ion-icon>
                    <ion-input 
                        :clear-input="true" 
                        label="Gebruikersnaam" 
                        labelPlacement="stacked"
                    ></ion-input>
                </ion-item>
                
                <ion-item lines="none">
                    <ion-icon 
                        :icon="lockClosed" 
                        aria-hidden="true"
                    ></ion-icon>
                    <ion-input 
                        label="Wachtwoord"
                        labelPlacement="stacked"
                        :clear-input="true" 
                        type="password" 
                    > 
                    </ion-input>
                </ion-item>
                

                <ion-button class="button" router-link="/taken">  Login
                    <ion-icon :icon="logIn" slot="end"></ion-icon>
                </ion-button>
                
                <img :src="require('../../public/assets/logo-icon.svg')" class="img" />
            
        
    </ion-content>
</ion-page>
</template>

<script lang="ts">
    import {IonPage, IonContent, IonButton, IonInput, IonIcon, IonItem} from '@ionic/vue';
    import { personCircle, lockClosed, logIn } from 'ionicons/icons';

    export default {
        name: 'LoginPage',
        components: {
            IonPage, 
            IonContent,
            IonButton,
            IonInput,
            IonIcon,
            IonItem,
            
        },
        data() {
            return {
                personCircle,
                lockClosed,
                logIn
            }
        }
    }
</script>

<style scoped>
    ion-input {
        --background: var(--ion-color-dark);
        --color: white;
        --placeholder-opacity: .9;
        --placeholder-color: white;
        --border-radius: 10px;
        margin: .5rem 0;
        border-bottom: 2px solid white;
    }
    ion-item {
        --background: var(--ion-color-dark);
    }
    ion-icon {
        font-size: 30px;
        margin-right: 1rem;
        fill: var(--main-color);
    }
    ion-button {
        --background: var(--main-color);
        --border-radius: 10px;
        font-weight: bold;
        margin: 2rem 1rem ;
    }
    ion-button ion-icon {
        fill: white;
        display: none;
    }
    .img {
        height: 60px;
        position: absolute;
        bottom: 6rem;
        left: 50%;
        transform: translate(-50%, 0);
    }
    .h1 {
        font-size: 2.5rem;
        margin: 0 1rem 2rem;
        font-weight: bold;
        text-align: start;
    }
    ion-content {
        --padding-end: 1.5rem;
        --padding-start: 1.5rem;
        --padding-top: 45%;
        
    }
</style>