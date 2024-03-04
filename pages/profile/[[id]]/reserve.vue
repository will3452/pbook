<template>
    <div class="md:max-w-[800px] md:mx-auto px-2">
        <BackButton/>
        <h1 class="text-2xl mb-2 font-serif mt-4 mb-2 border-b-2 pb-4 border-dashed">
            Booking Form
        </h1>
        <div>
            <ProfileServiceItem :service="service"/>
            <input type="date" class="p-2 rounded border mt-4 w-full">
        </div>
        <div class="mt-4 w-full p-4 bg bg-[#f0f2ef] text-center rounded-md font-bold text-gray-500">
            <button>SUBMIT</button>
        </div>
    </div>
</template>

<script setup>
    const service = {
            name: 'Wedding',
            price: '₱15,000.00',
            category: 'event', 
            inclusions: ['Free Mugs', 'T-Shirt Print'], 
            schedules: ['Mon, Tue, Wed'], 
        }; 
</script>