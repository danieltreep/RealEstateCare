<template>
    <ion-list v-for="(inspection, index) in inspections" :key="index">
        <ion-item @click="selectInspection(inspection.id)">
            <ion-label>Inspectie op {{inspection.id}}</ion-label>
        </ion-item>
    </ion-list>

    <SelectedInspection v-if="showSelectedInspection" :selectedInspection="inspections[selectedInspectionId]"/>
    <!-- <div >
        <h1>Inspectie ID: {{ selectedInspectionId }} van {{ inspections[selectedInspectionId].damageInspection.date }}</h1>
        
    </div> -->
</template>
<script lang="ts">
import { IonItem, IonLabel, IonList } from '@ionic/vue'; 
import getInspections from '@/services/getInspections.js';
import SelectedInspection from './SelectedInspection.vue';

export default {
    name: "CheckedReportsList",
    components: {
        IonItem, IonLabel, IonList, SelectedInspection
    },
    data() {
        return {
            inspections: [],
            selectedInspectionId: 0,
            showSelectedInspection: false,
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