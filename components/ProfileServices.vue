
<script setup>
    const { services } = defineProps(['services'] )
</script>
<template>
    <div v-if="! services.length" class="mb-4"> No Service Offered.</div>
    <div class="flex justify-between mb-4 items-center" v-for="service in services" :key="service.name">
            <ProfileServiceItem :service="service"/>
            <a href="#" @click.prevent="navigateTo(`/profile/${$route.params.id}/reserve/${service.id}`)" class="p-2 rounded bg-[#f0f2ef]">Book now</a>
        </div>
</template>
