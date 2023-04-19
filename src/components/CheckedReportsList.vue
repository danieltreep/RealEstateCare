<template>
    <ion-list v-for="(inspection, index) in inspections" :key="index">
        <ion-item 
            @click="selectInspection(inspection.id)" 
            :detail="true" 
            lines="full" >
            <ion-icon 
                :icon="clipboardOutline" 
                slot="start" />
            <ion-label>Inspectie {{inspection.id}} op {{inspection.damageInspection.inspectionDate}}</ion-label>
        </ion-item>
    </ion-list>

    <SelectedInspection 
        v-if="showSelectedInspection" 
        :selectedInspection="selectedInspection" />
    
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
            selectedInspectionId: '',
            showSelectedInspection: false,
            clipboardOutline
        }
    },
    methods: {
        selectInspection(id: string) {
            this.selectedInspectionId = id;
            this.showSelectedInspection = true;
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