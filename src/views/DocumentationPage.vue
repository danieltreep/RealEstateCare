<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            <GoBackBar />
            <h1>Documentatie</h1>

      
        </ion-content>
    </ion-page>
</template>
<script  lang="ts">
    import GoBackBar from '@/components/GoBackBar.vue';
    import HeaderSection from '@/components/HeaderSection.vue';
    import { IonPage, IonContent } from '@ionic/vue'

    export default {
        name: 'DocumentationPage',
        components: {
            IonPage,
            IonContent,
            HeaderSection,
            GoBackBar
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;
            }
        }
    }
</script>