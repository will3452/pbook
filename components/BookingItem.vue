<script setup>
    const { data } = defineProps(['data'])
    const file = ref(null)
    async function onChange(e) {
        let file = e.target.files[0]
        if (! file) return 
        let fd = new FormData()
        fd.append("file", file)
        fd.append('id', data.id)
        await $fetch('/api/upload-pop', {body: fd, method: 'POST'})
    }
</script>
<template>
    <div class="md:flex m-2 p-2 font-serif items-center justify-between md:max-w-[900px] md:mx-auto">
        <div class="flex">
            <img class="w-16 h-16 rounded" :src="data.photographers.image ? data.photographers.image : `https://ui-avatars.com/api/?name=${data.photographers.first_name}+${data.photographers.last_name}`" alt="">
            <div  class="ml-2">
                <h1>Reference: {{ data.reference}}</h1>
                <h2 class="text-xs">Name: {{ data.photographers.first_name}} {{  data.photographers.last_name }}, Email: {{ data.photographers.email }} </h2>
                <div>
                    Service Category: {{  data.services.name  }}, Scheduled Date: {{ data.booked_date}}
                </div>
            </div>
        </div>
        <div>
            <div class="mb-2" v-if="data.status == 'CONFIRMED' && ! data.proof_of_payment">
                <div class="text-xs">
                    Please upload proof of payment.
                </div>
                <input type="file" @change="onChange"/>
            </div>
            <div v-if="data.proof_of_payment" class="text-center">
                <a class="underline" target="_blank" :href="data.proof_of_payment">View File</a>
            </div>
            <div class="text-center rounded-md p-2 border text-xs" :class="{'bg-gray-200': data.status == 'FOR CONFIRMATION', 'bg-green-200': data.status == 'APPROVED'}">
                {{ data.status}}
            </div>
            <!-- <a href="" @click.prevent="navigateTo('/profile/' + data.photographers.id)" class="bg-[#f0f2ef] rounded p-2">Visit Profile</a> -->
        </div>
    </div>
</template>