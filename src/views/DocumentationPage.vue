<!-- Documentatie pagina met links naar documenten -->
<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            <GoBackBar />
            <h1>Documentatie</h1>
            <ion-list>
                <ion-item>
                    <ion-icon :icon="documentText" aria-hidden="true"></ion-icon>
                    <ion-label>Technische Installaties</ion-label>
                    <!-- Open modal en stelt document in -->
                    <ion-button
                        @click="{
                            setDocument('Technische Installaties');
                            setModal(true);
                        }">Open document</ion-button>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-item>
                    <ion-icon :icon="documentText" aria-hidden="true"></ion-icon>
                    <ion-label>Modificaties Inventariseren</ion-label>
                    <!-- Open modal en stelt document in -->
                    <ion-button 
                        @click="{
                            setDocument('Modificaties Inventariseren');
                            setModal(true);
                        }">Open document</ion-button>
                </ion-item>
            </ion-list>

            
            <DocumentViewer :setModal="setModal" :isOpen="isOpen" :document="document"/>
            
        </ion-content>
    </ion-page>
</template>
<script  lang="ts">
    import GoBackBar from '@/components/GoBackBar.vue';
    import HeaderSection from '@/components/HeaderSection.vue';
    import DocumentViewer from '@/components/DocumentViewer.vue';

    import { IonPage, IonContent, IonList, IonItem, IonButton, IonIcon, IonLabel } from '@ionic/vue';
    import { documentText } from 'ionicons/icons';


    export default {
        name: 'DocumentationPage',
        components: {
            IonPage,
            IonContent,
            HeaderSection,
            GoBackBar,
            IonList,
            IonItem,
            IonButton,
            IonIcon,
            IonLabel,
            DocumentViewer
        },
        data() {
            return {
                documentText,
                document: ''
            }
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;          // Houdt dark mode bij
            },
            isOpen() {
                return this.$store.state.modalOpen;         // Houdt modal status bij
            }
        },
        methods: {
            setModal(boolean: boolean) {
                this.$store.dispatch('setModal', boolean);  // Zet open modal om in store
            },
            setDocument(document: string) {                 // Stelt document die meegegeven wordt als prop aan de modal
                this.document = document;
            }
        },
    }
</script>
<style scoped>
    ion-button {
        --background: var(--main-color);
    }
    ion-icon {
        margin-right: .3rem;
    }
</style>