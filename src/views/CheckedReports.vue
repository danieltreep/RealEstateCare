<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            <GoBackBar />
            <h1>Uitgevoerde Rapporten</h1>
            <ion-item>
                <ion-label><b>Sorteer op:</b> </ion-label>
                <ion-chip @click="sortOnDate('Nieuwste')">
                    <ion-label>Nieuwste</ion-label>
                    <ion-icon :icon="arrowDown"></ion-icon>
                </ion-chip>
                <ion-chip @click="sortOnDate('Oudste')">
                    <ion-label>Oudste</ion-label>
                    <ion-icon :icon="arrowUp"></ion-icon>
                </ion-chip>
            </ion-item>
            <CheckedReportsList />
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
    import CheckedReportsList from '@/components/CheckedReportsList.vue';
    import GoBackBar from '@/components/GoBackBar.vue';
    import { IonPage, IonContent, IonChip, IonLabel, IonIcon, IonItem } from '@ionic/vue'
    import { arrowDown, arrowUp } from 'ionicons/icons';

    export default {
        name: 'CheckedReports',
        components: {
            IonPage,
            IonContent,
            HeaderSection,
            CheckedReportsList,
            GoBackBar,
            IonChip,
            IonLabel,
            IonIcon,
            IonItem
        },
        data() {
            return {
                arrowDown,
                arrowUp
            }
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;
            }
        },
        methods: {
            sortOnDate(value) {
                this.$store.dispatch('sortOnDate', value);
            }
        },
        mounted() {
            this.$store.dispatch('fetchInspections')
        }
    }
</script>
<style>
    
</style>