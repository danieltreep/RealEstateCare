<!-- Instellingen pagina -->
<template>
    <ion-page class="settings">
        <HeaderSection />
        <ion-content 
            :fullscreen="true" 
            :class="darkMode ? 'darkMode' : ''"
        >
            <ReturnButton />

            <h1>Instellingen</h1>

            <ion-item>
                <ion-toggle 
                    :checked="checked" 
                    @click="setDarkMode"
                >Donkere modus</ion-toggle>
            </ion-item>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import ReturnButton from '@/components/ReturnButton.vue';
    import HeaderSection from '@/components/TheHeaderSection.vue';
    import { IonPage, IonContent, IonToggle, IonItem} from '@ionic/vue'
    
    export default {
        name: 'SettingsPage',
        components: {
            IonPage,
            IonContent,
            IonToggle,
            IonItem,
            HeaderSection,
            ReturnButton
        },
        data() {
            return {
                checked: false                              // Houdt checked bij
            }
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;          // Houdt dark mode bij
            }
            
        },
        mounted() {
            this.checked = this.$store.state.darkMode;      // Update checked op basis van dark mode uit state
        },
        methods: {
            setDarkMode() {
                this.$store.dispatch('setDarkMode');        // Stelt dark mode in bij store
            }
        },
        
    }
</script>
<style scoped>
    ion-toggle {
        --track-background-checked: var(--main-color);
        --handle-background-checked: white;
    }
</style>