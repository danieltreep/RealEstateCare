<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            <GoBackBar />
            <h1>Documentatie</h1>
            <ion-list>
                <ion-item>
                    <ion-icon :icon="documentText"></ion-icon>
                    <ion-label>Technische Installaties</ion-label>
                    <ion-button
                        @click="{
                            setDocument('Technische Installaties');
                            setModal(true);
                        }">Open document</ion-button>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-item>
                    <ion-icon :icon="documentText"></ion-icon>
                    <ion-label>Modificaties Inventariseren</ion-label>
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
                return this.$store.state.darkMode;
            },
            isOpen() {
                return this.$store.state.modalOpen;
            }
        },
        methods: {
            setModal(boolean: boolean) {
                this.$store.dispatch('setModal', boolean);
            },
            setDocument(document: string) {
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