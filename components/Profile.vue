<script setup>
    const { data } = defineProps(['data'])
</script>
<template>
    <div class="flex m-2 p-2 font-serif items-center justify-between md:max-w-[900px] md:mx-auto">
        <div class="flex">
            <img class="w-32 h-32 rounded" :src="data.image ? data.image : `https://ui-avatars.com/api/?name=${data.first_name}+${data.last_name}`" alt="">
            <div  class="ml-4">
                <h1 class="text-2xl">{{ data.first_name }} {{ data.last_name }}</h1>
                <h2 class="text-base">{{ data.email }}</h2>
                <div class="mt-2 flex">
                    <!-- <a href="" class="bg-[#f0f2ef] rounded text-base text-center p-2 inline-block">Share Profile</a> -->
                    <div class="mr-2" v-for="s in ['facebook', 'twitter', 'linkedin']">
                        <SocialShare :network="s" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>