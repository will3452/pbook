<script setup>
    const limit = ref(5)
    const search = ref('')
    const { data:user } = useAuth()
    const { data } = await useFetch(`/api/bookings/my`, { query: { limit, search, user_id: user.value.data.id }});
</script>
<template>
    <div class="mx-2 font-serif mt-2 md:max-w-[900px] md:mx-auto">
        <h1 class="text-2xl mb-2 font-serif">
            Search Bookings
        </h1>
        <input type="search" v-model="search" class="p-2 w-full border" placeholder="Search by Reference">
         <BookingItem :data="booking" :key="booking.id" v-for="booking in data"/>
        <div class="my-4" v-if="! data.length">No Data found.</div>
        <button class="underline" @click="limit+=5" v-if="limit <= data.length">View More</button>
    </div>
</template>