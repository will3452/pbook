<template>
    <div class="flex justify-between mb-4 items-center" v-for="service in services" :key="service.name">
            <ProfileServiceItem :service="service"/>
            <a href="#" @click.prevent="navigateTo('/profile/1/reserve')" class="p-2 rounded bg-[#f0f2ef]">Book now</a>
        </div>
</template>

<script setup>
    const { services } = defineProps(['services'] )
</script>