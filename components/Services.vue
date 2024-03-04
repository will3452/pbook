<script setup>
    import useApi from '~/composables/useApi'; 
    const sb = useApi()

    const services = ref([])

    async function getServices() {
        const { data } = await sb.from('services').select()
        services.value = data;
    }

    onMounted(() => {
        getServices()
    })
</script>
<template>
    
    <div class="mx-2 mb-2">
        <h1 class="text-xl font-serif md:text-center">
                Our Services
        </h1>
    </div>
    <div class="font-serif text-xs w-full mb-2 overflow-x-auto  overflow-y-hidden flex w-screen pl-4 md:justify-center">
        <div v-for="service in services" :key="service.id" class="flex-none h-[150px] w-[200px] mr-2 cursor-pointer" >
            <img :src="service.image" class="w-full h-[125px] object-fit" alt="">
            <h1 class="w-full bg-black text-white px-2 py-1">{{ service.name }}</h1>
        </div>
    </div>
</template>