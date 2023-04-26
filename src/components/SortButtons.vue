<!-- Sorteer buttons gebruikt in checkedReportsPage -->
<template>
    <ion-item lines="none">
        <ion-label><b>Sorteer op:</b> </ion-label>
        <ion-chip 
            @click="sortOnDate('Nieuwste')" 
            :class="nieuw ? 'active' : ''" 
            tabindex="1"
        >
            <ion-label>Nieuwste</ion-label>
            <ion-icon 
                :icon="arrowDown" 
                aria-hidden="true"
            ></ion-icon>
        </ion-chip>
        <ion-chip 
            @click="sortOnDate('Oudste')" 
            :class="nieuw ? '' : 'active'" 
            tabindex="1"
        >
            <ion-label>Oudste</ion-label>
            <ion-icon 
                :icon="arrowUp" 
                aria-hidden="true"
            ></ion-icon>
        </ion-chip>
    </ion-item>
</template>
<script lang="ts">
    import { IonChip, IonLabel, IonIcon, IonItem } from '@ionic/vue'
    import { arrowDown, arrowUp } from 'ionicons/icons';
    export default {
        name: 'SortButtons',
        components: {
            IonItem,
            IonChip,
            IonLabel,
            IonIcon
        },
        data() {
            return {
                arrowDown,
                arrowUp,
                nieuw: false                                // Data nodig voor active class styling
            }
        },
        mounted() {
            this.nieuw = false;
            this.$store.dispatch('sortOnDate', 'Oudste');   // Roep store functie aan die de inspecties sorteert als oudste  
        },
        methods: {
            sortOnDate(value) {
                this.nieuw = !this.nieuw;                   // Draai nieuw om
                this.$store.dispatch('sortOnDate', value);  // Roep store functie aan die de inspecties sorteert op basis van de waarde     
            }
        }
    }
</script>
<style scoped>
    .active {
        --background: var(--main-color);
    }
</style>