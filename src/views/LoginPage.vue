<template>
<ion-page>
    <ion-content :fullscreen="true" color="dark">
        <div class="container">
            <h1 class="h1">Login</h1>
            <form action="" class="form">
                <ion-input 
                    :clear-input="true" 
                    placeholder="Gebruikersnaam" 
                    class="input"
                    ><ion-icon 
                        :icon="personCircle" 
                        class="ion-margin-end ion-margin-start icon"
                        aria-hidden="true"
                    ></ion-icon>
                </ion-input>
            
                <ion-input 
                    :clear-input="true" 
                    type="password" 
                    placeholder="Wachtwoord"
                    class="input"
                    ><ion-icon 
                        :icon="lockClosed" 
                        class="ion-margin-end ion-margin-start icon"
                        aria-hidden="true"
                    ></ion-icon>
                </ion-input>
                
                <ion-button class="button" router-link="/taken">  Login
                    <ion-icon :icon="logIn" slot="end"></ion-icon>
                </ion-button>
                
                <img :src="require('../../public/assets/logo-icon.svg')" class="img" />
            </form>
        </div>
    </ion-content>
</ion-page>
</template>

<script lang="ts">
    import {IonPage, IonContent, IonButton, IonInput, IonIcon} from '@ionic/vue';
    import { personCircle, lockClosed, logIn } from 'ionicons/icons';

    export default {
        name: 'LoginPage',
        components: {
            IonPage, 
            IonContent,
            IonButton,
            IonInput,
            IonIcon
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

<style>
    .input {
        --background: white;
        --color: black;
        --placeholder-color: black;
        --placeholder-opacity: .9;
        border-radius: 10px;
        flex: 0;
        width: 100%;
        margin: .5rem;
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    }
    .icon {
        font-size: 20px;
        margin-right: 1rem;
        fill: var(--main-color);
    }
    .button {
        --background: var(--main-color);
        width: 100%;
        border-radius: 10px;
        font-weight: bold;
        margin-top: 2rem;
    }
    .img {
        margin-top: 1rem;
        scale: 1.3;
        position: absolute;
        bottom: 8rem;
    }
    .h1 {
        font-size: 3rem;
        margin: 0;
        font-weight: bold;
    }
    .container {
        height: 100%;
        padding: 5rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>