<script setup>
    const limit = ref(5)
    const search = ref('')
    const { data } = await useFetch(`/api/photographers`, { query: { limit, search }});
</script>
<template>
    <div class="mx-2 font-serif mt-2 md:max-w-[800px] md:mx-auto">
        <h1 class="text-2xl mb-2 font-serif">
            Search Photographers
        </h1>
        <input type="search" v-model="search" class="p-2 w-full border" placeholder="Search by Name">
        <FeatureProfile v-for="record in data" :data="record" :key="record.id"/>
        <div class="my-4" v-if="! data.length">No Data found.</div>
        <button class="underline" @click="limit+=5" v-if="limit <= data.length">View More</button>
    </div>
</template>