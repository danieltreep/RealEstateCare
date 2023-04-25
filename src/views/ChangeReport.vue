<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            
            <h1>Pas rapport {{ oldInspection.id }} aan </h1>
            
            <ion-list>
                <ion-item lines="none" class="groupHeader">
                    <ion-checkbox v-model="oldInspection.damageInspection.selected">Schade opnemen</ion-checkbox>
                </ion-item>

                <Transition>
                    <ion-item-group v-if="oldInspection.damageInspection.selected">
                        <ion-item>
                            <ion-input 
                                label="Locatie:" 
                                :clear-input="true"
                                v-model="oldInspection.damageInspection.location"
                                ></ion-input>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-checkbox v-model="oldInspection.damageInspection.new">Nieuwe schade:</ion-checkbox>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select 
                                label="Soort schade:" 
                                aria-label="soort schade opnemen" 
                                placeholder="Selecteer" 
                                interface="action-sheet"
                                v-model="oldInspection.damageInspection.type">
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
                                <ion-datetime id="datetime" @ionChange="onDateChange($event)"></ion-datetime>
                            </ion-modal>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-checkbox v-model="oldInspection.damageInspection.acuteActionRequired">Acute actie vereist:</ion-checkbox> 
                        </ion-item>

                        <ion-item>
                            <ion-textarea 
                                label="Omschrijving:" 
                                type="textarea" 
                                :auto-grow="true"
                                v-model="oldInspection.damageInspection.description"
                                ></ion-textarea>
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
                    <ion-checkbox v-model="oldInspection.maintenance.selected">Achterstallig onderhoud opnemen</ion-checkbox>
                </ion-item>

                <Transition>
                    <ion-item-group v-if="oldInspection.maintenance.selected">
                        <ion-item>
                            <ion-input label="Locatie:" :clear-input="true" v-model="oldInspection.maintenance.location"></ion-input>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select label="Soort onderhoud:" aria-label="soort onderhoud" v-model="oldInspection.maintenance.type" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Schilderwerk">Schilderwerk</ion-select-option>
                                <ion-select-option value="Houtrot">Houtrot</ion-select-option>
                                <ion-select-option value="Elektra">Elektra</ion-select-option>
                                <ion-select-option value="Leidingwerk">Leidingwerk</ion-select-option>
                                <ion-select-option value="Beglazing">Beglazing</ion-select-option>
                            </ion-select> 
                        </ion-item>

                        <ion-item lines="none"> 
                            <ion-checkbox v-model="oldInspection.maintenance.acuteActionRequired">Acute actie vereist:</ion-checkbox>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select label="Kostenindicatie:" v-model="oldInspection.maintenance.costIndication" aria-label="kostenindicatie" placeholder="Selecteer" interface="action-sheet">
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
                    <ion-checkbox v-model="oldInspection.technicalInstallationInspection.selected">Technische installaties inspecteren</ion-checkbox>
                </ion-item>

                <Transition>
                    <ion-item-group v-if="oldInspection.technicalInstallationInspection.selected">
                        <ion-item>
                            <ion-input label="Locatie:" :clear-input="true" v-model="oldInspection.technicalInstallationInspection.location"></ion-input>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select label="Soort installatie" aria-label="soort installatie" v-model="oldInspection.technicalInstallationInspection.installationType" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Koeling">Koeling</ion-select-option>
                                <ion-select-option value="Verwarming">Verwarming</ion-select-option>
                                <ion-select-option value="Luchtverversing">Luchtverversing</ion-select-option>
                                <ion-select-option value="Elektra">Elektra</ion-select-option>
                                <ion-select-option value="Beveiliging">Beveiliging</ion-select-option>
                            </ion-select>
                        </ion-item>

                        <ion-item>
                            <ion-textarea label="Gemelde storingen:" v-model="oldInspection.technicalInstallationInspection.malfunctions"></ion-textarea>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-checkbox v-model="oldInspection.technicalInstallationInspection.approved">Goedgekeurd:</ion-checkbox>
                        </ion-item>

                        <ion-item>
                            <ion-textarea 
                                label="Opmerkingen:" 
                                labelPlacement="fixed"
                                type="textarea" 
                                :auto-grow="true"
                                v-model="oldInspection.technicalInstallationInspection.comments">
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
                    <ion-checkbox v-model="oldInspection.inventorizeModifications.selected">Modificaties inventariseren</ion-checkbox>
                </ion-item>

                <Transition>
                    <ion-item-group v-if="oldInspection.inventorizeModifications.selected">
                        <ion-item>
                            <ion-input label="Locatie modificatie:" :clear-input="true" v-model="oldInspection.inventorizeModifications.location"></ion-input>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select label="Uitgevoerd door:" aria-label="uitvoerder" placeholder="Selecteer" interface="action-sheet" v-model="oldInspection.inventorizeModifications.executedBy">
                                <ion-select-option value="Huurder">Huurder</ion-select-option>
                                <ion-select-option value="Aannemer">Aannemer</ion-select-option>
                                <ion-select-option value="Onbekend">Onbekend</ion-select-option>
                            </ion-select>
                        </ion-item>

                        <ion-item>
                            <ion-input label="Beschrijving modificatie:" :clear-input="true" v-model="oldInspection.inventorizeModifications.description"></ion-input>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-select 
                                label="Te ondernemen actie:" 
                                aria-label="actie" 
                                placeholder="Selecteer" 
                                interface="action-sheet"
                                v-model="oldInspection.inventorizeModifications.toDo">
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
                                :auto-grow="true"
                                v-model="oldInspection.inventorizeModifications.comments">
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
                        oldInspection.damageInspection.selected || 
                        oldInspection.maintenance.selected || 
                        oldInspection.technicalInstallationInspection.selected ||
                        oldInspection.inventorizeModifications.selected">
                    <ion-button 
                        size="default" 
                        @click="onSubmit()"
                        class="opslaan" 
                        type="submit"
                        >Opslaan</ion-button>
                </ion-item>
            </ion-list>

        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
    import Inspection from '@/helpers/inspectionClass';
    
    import { camera } from 'ionicons/icons';
    import { IonPage, IonIcon, IonContent, IonCheckbox, IonLabel, IonButton, IonSelect, IonTextarea, IonDatetime, IonDatetimeButton, IonModal, IonSelectOption, IonInput, IonItem, IonItemGroup, IonList } from '@ionic/vue';

    export default {
        name: 'ChangeReport',
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
            IonIcon
        },
        data() {
            return {
                camera,                         // Icon voor foto button
                schadeOpnemen: false,           // Gebruik voor v-if 
                achterstalligOnderhoud: false,  // Gebruik voor v-if 
                technischeInstallaties: false,  // Gebruik voor v-if 
                modificaties: false,            // Gebruik voor v-if 
                document: '',                   // Vertel welke document
                oldInspection: {
                    id: null,
                    dateAdded: '',
                    damageInspection: {
                        selected: false,
                        location: "",
                        new: false,
                        type: "",
                        inspectionDate: "",
                        acuteActionRequired: false,
                        description: ""
                    },
                    maintenance: {
                        selected: false,
                        location: "",
                        type: "",
                        acuteActionRequired: false,
                        costIndication: ""
                    },
                    technicalInstallationInspection: {
                        selected: false,
                        location: "",
                        installationType: "",
                        malfunctions: "",
                        approved: false,
                        comments: ""
                    },
                    inventorizeModifications: {
                        selected: false,
                        location: "",
                        executedBy: "",
                        description: "",
                        toDo: "",
                        comments: ""
                    },
                    photos: []
                }
            }
        },
        computed: {
            darkMode() {
                return this.$store.state.darkMode;
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('changeInspection', new Inspection(this.oldInspection));
                this.$router.go(-1);
            },
            onDateChange($event) {
                this.oldInspection.damageInspection.inspectionDate = new Date($event.detail.value);
            }
        },
        mounted() {
            this.oldInspection = this.$store.getters.getSelectedInspection(+this.$route.params.id);
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
    ion-item:not(.groupHeader) ion-checkbox {
        --checkbox-background-checked: var(--main-color);
        --border-color-checked: var(--main-color);
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
    ion-content{
        --keyboard-offset: 0 !important;
    }
    .opslaan {
        width: 100%;
        
        margin: 2rem 0 6rem;
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