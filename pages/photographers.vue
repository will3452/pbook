<script setup>
    const limit = ref(5)
    const search = ref('')
    const { data:userData } = useAuth()
    const { data } = await useFetch(`/api/photographers`, { query: { limit, search }});
    const { data:count } = await useFetch('/api/photographers/approval-counts',); 
    
    definePageMeta({
        auth: false, 
    })
</script>
<template>
    <div class="mx-2 font-serif mt-2 md:max-w-[800px] md:mx-auto">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl mb-2 font-serif">
                Search Photographers
            </h1>
            <a href="#" v-if="userData && userData.data && (userData.data.type == 'ADMINISTRATOR')" @click.prevent="navigateTo('/for-approvals')" class="flex underline items-center">View Approval Request <div class="bg-black inline-block w-6 h-6 ml-2 text-white flex items-center justify-center text-xs">{{ count }}</div> </a>
        </div>
        <input type="search" v-model="search" class="p-2 w-full border" placeholder="Search by Name">
        <FeatureProfile v-for="record in data" :data="record" :key="record.id"/>
        <div class="my-4" v-if="! data.length">No Data found.</div>
        <button class="underline" @click="limit+=5" v-if="limit <= data.length">View More</button>
    </div>
</template>