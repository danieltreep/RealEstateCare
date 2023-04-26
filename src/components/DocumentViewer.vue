<template>
    <!-- Open modal met daarin het document -->
    <ion-modal :is-open="isOpen">
        <ion-header>
            <ion-toolbar>
                <ion-title>{{document}}</ion-title>
                <ion-button 
                    slot="end" 
                    size="small" 
                    @click="setModal(false)"        
                >Sluit
                    <ion-icon :icon="close" aria-hidden="true"></ion-icon> 
                </ion-button>
            </ion-toolbar>
        </ion-header>
        
        <img  
            v-if="document === 'Technische Installaties'" 
            :src="require('../../public/assets/documents/documentatie-technische-installaties.png')" 
        >
        
        <img 
            v-if="document === 'Modificaties Inventariseren'" 
            :src="require('../../public/assets/documents/documentatie-modificaties.png')" 
        > 
    </ion-modal>
</template>

<script lang="ts">
import { IonButton, IonModal, IonIcon, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { close } from 'ionicons/icons';

export default {
    name: 'DocumentViewer',
    components: { 
        IonButton, 
        IonModal, 
        IonHeader,
        IonToolbar, 
        IonTitle,
        IonIcon
    },
    props: {
        setModal: {
            type: Function  // Functie van parent die de modal aan of uitschakelt
        },         
        isOpen: {
            type: Boolean   // Op basis hiervan wordt de modal getoont
        },            
        document: {
            type: String    // Specificatie voor welk document geopend moet worden bij v-if's
        },           
    },
    data() {
        return {
            close
        }
    } 
}
</script>

<style scoped>
    ion-button {
        --color: white;
        --background: var(--main-color);
    }
    ion-icon {
        margin-left: .5rem;
    }
</style>