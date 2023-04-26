<template>
    <!-- Ga terug button die op bijna elke pagina terug komt. Een simpele go(-1) op de router bij een klik -->
    <ion-toolbar>
        <ion-button 
            size="small" 
            @click="$router.go(-1)"
        >
            <ion-icon 
                :icon="arrowBack" 
                aria-hidden="true"
            ></ion-icon>
            Terug
        </ion-button>
    </ion-toolbar> 
</template>

<script lang="ts">
    import { IonToolbar, IonIcon, IonButton } from '@ionic/vue';
    import { arrowBack } from 'ionicons/icons';

    export default {
        name: 'ReturnButton',
        components: {
            IonToolbar,
            IonButton,
            IonIcon
        },
        data() {
            return {
                arrowBack
            }
        }
    }
</script>

<style scoped>
    ion-toolbar {
        --background: inherit;
    }
    ion-button {
        --background: var(--main-color);
        margin: 1rem;
    }

    
</style>