<template>
    <ion-list>
        <h3 class="ion-text-center ion-padding-top">Details inspectie: {{ selectedInspection.id }}</h3>
        <ion-item lines="none">
            <ion-button @click="onChangeReport(selectedInspection.id)">Aanpassen</ion-button>
            <DeleteInspection 
                :onDelete="onDelete"
                :selectedInspectionId="selectedInspection.id"/>
        </ion-item>

        <ion-list-header>Schade opnemen</ion-list-header>
        <ion-item v-if="!selectedInspection.damageInspection.selected" class="nvt">
            <ion-label>Niet van toepassing</ion-label>
        </ion-item>
        <ion-item-group v-if="selectedInspection.damageInspection.selected">
            <ion-item>
                <ion-label ><i>Locatie:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.location }}</ion-label>
            </ion-item>
            <ion-item>
                <ion-label><i>Nieuwe schade:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.new === 'checked' ? 'Ja' : 'Nee' }}</ion-label> 
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
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.acuteActionRequired === 'checked' ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Omschrijving:</i></ion-label> 
                <ion-label class="ion-text-wrap">{{ selectedInspection.damageInspection.description }}</ion-label> 
            </ion-item>
        </ion-item-group>

        <ion-list-header>Achterstallig onderhoud</ion-list-header>
        <ion-item v-if="!selectedInspection.maintenance.selected" class="nvt">
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
                <ion-label class="ion-text-wrap"> {{ selectedInspection.maintenance.acuteActionRequired === 'checked' ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Kostenindicatie:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.maintenance.costIndication }}</ion-label> 
            </ion-item>
        </ion-item-group>
        
        <ion-list-header>Technische installaties inspecteren</ion-list-header>
        <ion-item v-if="!selectedInspection.technicalInstallationInspection.selected" class="nvt">
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
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.approved === 'checked' ? 'Ja' : 'Nee' }}</ion-label> 
            </ion-item>
            <ion-item>
                <ion-label><i>Opmerkingen:</i></ion-label> 
                <ion-label class="ion-text-wrap"> {{ selectedInspection.technicalInstallationInspection.comments }}</ion-label> 
            </ion-item>
        </ion-item-group>
        
        <ion-list-header>Modificaties inventariseren</ion-list-header>
        <ion-item v-if="!selectedInspection.inventorizeModifications.selected" class="nvt">
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

        <ion-list-header>Foto's</ion-list-header>
        <ion-item-group>
            <ion-item v-for="(foto, index) in selectedInspection.photos" :key="index" lines="none">
                <img :src="require(`../../public/assets/photos/${foto}`)" :alt="foto">
            </ion-item>
        </ion-item-group>
        
    </ion-list>
</template>

<script lang="ts">
    import DeleteInspection from './DeleteInspectionButton.vue';
    import { IonItem, IonLabel, IonList, IonListHeader, IonItemGroup, IonButton } from '@ionic/vue';
    export default {
        name: 'SelectedInspection',
        props: {
            selectedInspection: Object,
            onDeletedInspection: Function
        },
        components: { 
            IonItem, 
            IonLabel, 
            IonList, 
            IonListHeader, 
            IonItemGroup,
            IonButton,
            DeleteInspection 
        },
        methods: {
            onDelete(id) {
                this.onDeletedInspection();
                this.$store.dispatch('deleteInspection', id);
            },
            onChangeReport(id) {
                this.$router.push(`/change/${id}`);
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