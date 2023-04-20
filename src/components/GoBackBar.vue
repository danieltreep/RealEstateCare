<template>
   
    <ion-toolbar>
        <ion-button size="small" @click="$router.go(-1)">
            <ion-icon :icon="arrowBack"></ion-icon>
            Terug
        </ion-button>
    </ion-toolbar>
    
</template>
<script lang="ts">
    import { IonToolbar, IonIcon, IonButton } from '@ionic/vue';
    import { arrowBack } from 'ionicons/icons';

    export default {
        name: 'GoBackBar',
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
    }
</style>