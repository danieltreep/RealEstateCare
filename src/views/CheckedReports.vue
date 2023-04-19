<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
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
        name: 'CheckedReports',
        components: {
            IonPage,
            IonContent,
            HeaderSection,
            CheckedReportsList
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;
            }
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