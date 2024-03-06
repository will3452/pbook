<script setup>
    const { data } = defineProps(['data'])
</script>
<template>
    <div class="flex m-2 p-2 font-serif items-center justify-between md:max-w-[800px] md:mx-auto">
        <div class="flex">
            <img class="w-16 h-16 rounded" :src="data.photographers.image ? data.photographers.image : `https://ui-avatars.com/api/?name=${data.photographers.first_name}+${data.photographers.last_name}`" alt="">
            <div  class="ml-2">
                <h1>Reference: {{ data.reference}}</h1>
                <h2 class="text-sm">Name: {{ data.photographers.first_name}} {{  data.photographers.last_name }}, Email: {{ data.photographers.email }} </h2>
                <div>
                    Service Category: {{  data.services.name  }}, Scheduled Date: {{ data.booked_date}}
                </div>
            </div>
        </div>
        <div>
            <div class="rounded-md p-2 border text-xs" :class="{'bg-gray-200': data.status == 'FOR CONFIRMATION', 'bg-green-200': data.status == 'APPROVED'}">
                {{ data.status}}
            </div>
            <!-- <a href="" @click.prevent="navigateTo('/profile/' + data.photographers.id)" class="bg-[#f0f2ef] rounded p-2">Visit Profile</a> -->
        </div>
    </div>
</template>