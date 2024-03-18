<script setup>
    const { data } = defineProps(['data'])
</script>
<template>
    <div class="flex m-2 p-2 font-serif items-center justify-between md:max-w-[900px] md:mx-auto">
        <div class="flex">
            <img class="w-16 h-16 rounded" :src="data.image ? data.image : `https://ui-avatars.com/api/?name=${data.first_name}+${data.last_name}`" alt="">
            <div  class="ml-2">
                <h1 class="text-xl">{{ data.first_name}} {{  data.last_name }}</h1>
                <h2 class="text-base">{{ data.email }} </h2>
            </div>
        </div>
        <div class="flex flex-wrap">
            <a href="" @click.prevent="navigateTo('/profile/' + data.id)" class="bg-[#f0f2ef] rounded p-2 mr-2">View Profile</a>
            <slot name="some-actions"></slot>
        </div>
    </div>
</template>