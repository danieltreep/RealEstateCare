<template>
    <ion-page class="settings">
        <HeaderSection />
        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            <h1>Instellingen</h1>
            <ion-item>
                <ion-toggle :checked="checked" @click="setDarkMode">Dark mode</ion-toggle>
            </ion-item>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
    import { IonPage, IonContent, IonToggle, IonItem} from '@ionic/vue'
    
    export default {
        name: 'SettingsPage',
        components: {
            IonPage,
            IonContent,
            IonToggle,
            IonItem,
            HeaderSection
        },
        methods: {
            setDarkMode() {
                this.$store.dispatch('setDarkMode');
            }
        },
        data() {
            return {
                checked: false
            }
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;
            }
            
        },
        mounted() {
            this.checked = this.$store.state.darkMode;
        }

    }
</script>
<style>
    
</style>