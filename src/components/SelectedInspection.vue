<template>
    <ion-list :inset="true">
        
        <ion-list-header>Schade opnemen</ion-list-header>
        <ion-item>
            <ion-label>Locatie: {{ selectedInspection.damageInspection.location }}</ion-label> 
        </ion-item>
        <ion-item>
            <p>Nieuwe schade: {{ selectedInspection.damageInspection.new }}</p> 
        </ion-item>
        <ion-item>
            <p>Soort schade: {{ selectedInspection.damageInspection.type }}</p> 
        </ion-item>
        <ion-item>
            <p>Datum: {{ selectedInspection.damageInspection.date }}</p> 
        </ion-item>
        <ion-item>
            <p>Acute actie vereist: {{ selectedInspection.damageInspection.acuteActionRequired }}</p> 
        </ion-item>
        <ion-item>
            <p>Omschrijving: {{ selectedInspection.damageInspection.description }}</p> 
        </ion-item>

        <ion-list-header>Achterstallig onderhoud</ion-list-header>
        <ion-item>
            <p>Locatie: {{ selectedInspection.maintenance.location }}</p> 
        </ion-item>
        <ion-item>
            <p>Soort onderhoud: {{ selectedInspection.maintenance.type }}</p> 
        </ion-item>
        <ion-item>
            <p>Acute actie vereist: {{ selectedInspection.maintenance.acuteActionRequired }}</p> 
        </ion-item>
        <ion-item>
            <p>Kostenindicatie: {{ selectedInspection.maintenance.costIndication }}</p> 
        </ion-item>
        
        <ion-list-header>Technische installaties inspecteren</ion-list-header>
        <ion-item>
            <p>Locatie: {{ selectedInspection.technicalInstallationInspection.location }}</p> 
        </ion-item>
        <ion-item>
            <p>Soort installatie: {{ selectedInspection.technicalInstallationInspection.installationType }}</p> 
        </ion-item>
        <ion-item>
            <p>Gemelde storingen: {{ selectedInspection.technicalInstallationInspection.malfunctions }}</p> 
        </ion-item>
        <ion-item>
            <p>Goedgekeurd: {{ selectedInspection.technicalInstallationInspection.approved }}</p> 
        </ion-item>
        <ion-item>
            <p>Opmerkingen: {{ selectedInspection.technicalInstallationInspection.comments }}</p> 
        </ion-item>
        
        <ion-list-header>Modificaties inventariseren</ion-list-header>
        <ion-item>
            <p>Locatie aangetroffen modicicatie: {{ selectedInspection.inventorizeModifications.location }}</p> 
        </ion-item>
        <ion-item>
            <p>Uitgevoerd door: {{ selectedInspection.inventorizeModifications.executedBy }}</p> 
        </ion-item>
        <ion-item>
            <p>Beschrijving modificatie: {{ selectedInspection.inventorizeModifications.description }}</p> 
        </ion-item>
        <ion-item>
            <p>Te ondernemen actie: {{ selectedInspection.inventorizeModifications.toDo }}</p> 
        </ion-item>
        <ion-item>
            <p>Opmerkingen: {{ selectedInspection.inventorizeModifications.comments }}</p> 
        </ion-item>

    </ion-list>
</template>
<script lang="ts">
    import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/vue';
    import { defineComponent } from 'vue';
export default {
    

    name: 'SelectedInspection',
    props: {
        selectedInspection: Object
    },
    components: { IonItem, IonLabel, IonList, IonListHeader },
}
</script>
<style lang="">
    
</style>