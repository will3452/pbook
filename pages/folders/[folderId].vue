<script setup >

    const route = useRoute()
    const folder = ref({})
    const uploadedFiles = ref([])
    async function loadFolder() {
        folder.value = await $fetch('/api/folders/' + route.params.folderId)
    }
    useAsyncData(async () => {
        await loadFolder()
    })
    const input = ref(null)

    const files = ref([])

    async function onFileChange(e) {
        files.value = e.target.files; 
        for (let f of files.value) {
            try {
                const fd = new FormData()
                fd.append('file', f, f.name)
                fd.append('folder_id', `${route.params.folderId}`)
                await $fetch('/api/upload-works', {
                    body: fd, 
                    method: 'POST'
                })
                
                uploadedFiles.value.push(f.name)
            } catch (error) {
                alert('Failed to upload :' + f.name)
            } finally {
            }
        }

        await loadFolder()
        files.value = []
    }
</script>
<template>
    <div class="mx-2 font-serif mt-2 md:max-w-[900px] md:mx-auto px-2">
        <BackButton />
        <div class="flex justify-between">
            <h1 class="text-2xl mb-2 font-serif">
                {{folder.name}}
            </h1>
            <button class="border px-2" @click="input.click()">Upload file</button>
            <input type="file" @change="onFileChange" class="hidden" ref="input" multiple accept="image/*,video/*"/>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4">
            <div v-for="i in files" :key="i.name" class="flex justify-center flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-gray-500 mb-2 animate-pulse" viewBox="0 0 384 512"><path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm384 64H256V0z"/></svg>
                <div class="text-center text-xs truncate w-full">
                    {{ i.name }}
                </div>
            </div>
            <template v-for="w in folder.works" :key="w.id">
                <img v-if="w.file.includes('.jpg') || w.file.includes('.png')|| w.file.includes('.jpeg') || w.file.includes('.webp')" :src="w.file"/>
                <video v-else :src="w.file" controls/>
            </template>
        </div>
    </div>
</template>