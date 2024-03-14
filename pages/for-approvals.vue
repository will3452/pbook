<script setup>

    const limit = ref(5)
    const search = ref('')
    const { data, refresh } = await useFetch(`/api/photographers/for-approvals`, { query: { limit, search, }});

    async function approveHandler(id) {
        try {
            await $fetch('/api/photographers/approve', { body: {id}, method: 'POST' })
            alert('Photographer has been approved!')
            refresh()
        } catch (error) {
            alert('Something went wrong!')
        }
    }
</script>
<template>
    <div class="mx-2 font-serif mt-2 md:max-w-[800px] md:mx-auto">
        <h1 class="text-2xl mb-2 font-serif">
            For Approvals
        </h1>
        <input type="search" v-model="search" class="p-2 w-full border" placeholder="Search by Name">
        <FeatureProfile v-for="record in data" :data="record" :key="record.id">
            <template #some-actions>
                <button  class="bg-[#f0f2ef] rounded p-2 mr-2" @click="approveHandler(record.id)">
                    Approve
                </button>
            </template>
        </FeatureProfile>
        <div class="my-4" v-if="! data.length">No Data found.</div>
        <button class="underline" @click="limit+=5" v-if="limit <= data.length">View More</button>
    </div>
</template>