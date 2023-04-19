<template>
    <ion-page>
        <HeaderSection />

        <ion-content :fullscreen="true" :class="darkMode ? 'darkMode' : ''">
            <h1>Toegewezen Rapporten</h1>
            
            <ion-list>
                <ion-item lines="none" class="groupHeader">
                    <ion-label>Schade opnemen</ion-label>
                    <ion-checkbox v-model="schadeOpnemen"></ion-checkbox>
                </ion-item>
                <Transition>
                    <ion-item-group v-show="schadeOpnemen">
                        <ion-item>
                            <ion-label position="stacked" >Locatie:</ion-label> 
                            <ion-input :clear-input="true"></ion-input>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Nieuwe schade:</ion-label> 
                            <ion-checkbox></ion-checkbox>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Soort schade:</ion-label> 
                            <ion-select aria-label="soort schade opnemen" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Moedwillig">Moedwillig</ion-select-option>
                                <ion-select-option value="Slijtage">Slijtage</ion-select-option>
                                <ion-select-option value="Geweld">Geweld</ion-select-option>
                                <ion-select-option value="Normaal">Normaal</ion-select-option>
                                <ion-select-option value="Calamiteit">Calamiteit</ion-select-option>
                                <ion-select-option value="Anders">Anders</ion-select-option>
                            </ion-select>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Datum:</ion-label> 
                            <ion-datetime-button datetime="datetime"></ion-datetime-button>
    
                            <ion-modal :keep-contents-mounted="true">
                                <ion-datetime id="datetime"></ion-datetime>
                            </ion-modal>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Acute actie vereist:</ion-label>
                            <ion-checkbox></ion-checkbox> 
                        </ion-item>
                        <ion-item>
                            <ion-label position="stacked">Omschrijving:</ion-label> 
                            <ion-textarea type="textarea" :auto-grow="true"></ion-textarea>
                        </ion-item>
                        <ion-item lines="none">
                            <label for="fileInput">Foto's:</label>
                            <label class="fileInputButton" aria-label="Kies foto" for="fileInput">Kies foto's
                                <ion-icon :icon="camera"></ion-icon>   
                            </label>
                            <input hidden id="fileInput" type="file" accept="image/png, image/jpeg" slot="end">
                        </ion-item>
                    </ion-item-group>
                </Transition>

                <ion-item lines="none" class="groupHeader">
                    <ion-label>Achterstallig onderhoud opnemen</ion-label>
                    <ion-checkbox v-model="achterstalligOnderhoud">Label start</ion-checkbox>
                </ion-item>
                <Transition>
                    <ion-item-group v-show="achterstalligOnderhoud">
                        <ion-item>
                            <ion-label position="stacked" >Locatie:</ion-label> 
                            <ion-input :clear-input="true"></ion-input>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Soort onderhoud:</ion-label>
                            <ion-select aria-label="soort onderhoud" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Achilderwerk">Schilderwerk</ion-select-option>
                                <ion-select-option value="Houtrot">Houtrot</ion-select-option>
                                <ion-select-option value="Elektra">Elektra</ion-select-option>
                                <ion-select-option value="Leidingwerk">Leidingwerk</ion-select-option>
                                <ion-select-option value="Beglazing">Beglazing</ion-select-option>
                            </ion-select> 
                        </ion-item>
                        <ion-item lines="none"> 
                            <ion-label class="ion-text-wrap">Acute actie vereist:</ion-label> 
                            <ion-checkbox></ion-checkbox>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Kostenindicatie:</ion-label> 
                            <ion-select aria-label="kostenindicatie" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="0-500">&euro; 0-500</ion-select-option>
                                <ion-select-option value="500-1500">&euro; 500-1.500</ion-select-option>
                                <ion-select-option value="1500+">&euro; 1.500+</ion-select-option>
                            </ion-select>
                        </ion-item>
                        <ion-item lines="none">
                            <label for="fileInputOnderhoud">Foto's:</label>
                            <label class="fileInputButton" aria-label="Kies foto" for="fileInputOnderhoud">Kies foto's
                                <ion-icon :icon="camera"></ion-icon>   
                            </label>
                            <input hidden id="fileInputOnderhoud" type="file" accept="image/png, image/jpeg" slot="end">
                        </ion-item>
                    </ion-item-group>
                </Transition>
                
                <ion-item lines="none" class="groupHeader">
                    <ion-label >Technische installaties inspecteren</ion-label>
                    <ion-checkbox v-model="technischeInstallaties">Label start</ion-checkbox>
                </ion-item>
                <Transition>
                    <ion-item-group v-show="technischeInstallaties">
                        <ion-item>
                            <ion-label position="stacked" >Locatie:</ion-label> 
                            <ion-input :clear-input="true"></ion-input>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Soort installatie:</ion-label> 
                            <ion-select aria-label="soort installatie" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Koeling">Koeling</ion-select-option>
                                <ion-select-option value="Verwarming">Verwarming</ion-select-option>
                                <ion-select-option value="Luchtverversing">Luchtverversing</ion-select-option>
                                <ion-select-option value="Elektra">Elektra</ion-select-option>
                                <ion-select-option value="Beveiliging">Beveiliging</ion-select-option>
                            </ion-select>
                        </ion-item>
                        <ion-item>
                            <ion-label position="stacked">Gemelde storingen:</ion-label> 
                            <ion-input :clear-input="true"></ion-input>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Goedgekeurd:</ion-label> 
                            <ion-checkbox></ion-checkbox>
                        </ion-item>
                        <ion-item >
                            <ion-label position="stacked" >Opmerkingen:</ion-label> 
                            <ion-textarea type="textarea" :auto-grow="true"></ion-textarea>
                        </ion-item>
                        <ion-item lines="none">
                            <label for="fileInputTechnisch">Foto's:</label>
                            <label class="fileInputButton" aria-label="Kies foto" for="fileInputTechnisch">Kies foto's
                                <ion-icon :icon="camera"></ion-icon>   
                            </label>
                            <input hidden id="fileInputTechnisch" type="file" accept="image/png, image/jpeg" slot="end">
                        </ion-item>
                    </ion-item-group>
                </Transition>
                
                <ion-item lines="none" class="groupHeader">
                    <ion-label >Modificaties inventariseren</ion-label>
                    <ion-checkbox v-model="modificaties">Label start</ion-checkbox>
                </ion-item>
                <Transition>
                    <ion-item-group v-show="modificaties">
                        <ion-item>
                            <ion-label position="stacked" >Locatie modificatie:</ion-label> 
                            <ion-input :clear-input="true"></ion-input>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Uitgevoerd door:</ion-label> 
                            <ion-select aria-label="uitvoerder" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Huurder">Huurder</ion-select-option>
                                <ion-select-option value="Aannemer">Aannemer</ion-select-option>
                                <ion-select-option value="Onbekend">Onbekend</ion-select-option>
                            </ion-select>
                        </ion-item>
                        <ion-item>
                            <ion-label position="stacked" >Beschrijving modificatie:</ion-label> 
                            <ion-input :clear-input="true"></ion-input>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Te ondernemen actie:</ion-label> 
                            <ion-select aria-label="actie" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="Accepteren">Accepteren</ion-select-option>
                                <ion-select-option value="Keuren">Keuren</ion-select-option>
                                <ion-select-option value="Verwijderen">Verwijderen</ion-select-option>
                                <ion-select-option value="Aanpassen en keuren">Aanpassen en keuren</ion-select-option>
                            </ion-select>
                        </ion-item>
                        <ion-item>
                            <ion-label position="stacked">Opmerkingen:</ion-label> 
                            <ion-textarea type="textarea" :auto-grow="true"></ion-textarea>
                        </ion-item>
                        <ion-item lines="none">
                            <label for="fileInputModificaties" >Foto's:</label>
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
                    <ion-button>Opslaan</ion-button>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
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
            IonIcon
        },
        data() {
            return {
                camera,                         // Icon voor foto button
                schadeOpnemen: false,           // Gebruik voor v-if van opslaan button
                achterstalligOnderhoud: false,  // Gebruik voor v-if van opslaan button
                technischeInstallaties: false,  // Gebruik voor v-if van opslaan button
                modificaties: false             // Gebruik voor v-if van opslaan button
            }
        },
        computed: {
            counter() {
                return this.$store.state.counter;
            },
            darkMode() {
                return this.$store.state.darkMode;
            }
        }
    }
</script>

<style lang="css" scoped>
    ion-item-group {
        /* margin-bottom: 2rem; */
        transition: all .3s;
    }
    h1 {
        text-align: center;
    }
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.3s ease;
    }
    
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
    ion-item.groupHeader {
        margin-top: 1rem;
        font-weight: bold;
        border-top: 3px solid rgba(0,170,162);

    }
    ion-checkbox {
        --size: 1.2rem;
        --border-radius: 5px;
    }
    input[type='file'],
    label {
        margin-top: 1rem;
    }
    label:not(.fileInputButton) {
        font-size: .9rem;
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
    }
</style>