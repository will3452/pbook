<script setup>
    const services = [
        {
            id: 1, 
            name: 'Portrait', 
            image: 'https://picsum.photos/seed/portrait/300/200',
            description: 'Capturing the essence and personality of individuals or groups.'
        },
        {
            id: 5, 
            name: 'Event', 
            image: 'https://picsum.photos/seed/event/300/200',
            description: 'Capturing the dynamic moments of various occasions and gatherings. '
        },
        {
            id: 4, 
            name: 'Commercial', 
            image: 'https://picsum.photos/seed/products/300/200',
            description: 'Creating images for business and marketing purposes.'
        },
        {
            id: 3,
            name: 'Real Estate',
            image: 'https://picsum.photos/seed/real-estate/300/200',
            description: 'Capturing properties in the most visually appealing way to attract potential buyers or renters.', 
        },
    ]; 
</script>
<template>
    
    <div class="mx-2 mb-2">
        <h1 class="text-xl font-serif md:text-center">
                Our Services
        </h1>
    </div>
    <div class="font-serif text-xs w-full mb-2 overflow-x-auto  overflow-y-hidden flex w-screen pl-4 md:justify-center">
        <div v-for="service in services" :key="service.id" class="flex-none h-[150px] w-[200px] mr-2 cursor-pointer" >
            <img :src="service.image" class="w-full h-[125px] object-fit" alt="">
            <h1 class="w-full bg-black text-white px-2 py-1">{{ service.name }}</h1>
        </div>
    </div>
</template>