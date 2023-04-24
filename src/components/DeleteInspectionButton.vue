<template>
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
        name: 'DeleteInspection',
        props: {
            onDelete: Function,
            selectedInspectionId: Number
        },
        components: { IonAlert, IonButton },
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
                        handler: () => {
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