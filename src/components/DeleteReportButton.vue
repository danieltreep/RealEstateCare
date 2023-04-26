<template>
    <!-- Open alert zodat de inspectie niet per ongeluk verwijderd wordt -->
    <ion-button 
        class="delete" 
        id="present-alert"
        >Verwijderen
    </ion-button>
    <ion-alert
        trigger="present-alert"
        header="Wilt u deze inspectie echt verwijderen?"
        :buttons="alertButtons"
    ></ion-alert>
</template>
<script lang="ts">
    import { IonButton, IonAlert } from '@ionic/vue';

    export default {
        name: 'DeleteReportButton',
        components: { 
            IonAlert, 
            IonButton 
        },
        props: {
            onDelete: {
                type: Function
            },                              // Functie van parent waarbij inspectie wordt verwijderd
            selectedInspectionId: {
                type: Number
            }                               // Id van de te verwijderende inspectie
        },
        data() {
            return {
                alertButtons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => {                // Als er op Ok wordt geklikt roep de verwijder functie aan uit props
                            this.onDelete(this.selectedInspectionId);
                        }
                    },
                ],
            }
        },
    };

</script>
<style scoped>
    ion-button {
        height: 40px;
        width: 100%;
    }
    ion-button.delete {
        --background: red;
    }
</style>