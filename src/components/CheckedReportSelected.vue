<template>
    <!-- Wordt getoond als er een inspectie wordt aangeklikt. Hierin staan alle details van de geselecteerde inspectie-->
    <ion-list class="list">
        <h3 class="ion-text-center ion-padding-top">Details inspectie: {{ selectedInspection.id }}</h3>

        <!-- Buttons met aanpassen of verwijderen -->
        <ion-item lines="none">
            <ion-button @click="onChangeReport(selectedInspection.id)">Aanpassen</ion-button>
            <DeleteReportButton 
                :onDelete="onDelete"
                :selectedInspectionId="selectedInspection.id"/>
        </ion-item>

        <!-- Onderdeel schade opnemen -->
        <ion-list-header>Schade opnemen</ion-list-header>
        <ion-item 
            v-if="!selectedInspection.damageInspection.selected" 
            class="nvt"
        >
            <ion-label>Niet van toepassing</ion-label>
        </ion-item>
        <ion-item-group v-if="selectedInspection.damageInspection.selected">
            <ion-item>
                <ion-label ><i>Locatie:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.location }}</ion-label>
            </ion-item>
            <ion-item>
                <ion-label><i>Nieuwe schade:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.new ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Soort schade:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.type }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Datum:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.inspectionDate }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Acute actie vereist:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.acuteActionRequired ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Omschrijving:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.description }}</ion-label> 
            </ion-item>
        </ion-item-group>

        <!-- Onderdeel achterstallig onderhoud -->
        <ion-list-header>Achterstallig onderhoud</ion-list-header>
        <ion-item 
            v-if="!selectedInspection.maintenance.selected" 
            class="nvt"
        >
            <ion-label>Niet van toepassing</ion-label>
        </ion-item>
        <ion-item-group v-if="selectedInspection.maintenance.selected">
            <ion-item>
                <ion-label><i>Locatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.maintenance.location }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Soort onderhoud:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.maintenance.type }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Acute actie vereist:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.maintenance.acuteActionRequired ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Kostenindicatie:</i></ion-label> 
                <ion-label class="ion-text-wrap">&euro; {{ selectedInspection.maintenance.costIndication }}</ion-label> 
            </ion-item>
        </ion-item-group>
        
        <!-- Onderdeel technische installaties inspecteren -->
        <ion-list-header>Technische installaties inspecteren</ion-list-header>
        <ion-item 
            v-if="!selectedInspection.technicalInstallationInspection.selected" 
            class="nvt"
        >
            <ion-label>Niet van toepassing</ion-label>
        </ion-item>
        <ion-item-group v-if="selectedInspection.technicalInstallationInspection.selected">
            <ion-item>
                <ion-label><i>Locatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.location }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Soort installatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.installationType }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Gemelde storingen:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.malfunctions }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Goedgekeurd:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.approved ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Opmerkingen:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.comments }}</ion-label> 
            </ion-item>
        </ion-item-group>
        
        <!-- Onderdeel modificaties inventariseren -->
        <ion-list-header>Modificaties inventariseren</ion-list-header>
        <ion-item 
            v-if="!selectedInspection.inventorizeModifications.selected" 
            class="nvt"
        >
            <ion-label>Niet van toepassing</ion-label>
        </ion-item>
        <ion-item-group v-if="selectedInspection.inventorizeModifications.selected">
            <ion-item>
                <ion-label><i>Locatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.inventorizeModifications.location }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Uitgevoerd door:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.inventorizeModifications.executedBy }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Beschrijving:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.inventorizeModifications.description }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Te ondernemen actie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.inventorizeModifications.toDo }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Opmerkingen:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.inventorizeModifications.comments }}</ion-label> 
            </ion-item>
        </ion-item-group>

        <!-- Foto sectie -->
        <ion-list-header>Foto's</ion-list-header>
        <ion-item-group>
            <!-- Voor alle bestandsnamen wordt een foto geladen uit de assets -->
            <ion-item 
                v-for="(foto, index) in selectedInspection.photos" 
                :key="index" 
                lines="none"
            >
                <img 
                    :src="require(`../../public/assets/photos/${foto}`)" 
                    :alt="`inspectie foto ${index}`"
                >
            </ion-item>
        </ion-item-group>
        
    </ion-list>
</template>

<script lang="ts">
    import DeleteReportButton from './DeleteReportButton.vue';
    import { IonItem, IonLabel, IonList, IonListHeader, IonItemGroup, IonButton } from '@ionic/vue';
    export default {
        name: 'CheckedReportSelected',
        components: { 
            IonItem, 
            IonLabel, 
            IonList, 
            IonListHeader, 
            IonItemGroup,
            IonButton,
            DeleteReportButton 
        },
        props: {
            selectedInspection: {
                type: Object,
                required: true
            },
            onDeletedInspection: {
                type: Function
            }
        },
        methods: {
            onDelete(id) {                                               
                this.onDeletedInspection();                     // Functie uit CheckedReportsList reset waarden 
                this.$store.dispatch('deleteInspection', id);   // Voer actie uit op store en verwijder geselecteerde inspectie
            },
            onChangeReport(id) {
                this.$router.push(`/change/${id}`);             // Open ChangeReport view en geef id mee als parameter
            }
        },
        
    }
</script>

<style lang="css" scoped>
    ion-item-group {
        margin-bottom: 2rem;
    }
    ion-list-header {
        font-weight: bold;
        font-size: 1.2rem;
    }
    ion-button {
        height: 40px;
        width: 100%;
        --background: var(--main-color);
    }
    ion-button.delete {
        --background: red;
    }
    .nvt {
        margin-bottom: 2rem;
    }
    img {
        margin: .5rem 0;
    }
</style>