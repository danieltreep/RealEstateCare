<template>
    <!-- Loop over alle inspecties uit de store en open enkele inspectie bij klik op basis van id -->
    <ion-list class="list">
        <ion-item 
            v-for="(inspection, index) in inspections" :key="index"
            @click="selectInspection(inspection.id)" 
            :detail="true" 
            lines="full" 
            >
            <ion-icon 
                :icon="clipboardOutline" 
                slot="start" />
            <ion-label 
                tabindex="1" 
                @keyup.enter="selectInspection(inspection.id)"              
                >Inspectie {{inspection.id}} op {{`${inspection.dateAdded.getDate()}-${inspection.dateAdded.getMonth() + 1}-${inspection.dateAdded.getFullYear()}`}}
            </ion-label>
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
                selectedInspectionId: null,                 // Houd bij welke inspectie is gekozen
                showSelectedInspection: false,              // Laat gekozen inspectie zien of niet, voor v-if
                clipboardOutline                            
            }
        },
        methods: {
            selectInspection(id: number) {                  // Update geselecteerde inspectie id voor de getter
                this.selectedInspectionId = id;
                this.showSelectedInspection = true;
            },
            onDeletedInspection() {                         // Reset de waarden zodat er geen inspectie wordt gelezen die niet meer bestaat
                this.selectedInspectionId = null;           // Wordt meegegeven als prop aan selectedInspection
                this.showSelectedInspection = false;
            }
        },
        computed: {
            inspections() {                                 // Haal de inspecties op uit de store
                return this.$store.state.inspections;
            },
            selectedInspection() {                          // Haal een enkele inspectie op op basis van id, Prop voor selectedInspection
                return this.$store.getters.getSelectedInspection(this.selectedInspectionId);
            },
        }
    }
</script>