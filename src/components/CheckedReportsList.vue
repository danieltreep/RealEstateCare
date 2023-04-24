<template>
    <!-- Loop over alle inspecties uit de store en open enkele inspectie bij klik op basis van id -->
    <ion-list v-for="(inspection, index) in inspections" :key="index">
        <ion-item 
            @click="selectInspection(inspection.id)" 
            :detail="true" 
            lines="full" 
            tabindex="1">
            <ion-icon 
                :icon="clipboardOutline" 
                slot="start" />
            <ion-label>Inspectie {{inspection.id}} op {{`${inspection.dateAdded.getDate()}-${inspection.dateAdded.getMonth() + 1}-${inspection.dateAdded.getFullYear()}`}}</ion-label>
        </ion-item>
    </ion-list>

    <!-- Hier komt de geselecteerde inspectie als er een is gekozen -->
    <SelectedInspection 
        v-if="showSelectedInspection" 
        :selectedInspection="selectedInspection" 
        :onDeletedInspection="onDeletedInspection"/>
    
</template>
<script lang="ts">
import { IonItem, IonLabel, IonList, IonIcon } from '@ionic/vue'; 
import { clipboardOutline } from 'ionicons/icons';
import SelectedInspection from './SelectedInspection.vue';

export default {
    name: "CheckedReportsList",
    components: {
        IonItem, 
        IonLabel, 
        IonList, 
        IonIcon,
        SelectedInspection
    },
    data() {
        return {
            selectedInspectionId: null,
            showSelectedInspection: false,
            clipboardOutline
        }
    },
    methods: {
        selectInspection(id: number) {
            this.selectedInspectionId = id;
            this.showSelectedInspection = true;
        },
        onDeletedInspection() {
            this.selectedInspectionId = null;
            this.showSelectedInspection = false;
        }
    },
    computed: {
        inspections() {
            return this.$store.state.inspections;
        },
        selectedInspection() {
            return this.$store.getters.getSelectedInspection(this.selectedInspectionId);
        },
    }
    
}
</script>