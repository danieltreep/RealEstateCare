<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            <GoBackBar />
            <h1>Toegewezen Rapporten</h1>
            <p>Selecteer de benodigde categoriën voor de inspectie</p>
            <ion-list>
                <ion-item lines="none" class="groupHeader">
                    <ion-checkbox v-model="schadeOpnemen">Schade opnemen</ion-checkbox>
                </ion-item>

                <Transition>
                    <ion-item-group v-show="schadeOpnemen">
                        <ion-item>
                            <ion-input label="Locatie:" :clear-input="true"></ion-input>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-checkbox>Nieuwe schade:</ion-checkbox>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select label="Soort schade:" aria-label="soort schade opnemen" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Moedwillig">Moedwillig</ion-select-option>
                                <ion-select-option value="Slijtage">Slijtage</ion-select-option>
                                <ion-select-option value="Geweld">Geweld</ion-select-option>
                                <ion-select-option value="Normaal">Normaal</ion-select-option>
                                <ion-select-option value="Calamiteit">Calamiteit</ion-select-option>
                                <ion-select-option value="Anders">Anders</ion-select-option>
                            </ion-select>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-label>Datum:</ion-label> 
                            <ion-datetime-button datetime="datetime">Datum:</ion-datetime-button>
    
                            <ion-modal :keep-contents-mounted="true">
                                <ion-datetime id="datetime"></ion-datetime>
                            </ion-modal>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-checkbox>Acute actie vereist:</ion-checkbox> 
                        </ion-item>

                        <ion-item>
                            <ion-textarea label="Omschrijving:" type="textarea" :auto-grow="true"></ion-textarea>
                        </ion-item>

                        <ion-item lines="none">
                            <label>Foto's:</label>
                            <label class="fileInputButton" aria-label="Kies foto" for="fileInput">Kies foto's
                                <ion-icon :icon="camera" ></ion-icon>   
                            </label>
                            <input hidden id="fileInput" type="file" accept="image/png, image/jpeg" slot="end">
                        </ion-item>
                    </ion-item-group>
                </Transition>

                <ion-item lines="none" class="groupHeader">
                    <ion-checkbox v-model="achterstalligOnderhoud">Achterstallig onderhoud opnemen</ion-checkbox>
                </ion-item>

                <Transition>
                    <ion-item-group v-show="achterstalligOnderhoud">
                        <ion-item>
                            <ion-input label="Locatie:" :clear-input="true"></ion-input>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select label="Soort onderhoud:" aria-label="soort onderhoud" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Achilderwerk">Schilderwerk</ion-select-option>
                                <ion-select-option value="Houtrot">Houtrot</ion-select-option>
                                <ion-select-option value="Elektra">Elektra</ion-select-option>
                                <ion-select-option value="Leidingwerk">Leidingwerk</ion-select-option>
                                <ion-select-option value="Beglazing">Beglazing</ion-select-option>
                            </ion-select> 
                        </ion-item>

                        <ion-item lines="none"> 
                            <ion-checkbox>Acute actie vereist:</ion-checkbox>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select label="Kostenindicatie:" aria-label="kostenindicatie" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="0-500">&euro; 0-500</ion-select-option>
                                <ion-select-option value="500-1500">&euro; 500-1.500</ion-select-option>
                                <ion-select-option value="1500+">&euro; 1.500+</ion-select-option>
                            </ion-select>
                        </ion-item>

                        <ion-item lines="none">
                            <label>Foto's:</label>
                            <label class="fileInputButton" aria-label="Kies foto" for="fileInputOnderhoud">Kies foto's
                                <ion-icon :icon="camera"></ion-icon>   
                            </label>
                            <input hidden id="fileInputOnderhoud" type="file" accept="image/png, image/jpeg" slot="end">
                        </ion-item>
                    </ion-item-group>
                </Transition>
                
                <ion-item lines="none" class="groupHeader">
                    <ion-checkbox v-model="technischeInstallaties">Technische installaties inspecteren</ion-checkbox>
                </ion-item>

                <Transition>
                    <ion-item-group v-show="technischeInstallaties">
                        <ion-item>
                            <ion-input label="Locatie:" :clear-input="true"></ion-input>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select label="Soort installatie" aria-label="soort installatie" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Koeling">Koeling</ion-select-option>
                                <ion-select-option value="Verwarming">Verwarming</ion-select-option>
                                <ion-select-option value="Luchtverversing">Luchtverversing</ion-select-option>
                                <ion-select-option value="Elektra">Elektra</ion-select-option>
                                <ion-select-option value="Beveiliging">Beveiliging</ion-select-option>
                            </ion-select>
                        </ion-item>

                        <ion-item>
                            <ion-textarea label="Gemelde storingen:"></ion-textarea>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-label>Documentatie Technische Installaties:</ion-label>
                            <ion-button 
                                @click="{
                                    setDocument('Technische Installaties');
                                    setModal(true);
                                }">Open document</ion-button>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-checkbox>Goedgekeurd:</ion-checkbox>
                        </ion-item>

                        <ion-item>
                            <ion-textarea 
                                label="Opmerkingen:" 
                                labelPlacement="fixed"
                                type="textarea" 
                                :auto-grow="true">
                            </ion-textarea>
                        </ion-item>

                        <ion-item lines="none">
                            <label>Foto's:</label>
                            <label class="fileInputButton" aria-label="Kies foto" for="fileInputTechnisch">Kies foto's
                                <ion-icon :icon="camera"></ion-icon>   
                            </label>
                            <input hidden id="fileInputTechnisch" type="file" accept="image/png, image/jpeg" slot="end">
                        </ion-item>
                    </ion-item-group>
                </Transition>
                
                <ion-item lines="none" class="groupHeader">
                    <ion-checkbox v-model="modificaties">Modificaties inventariseren</ion-checkbox>
                </ion-item>

                <Transition>
                    <ion-item-group v-show="modificaties">
                        <ion-item lines="none">
                            <ion-label>Documentatie Modificaties:</ion-label>
                            <ion-button 
                                @click="{
                                    setDocument('Modificaties Inventariseren');
                                    setModal(true);
                                }">Open document</ion-button>
                        </ion-item>

                        <ion-item>
                            <ion-input label="Locatie modificatie:" :clear-input="true"></ion-input>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select label="Uitgevoerd door:" aria-label="uitvoerder" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Huurder">Huurder</ion-select-option>
                                <ion-select-option value="Aannemer">Aannemer</ion-select-option>
                                <ion-select-option value="Onbekend">Onbekend</ion-select-option>
                            </ion-select>
                        </ion-item>

                        <ion-item>
                            <ion-input label="Beschrijving modificatie:" :clear-input="true"></ion-input>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select 
                                label="Te ondernemen actie:" 
                                aria-label="actie" 
                                placeholder="Selecteer" 
                                interface="action-sheet">
                                <ion-select-option value="Accepteren">Accepteren</ion-select-option>
                                <ion-select-option value="Keuren">Keuren</ion-select-option>
                                <ion-select-option value="Verwijderen">Verwijderen</ion-select-option>
                                <ion-select-option value="Aanpassen en keuren">Aanpassen en keuren</ion-select-option>
                            </ion-select>
                        </ion-item>

                        <ion-item>
                            <ion-textarea 
                                label="Opmerkingen:" 
                                labelPlacement="fixed"
                                type="textarea" 
                                :auto-grow="true">
                            </ion-textarea>
                        </ion-item>

                        <ion-item lines="none">
                            <label>Foto's:</label>
                            <label class="fileInputButton" aria-label="Kies foto" for="fileInputModificaties">Kies foto's
                                <ion-icon :icon="camera"></ion-icon>    
                            </label>
                            <input hidden id="fileInputModificaties" type="file" accept="image/png, image/jpeg" slot="end">
                        </ion-item>
                    </ion-item-group>
                </Transition>

                <ion-item 
                    lines="none" 
                    v-if="
                        schadeOpnemen || 
                        achterstalligOnderhoud || 
                        technischeInstallaties ||
                        modificaties">
                    <ion-button size="default" fill="outline" class="opslaan">Opslaan</ion-button>
                </ion-item>
            </ion-list>

            <DocumentViewer  :setModal="setModal" :isOpen="isOpen" :document="document"/>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
    import GoBackBar from '@/components/GoBackBar.vue';
    import DocumentViewer from '@/components/DocumentViewer.vue';
    import { camera } from 'ionicons/icons';
    import { IonPage, IonIcon, IonContent, IonCheckbox, IonLabel, IonButton, IonSelect, IonTextarea, IonDatetime, IonDatetimeButton, IonModal, IonSelectOption, IonInput, IonItem, IonItemGroup, IonList } from '@ionic/vue';

    export default {
        name: 'AppointedReports',
        components: {
            HeaderSection,
            IonPage,
            IonContent,
            IonCheckbox,
            IonLabel,
            IonItem,
            IonList,
            IonItemGroup,
            IonInput,
            IonSelect,
            IonSelectOption,
            IonDatetimeButton,
            IonDatetime,
            IonModal,
            IonTextarea,
            IonButton,
            IonIcon,
            GoBackBar,
            DocumentViewer
        },
        data() {
            return {
                camera,                         // Icon voor foto button
                schadeOpnemen: false,           // Gebruik voor v-if van opslaan button
                achterstalligOnderhoud: false,  // Gebruik voor v-if van opslaan button
                technischeInstallaties: false,  // Gebruik voor v-if van opslaan button
                modificaties: false,            // Gebruik voor v-if van opslaan button
                document: ''                    // Vertel welke document
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
        }
    }
</script>

<style lang="css" scoped>
    /* Transition timing */
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.3s ease;
    }
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    /* Ion components */
    ion-item-group {
        margin-bottom: 2rem;
    }
    ion-item {
        font-size: .9rem;
    }
    ion-item.groupHeader {
        margin-top: 1rem;
        font-size: 1.1rem;
        --background: var(--main-color);
        --color: white;
    }
    ion-checkbox {
        --size: 1.2rem;
        --border-radius: 5px;
        --checkbox-background: rgb(236, 236, 236);
        --checkbox-background-checked: var(--ion-color-dark);
        --border-color-checked: var(--ion-color-dark);
        --border-color: var(--ion-color-dark);
        --border-width: 2px;
    }
    ion-icon {
        font-size: 22px;
    }
    ion-button {
        --border-color: var(--main-color);
        --background: var(--main-color);
        --background-activated: var(--main-color);
        --background-activated-opacity: .8;

    }
    .opslaan {
        width: 100%;
        
        margin: 2rem 0;
        --color: white;
    }
    /* Custom components */
    input[type='file'],
    label {
        margin-top: 1rem;
    }
    p {
        text-align: center;
        margin-inline: 1rem;
    }
    .fileInputButton {
        background-color: rgb(236, 236, 236);
        border-radius: 10px;
        padding: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .3rem;
        margin-left: auto;
        color: black;
        fill: black;
    }
    .fileInputButton ion-icon {
        fill: black;
    }
    
</style>