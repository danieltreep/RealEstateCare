<template>
    <ion-list>
        <h3 class="ion-text-center ion-padding-top">Details inspectie: {{ selectedInspection.id }}</h3>
        
        <ion-item-group>
            <ion-list-header>Schade opnemen</ion-list-header>
            <ion-item>
                <ion-label position="stacked"><i>Locatie:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.location }}</ion-label>
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Nieuwe schade:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.new === 'checked' ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Soort schade:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.type }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Datum:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.inspectionDate }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Acute actie vereist:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.acuteActionRequired === 'checked' ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Omschrijving:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.description }}</ion-label> 
            </ion-item>
        </ion-item-group>

        <ion-item-group>
            <ion-list-header>Achterstallig onderhoud</ion-list-header>
            <ion-item>
                <ion-label position="stacked"><i>Locatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.maintenance.location }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Soort onderhoud:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.maintenance.type }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Acute actie vereist:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.maintenance.acuteActionRequired === 'checked' ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Kostenindicatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.maintenance.costIndication }}</ion-label> 
            </ion-item>
        </ion-item-group>
        
        <ion-item-group>
            <ion-list-header>Technische installaties inspecteren</ion-list-header>
            <ion-item>
                <ion-label position="stacked"><i>Locatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.location }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Soort installatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.installationType }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Gemelde storingen:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.malfunctions }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Goedgekeurd:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.approved === 'checked' ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Opmerkingen:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.comments }}</ion-label> 
            </ion-item>
        </ion-item-group>
        
        <ion-item-group>
            <ion-list-header>Modificaties inventariseren</ion-list-header>
            <ion-item>
                <ion-label position="stacked"><i>Locatie modicicatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.inventorizeModifications.location }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Uitgevoerd door:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.inventorizeModifications.executedBy }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Beschrijving modificatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.inventorizeModifications.description }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Te ondernemen actie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.inventorizeModifications.toDo }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label position="stacked"><i>Opmerkingen:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.inventorizeModifications.comments }}</ion-label> 
            </ion-item>
        </ion-item-group>

    </ion-list>
</template>

<script lang="ts">
    import { IonItem, IonLabel, IonList, IonListHeader, IonItemGroup } from '@ionic/vue';
    export default {
        name: 'SelectedInspection',
        props: {
            selectedInspection: Object
        },
        components: { 
            IonItem, 
            IonLabel, 
            IonList, 
            IonListHeader, 
            IonItemGroup 
        },
    }
</script>

<style lang="css">
    ion-item-group {
        margin-bottom: 2rem;
    }
</style>