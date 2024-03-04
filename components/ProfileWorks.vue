<template>
    <div v-if="currentImage" class="w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-white">
        <svg @click.prevent="currentImage = null" class="cursor-pointer absolute top-4 right-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        <img :src="currentImage" alt="" class="w-full max-w-[400px]">
    </div>
    <div class="columns-2 md:columns-4 gap-1">
        <img @click.prevent="viewImage(`https://picsum.photos/seed/${i}/${(Math.floor(Math.random() * 2) + 1) * 100}/100`)" :src="`https://picsum.photos/seed/${i}/${(Math.floor(Math.random() * 2) + 1) * 100}/100`" v-for="i in 8" class="w-full aspect-ratio p-2 rounded-xl object-cover" :key="i">
    </div>

</template>

<script setup>
    const currentImage = ref(null)
    function viewImage(image) {
        currentImage.value = image; 
    }
</script>
