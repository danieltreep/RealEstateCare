<template>
    <ion-item lines="none">
        <ion-label><b>Sorteer op:</b> </ion-label>
        <ion-chip @click="sortOnDate('Nieuwste')" :class="nieuw ? 'active' : ''">
            <ion-label>Nieuwste</ion-label>
            <ion-icon :icon="arrowDown"></ion-icon>
        </ion-chip>
        <ion-chip @click="sortOnDate('Oudste')" :class="nieuw ? '' : 'active'">
            <ion-label>Oudste</ion-label>
            <ion-icon :icon="arrowUp"></ion-icon>
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
                nieuw: false
            }
        },
        methods: {
            sortOnDate(value) {
                this.nieuw = !this.nieuw;
                this.$store.dispatch('sortOnDate', value);
            }
        }
    }
</script>
<style scoped>
    .active {
        --background: var(--main-color);
    }
</style>