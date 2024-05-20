<script setup lang="ts">
const notifyPermit = ref(false);

onMounted(async () => {
    const res = await Notification.requestPermission();
    if (res) {
        notifyPermit.value = true;
    }else{
        notifyPermit.value = false;
    }
});


const notify = ()=>{
    const notify = new Notification('Hello');
}

</script>

<template>
    <h1>Test Notification</h1>
    <div>Permit: {{ notifyPermit? 'YES':'NO' }}</div>
    <div v-if="notifyPermit">
        <button @click="notify">Notify</button>
    </div>
</template>