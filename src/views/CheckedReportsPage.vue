<!-- Pagina van de uitgevoerde rapporten -->
<template>
    <ion-page>
        <HeaderSection />

        <ion-content 
            :fullscreen="true" 
            :class="darkMode ? 'darkMode' : ''"
        >
            <ReturnButton />

            <h1>Uitgevoerde Rapporten</h1>

            <SortButtons />

            <CheckedReportsList />
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import HeaderSection from '@/components/TheHeaderSection.vue';
    import CheckedReportsList from '@/components/CheckedReportsList.vue';
    import ReturnButton from '@/components/ReturnButton.vue';
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
            ReturnButton,
            SortButtons
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
        }
    }
</script>