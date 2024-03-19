<script setup>

    const { status, data } = useAuth()
    const props = defineProps(['photographer_id'])
    const feedback = ref([])
    const message = ref('')
    async function loadFeedback() {
        feedback.value = await $fetch('/api/feedback', { query: { photographer_id: props.photographer_id}});
    }
    useAsyncData(async () => {
         await loadFeedback()
    })

    async function onSubmit() {
        let body = {
            user_id: data.value.data.id, 
            photographer_id: props.photographer_id, 
            message: message.value, 
        }

        try {
            await $fetch('/api/feedback', { method: 'POST', body, })
            await loadFeedback()
        } catch (error) {
            alert('Error, please ask the administrator.')
        } finally {
            message.value = ''
        }
    }
</script>
<template>
    <div class="flex items-start" v-if="status == 'authenticated'">
        <textarea placeholder="Write your feedback." v-model="message" @keyup.enter="onSubmit" class="mr-1 border w-full p-2 rounded-md mb-2" />
        <button class="p-2 rounded border bg-[#f0f2ef]" @click="onSubmit">Submit</button>
    </div>
    <div v-if="feedback.length == 0" class="mb-4">
        No feedback found.
    </div>
    <div v-for="i in feedback" class="flex mb-4" :key="i.created_at">
            <img class="w-8 h-8 rounded" :src="i.users.image ? i.users.image : `https://ui-avatars.com/api/?name=${i.users.first_name}+${i.users.last_name}`" alt="">
            <div>
                <div class="text-xs ml-2">
                    <div class="flex">
                        <div class="">
                            {{ (new Date(i.created_at)).getFullYear() }} - {{ (new Date(i.created_at).getMonth() + 1) }} - {{ ((new Date()).getDate())}}
                        </div>
                    </div>
                    <span class="font-sans">{{ i.message }}</span>
                </div>
            </div>
    </div>
</template>