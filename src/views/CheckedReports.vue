<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true">
            <h1>Uitgevoerde Rapporten</h1>
            <CheckedReportsList />
      
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
    import CheckedReportsList from '@/components/CheckedReportsList.vue';
    import { IonPage, IonContent } from '@ionic/vue'

</script>
<style>
    h1 {
        text-align: center;
    }
</style>