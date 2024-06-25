<script setup lang="ts">

const notifyPermit = ref(false);

let registration:ServiceWorkerRegistration;

onMounted(async () => {
    navigator.serviceWorker.register('/hello-sw.js');

    const res = await Notification.requestPermission();
    if (res === 'granted') {
        notifyPermit.value = true;
        registration = await navigator.serviceWorker.ready;

    }else{
        notifyPermit.value = false;
    }

});


const notify = ()=>{
    //const notify = new Notification('Hello');

    registration.showNotification('Hello');
}

</script>

<template>
    <h1>Test Notification</h1>
    <div>Permit: {{ notifyPermit? 'YES':'NO' }}</div>
    <div v-if="notifyPermit">
        <button @click="notify">Notify</button>
    </div>
</template>