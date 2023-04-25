<!-- Login pagina, alle input is tabbaar -->
<template>
    <ion-page>
        <div class="container">
            <ion-grid>
                <ion-row class="ion-justify-content-center">
                    <h1 >Login</h1>
                </ion-row>

                <!-- Gebruikersnaam input -->
                <ion-row class="ion-justify-content-center">
                    <ion-item lines="none">
                        <ion-icon 
                            :icon="personCircle" 
                            aria-hidden="true"
                            ></ion-icon>
                            <ion-input 
                            :clear-input="true" 
                            label="Gebruikersnaam" 
                            labelPlacement="stacked"
                            v-model="username"
                            :autofocus="true"
                            tabindex="1"
                        ></ion-input>
                    </ion-item>
                </ion-row>
                
                <!-- Wachtwoord input -->
                <ion-row class="ion-justify-content-center">
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
                            v-model="password"
                            tabindex="1"
                            @keyup.enter="checkLogin()"
                        ></ion-input>
                    </ion-item>
                </ion-row>

                <!-- Error box die getoond wordt als wachtwoord en gebruikersnaam niet overeen komen -->
                <ion-row class="ion-justify-content-center">
                    <ion-item v-if="error" class="errorBox" lines="none">
                        <ion-icon :icon="alert"></ion-icon>
                        <h3 >{{ error }}</h3>
                    </ion-item>
                </ion-row>

                <!-- Login button -->
                <ion-row class="ion-justify-content-center">
                    <ion-button  
                        tabindex="1"
                        :disabled="!username || !password"
                        @click="checkLogin()"
                        @keyup.enter="checkLogin()">  Login
                        <ion-icon :icon="logIn" slot="end"></ion-icon>
                    </ion-button> 
                </ion-row>
            </ion-grid>
            
            <!-- Logo -->
            <img :src="require('../../public/assets/logo-icon.svg')" />
        </div>
    </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonButton, IonInput, IonIcon, IonItem, IonRow, IonGrid } from '@ionic/vue';
    import { personCircle, lockClosed, logIn, alert } from 'ionicons/icons';

    import checkLoginService from '@/services/checkLoginService.js';

    export default {
        name: 'LoginPage',
        components: {
            IonPage, 
            IonButton,
            IonInput,
            IonIcon,
            IonItem,
            IonGrid,
            IonRow
        },
        data() {
            return {
                personCircle,
                lockClosed,
                logIn,
                alert,
                username: '',
                password: '',
                error: ''
            }
        },
        methods: {
            // Als de login service false returned laat de error box zien. Wanneer true update state, reset waarden en verwijs door naar taken pagina
            checkLogin() {
                if (!checkLoginService(this.username, this.password)) {
                    this.error = 'U heeft een verkeerde gebruikersnaam of wachtwoord ingevoerd.'
                } else {
                    this.$store.dispatch('loginUser');
                    this.error = '';
                    this.username = '';
                    this.password = '';
                    this.$router.push('/taken');
                }
            }
        },
        mounted() {
            // Stel bij het laden wachtwoord en gebruikersnaam in door ze op te slaan in local storage. Hier leest de login service ze uit.
            localStorage.setItem('username', 'admin');
            localStorage.setItem('password', 'admin');
        }
    }
</script>

<style scoped>
    ion-input {
        --color: white;
        --placeholder-opacity: .9;
        --placeholder-color: white;
        --border-radius: 10px;
        --padding-start: 1rem;
        margin: .5rem 0;
        --highlight-color-focused: var(--main-color);
        border-bottom: 2px solid white;
    }
    ion-input:focus-within {
        border-bottom: 2px solid var(--main-color);
    }
    ion-item {
        --background: #383c42;
        --border-radius: 10px;
        width: 100%;
        margin: .5rem 1rem;
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
        width: 100%;
    }
    ion-button ion-icon {
        fill: white;
        display: none;
    }
    ion-content {
        --padding-end: 1.5rem;
        --padding-start: 1.5rem;
        --padding-top: 30%; 
        --keyboard-offset: 0 !important;
    }
    .container {
        background-color: var(--ion-color-dark);
        min-height: 100vh;
        padding-top: 8rem;
    }
    img {
        height: 60px;
        position: fixed;
        bottom: 10%;
        left: 50%;
        transform: translate(-50%, 0);
    }
    h1 {
        font-size: 3rem;
        margin: 0 1rem 2rem;
        font-weight: bold;
        text-align: start;
        color: white;
    }
    ion-item.errorBox {
        --background: rgb(231, 60, 60);
        color: white;
    }
    h3 {
        font-size: 1rem;
        text-align: center;
    }

    @media screen and (min-width: 800px) {
        ion-content {
            --padding-top: 20%;
        }
        ion-button {
            max-width: 480px;
        }
        ion-item {
            max-width: 480px;
        }
    }
</style>