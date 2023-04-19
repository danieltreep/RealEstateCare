<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            <h1>Documentatie</h1>

      
        </ion-content>
    </ion-page>
</template>
<script  lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
    import { IonPage, IonContent } from '@ionic/vue'

    export default {
        name: 'DocumentationPage',
        components: {
            IonPage,
            IonContent,
            HeaderSection
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;
            }
        }
    }
</script>