<template>
    <div>
        <h2>Schade opnemen</h2>
        <p>Locatie: {{ selectedInspection.damageInspection.location }}</p> 
        <p>Nieuwe schade: {{ selectedInspection.damageInspection.new }}</p> 
        <p>Soort schade: {{ selectedInspection.damageInspection.type }}</p> 
        <p>Datum: {{ selectedInspection.damageInspection.date }}</p> 
        <p>Acute actie vereist: {{ selectedInspection.damageInspection.acuteActionRequired }}</p> 
        <p>Omschrijving: {{ selectedInspection.damageInspection.description }}</p> 

        <h2>Achterstallig onderhoud</h2>
        <p>Locatie: {{ selectedInspection.maintenance.location }}</p> 
        <p>Soort onderhoud: {{ selectedInspection.maintenance.type }}</p> 
        <p>Acute actie vereist: {{ selectedInspection.maintenance.acuteActionRequired }}</p> 
        <p>Kostenindicatie: {{ selectedInspection.maintenance.costIndication }}</p> 
        
        <h2>Technische installaties inspecteren</h2>
        <p>Locatie: {{ selectedInspection.technicalInstallationInspection.location }}</p> 
        <p>Soort installatie: {{ selectedInspection.technicalInstallationInspection.installationType }}</p> 
        <p>Gemelde storingen: {{ selectedInspection.technicalInstallationInspection.malfunctions }}</p> 
        <p>Goedgekeurd: {{ selectedInspection.technicalInstallationInspection.approved }}</p> 
        <p>Opmerkingen: {{ selectedInspection.technicalInstallationInspection.comments }}</p> 
        
        <h2>Modificaties inventariseren</h2>
        <p>Opmerkingen: {{ selectedInspection.technicalInstallationInspection.comments }}</p> 

        <!-- <p>Locatie aangetroffen modicicatie: {{ selectedInspection.inventorizeModifications.location }}</p>  -->
        <!-- <p>Uitgevoerd door: {{ selectedInspection.inventorizeModifications.executedBy }}</p>  -->
        <!-- <p>Beschrijving modificatie: {{ selectedInspection.inventorizeModifications.description }}</p>  -->
        <!-- <p>Te ondernemen actie: {{ selectedInspection.inventorizeModifications.toDo }}</p>  -->
        <!-- <p>Opmerkingen: {{ selectedInspection.inventorizeModifications.comments }}</p>  -->

    </div>
</template>
<script lang="ts">
export default {
    name: 'SelectedInspection',
    props: {
        selectedInspection: Object
    }
}
</script>
<style lang="">
    
</style>