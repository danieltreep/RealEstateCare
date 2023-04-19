<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true">
            <h1>Uitgevoerde Rapporten</h1>
            <CheckedReportsList />
      
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
    import CheckedReportsList from '@/components/CheckedReportsList.vue';
    import { IonPage, IonContent } from '@ionic/vue'

    export default {
        name: 'AppointedReports',
        components: {
            IonPage,
            IonContent,
            HeaderSection,
            CheckedReportsList
        },
        computed: {
            
        },
        mounted() {
            this.$store.dispatch('fetchInspections')
        }
    }
</script>
<style>
    h1 {
        text-align: center;
    }
</style>