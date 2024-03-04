<template>
    <Profile />
    <div class="mx-2 font-serif md:max-w-[800px] md:mx-auto">
        <h1 class="text-base border-l-8  pl-4 mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, nisi. Mollitia, pariatur nesciunt. Illo numquam excepturi quia ullam tempora! Ratione?</h1>
        <h1 class="text-2xl mb-2 font-serif">
            Ruben's Services
        </h1>
        <ProfileServices :services="services"/>
        <h1 class="text-2xl mb-2 font-serif">
            Ruben's Works
        </h1>
        <ProfileWorks />
        <h1 class="text-2xl mb-2 font-serif">
            Customer Feedback
        </h1>
        <ProfileFeedback />
    </div>
    
</template>

<script setup>
import ProfileServices from '~/components/ProfileServices.vue';

    const services = [
        {
            name: 'Wedding',
            price: '₱15,000.00',
            category: 'event', 
            inclusions: ['Free Mugs', 'T-Shirt Print'], 
            schedules: ['Mon, Tue, Wed'], 
        }, 
        {
            name: 'Birthday',
            price: '₱10,000.00',
            category: 'event', 
            inclusions: ['Photo booth', ], 
            schedules: ['Mon, Tue, Wed'], 
        }, 
        {
            name: 'Others',
            price: '₱14,000.00',
            category: 'event', 
            inclusions: ['Photo booth', 'Free Mugs', 'T-Shirt Print'], 
            schedules: ['Mon, Tue'], 
        }, 
    ];
</script>