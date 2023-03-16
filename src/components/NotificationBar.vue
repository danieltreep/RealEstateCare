<template>
    <div>
        <ion-icon 
            aria-hidden="true" 
            :icon="notifications" 
            size="large" 
            id="click-trigger"
          />
        <ion-popover trigger="click-trigger" triggerAction="click">
            <ng-template>
                <ion-content class="ion-padding">Hello World!</ion-content>
                <ion-content class="ion-padding">Hello World!</ion-content>
            </ng-template>
        </ion-popover>
    </div>
</template>
<script setup lang="ts">
    import { IonPopover, IonContent, IonIcon} from '@ionic/vue';
    import { notifications} from 'ionicons/icons';
</script>
