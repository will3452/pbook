<script setup>
    const newFolder = ref(false)
    const folderName = ref('')
    const folders = ref([])
    const { data } = useAuth()
    const photographer_id = computed( () => {
        return data.value.data.photographers[0].id; 
    })

    useAsyncData(async () => {
        await loadFolders()
    })

    async function loadFolders () {
        folders.value = await $fetch('/api/folders', { query: {
            photographer_id: photographer_id.value, 
        }})
    }

    async function onSaveFolder() {
        try {
            await $fetch('/api/folders', {
                body: {
                    photographer_id: photographer_id.value, 
                    name: folderName.value,
                },
                method: 'POST', 
            })
            alert('Folder has been saved!')
            newFolder.value = false; 
            await loadFolders()
        } catch (error) {
            alert('Folder not saved, please contact the administrator.')
        } finally {
            folderName.value = ''
        }
    }
</script>
<template>
    <div class="flex justify-between mb-2 mt-4">s
            <div class="flex">
                <button class="underline" @click="newFolder = true">Create New Folder</button>
            </div>
        </div>
        <div class="border p-2 relative" v-if="newFolder">
            <a href="#" @click.prevent="newFolder = false" class="block rotate-45 absolute right-2 top-1">+</a>
            <h1 class="text-xs mb-1">New Folder</h1>
            <input placeholder="Folder Name" name="name" v-model="folderName" class="border px-2"/> <button class="px-2 border" @click="onSaveFolder">Save</button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-8 mt-4">
            <div v-for="f in folders" :key="f.id" class="mx-2 cursor-pointer" @click="navigateTo('/folders/' + f.id)">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-300 mx-auto" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M448 480H64c-35.3 0-64-28.7-64-64V192h512v224c0 35.3-28.7 64-64 64m64-320H0V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8h160c35.3 0 64 28.7 64 64"/></svg>
                <div class="text-center truncate">
                    {{ f.name }}
                </div>
            </div>
        </div>
</template>