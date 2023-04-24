<template>
    <ion-page>
        <HeaderSection />

        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            <GoBackBar />

            <h1>Uitgevoerde Rapporten</h1>

            <SortButtons />

            <CheckedReportsList />
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
    import CheckedReportsList from '@/components/CheckedReportsList.vue';
    import GoBackBar from '@/components/GoBackBar.vue';
    import { IonPage, IonContent } from '@ionic/vue'
    import { arrowDown, arrowUp } from 'ionicons/icons';
    import SortButtons from '@/components/SortButtons.vue';

    export default {
        name: 'CheckedReports',
        components: {
            IonPage,
            IonContent,
            HeaderSection,
            CheckedReportsList,
            GoBackBar,
            SortButtons
        },
        data() {
            return {
                arrowDown,
                arrowUp,
                nieuw: false
            }
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;
            }
        },
        mounted() {
            this.$store.dispatch('fetchInspections');
        }
    }
</script>