<template>
    <ion-page>
        <HeaderSection />
        <ion-content :fullscreen="true">
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
                                <ion-select-option value="apples">Moedwillig</ion-select-option>
                                <ion-select-option value="slijtage">Slijtage</ion-select-option>
                                <ion-select-option value="geweld">Geweld</ion-select-option>
                                <ion-select-option value="normaal">Normaal</ion-select-option>
                                <ion-select-option value="calamiteit">Calamiteit</ion-select-option>
                                <ion-select-option value="anders">Anders</ion-select-option>
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
                            <ion-label class="ion-text-wrap" >Soort onderhoud:</ion-label>
                            <ion-select aria-label="soort onderhoud" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="schilderwerk">Schilderwerk</ion-select-option>
                                <ion-select-option value="houtrot">Houtrot</ion-select-option>
                                <ion-select-option value="elektra">Elektra</ion-select-option>
                                <ion-select-option value="leidingwerk">Leidingwerk</ion-select-option>
                                <ion-select-option value="beglazing">Beglazing</ion-select-option>
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
                                <ion-select-option value="koeling">Koeling</ion-select-option>
                                <ion-select-option value="verwarming">Verwarming</ion-select-option>
                                <ion-select-option value="luchtverversing">Luchtverversing</ion-select-option>
                                <ion-select-option value="elektra">Elektra</ion-select-option>
                                <ion-select-option value="beveiliging">Beveiliging</ion-select-option>
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
                        <ion-item>
                            <ion-label position="stacked" >Opmerkingen:</ion-label> 
                            <ion-textarea type="textarea" :auto-grow="true"></ion-textarea>
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
                            <ion-label class="ion-text-wrap" >Uitgevoerd door:</ion-label> 
                            <ion-select aria-label="uitvoerder" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="huurder">Huurder</ion-select-option>
                                <ion-select-option value="aannemer">Aannemer</ion-select-option>
                                <ion-select-option value="onbekend">Onbekend</ion-select-option>
                            </ion-select>
                        </ion-item>
                        <ion-item>
                            <ion-label position="stacked" >Beschrijving modificatie:</ion-label> 
                            <ion-input :clear-input="true"></ion-input>
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-wrap">Te ondernemen actie:</ion-label> 
                            <ion-select aria-label="actie" placeholder="Selecteer" interface="action-sheet">
                                <ion-select-option value="accepteren">Accepteren</ion-select-option>
                                <ion-select-option value="keuren">Keuren</ion-select-option>
                                <ion-select-option value="verwijderen">Verwijderen</ion-select-option>
                                <ion-select-option value="aanpassen en keuren">Aanpassen en keuren</ion-select-option>
                            </ion-select>
                        </ion-item>
                        <ion-item>
                            <ion-label position="stacked">Opmerkingen:</ion-label> 
                            <ion-textarea type="textarea" :auto-grow="true"></ion-textarea>
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
                    <ion-button>Verwijderen</ion-button>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import HeaderSection from '@/components/HeaderSection.vue';
    import { IonPage, IonContent, IonCheckbox, IonLabel, IonButton, IonSelect, IonTextarea, IonDatetime, IonDatetimeButton, IonModal, IonSelectOption, IonInput, IonItem, IonItemGroup, IonList } from '@ionic/vue';

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
            IonButton
        },
        data() {
            return {
                schadeOpnemen: false,
                achterstalligOnderhoud: false,
                technischeInstallaties: false,
                modificaties: false
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
</style>