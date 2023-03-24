<template>
    <ion-list v-for="(inspection, index) in inspections" :key="index">
        <ion-item @click="selectInspection(inspection.id)" :detail="true" lines="full">
            <ion-icon :icon="clipboardOutline" slot="start"/>
            <ion-label>Inspectie {{inspection.id}} op {{inspection.damageInspection.date}}</ion-label>
        </ion-item>
    </ion-list>

    <SelectedInspection v-if="showSelectedInspection" :selectedInspection="inspections[selectedInspectionId]"/>
    
</template>
<script lang="ts">
import { IonItem, IonLabel, IonList, IonIcon } from '@ionic/vue'; 
import { clipboardOutline } from 'ionicons/icons';
import getInspections from '@/services/getInspections.js';
import SelectedInspection from './SelectedInspection.vue';

export default {
    name: "CheckedReportsList",
    components: {
        IonItem, IonLabel, IonList, SelectedInspection, IonIcon
    },
    data() {
        return {
            inspections: [],
            selectedInspectionId: 0,
            showSelectedInspection: false,
            clipboardOutline
        }
    },
    methods: {
        selectInspection(id) {
            this.selectedInspectionId = id;
            this.showSelectedInspection = true;
        }
    },
    mounted() {
        getInspections()
            .then(data => this.inspections = data)
        
    }
}

</script>