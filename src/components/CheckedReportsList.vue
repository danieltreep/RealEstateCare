<template>
    <ion-list v-for="(inspection, index) in inspections" :key="index">
        <ion-item>
            <ion-label>{{inspection.id}}</ion-label>
        </ion-item>
        <!-- <ion-item>
            <ion-label>Inspectie 12-04-2022</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Inspectie 24-03-2022</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>{{inspections[0].id}}</ion-label>
        </ion-item>
        <ion-item v-for="(inspection, index) in inspections" :key="index">
            <ion-label>{{ inspection.damageInspection.location }}</ion-label>
        </ion-item> -->
    </ion-list>
</template>
<script lang="ts">
import { IonItem, IonLabel, IonList } from '@ionic/vue'; 
// import getInspections from '@/services/getInspections.js'

export default {
    name: "CheckedReportsList",
    data() {
        return {
            inspections: '',
            
        }
    },
    components: {
        IonItem, IonLabel, IonList
    },
    methods: {
        getInspections() {
            fetch('https://my-json-server.typicode.com/danieltreep/RealEstateCare/inspections')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.inspections = data;
                })
                .catch(error => console.error(error))
        }
    },
    mounted() {
        this.getInspections()
        // this.inspections = getInspections();
        // const inspection = getInspections();
        // this.inspections = inspection;
        // console.log("inspections " + inspection)
    }
}

</script>