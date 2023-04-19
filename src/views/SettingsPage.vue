<template>
    <ion-page class="settings">
        <HeaderSection />
        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            <h1>Instellingen</h1>
            <ion-item>
                <ion-label>Dark Mode</ion-label>
                <ion-toggle :checked="false" @click="setDarkMode">Checked Toggle</ion-toggle>
            </ion-item>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
    import { IonPage, IonContent, IonToggle, IonLabel, IonItem, IonList } from '@ionic/vue'
    
    export default {
        name: 'SettingsPage',
        components: {
            IonPage,
            IonContent,
            IonToggle,
            IonLabel,
            IonItem,
            HeaderSection
        },
        methods: {
            setDarkMode() {
                this.$store.dispatch('setDarkMode');
            }
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;
            }
        }
    }
</script>
<style>
    
</style>