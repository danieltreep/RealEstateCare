<template>
    <!-- Notificatie popover -->
    <div>
        <ion-icon 
            aria-hidden="true" 
            :icon="notifications" 
            size="large" 
            id="click-trigger"
        />
        <ion-popover 
            trigger="click-trigger" 
            trigger-action="click"
        >
            <ion-content class="ion-padding">Er zijn geen nieuwe notificaties</ion-content>
        </ion-popover>
    </div>
</template>
<script lang="ts">
    import { IonPopover, IonContent, IonIcon} from '@ionic/vue';
    import { notifications} from 'ionicons/icons';

    export default {
        name: 'NotificationBar',
        components: {
            IonPopover, 
            IonContent, 
            IonIcon
        },
        data() {
            return {
                notifications
            }
        }
    }
</script>
