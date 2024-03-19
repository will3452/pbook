<script setup>
    const folders = ref([])
    const { photographer_id } = defineProps(['photographer_id']) 

    useAsyncData(async () => {
        await loadFolders()
    })

    async function loadFolders () {
        folders.value = await $fetch('/api/folders', { query: {
            photographer_id: photographer_id, 
        }})
    }
</script>
<template>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-8 mt-4">
            <div v-for="f in folders" :key="f.id" class="mx-2 cursor-pointer" @click="navigateTo('/works/' + f.id)">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-300 mx-auto" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M448 480H64c-35.3 0-64-28.7-64-64V192h512v224c0 35.3-28.7 64-64 64m64-320H0V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8h160c35.3 0 64 28.7 64 64"/></svg>
                <div class="text-center truncate">
                    {{ f.name }}
                </div>
            </div>
        </div>
</template>