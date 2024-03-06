
<script setup>

    const route = useRoute()
    const { data:userData } = useAuth()
    const { data } = await useFetch(`/api/photographers/${route.params.id}`)
    const service = computed(() => {
        return data.value.photographer_services.find( e => e.id == route.params.serviceId)
    })

    const payload = ref({})

    async function onBook() {
        try {
            let _payload = {
                user_id: userData.value.data.id, 
                booked_date: payload.value.booked_date, 
                service_id: route.params.serviceId, 
                status: 'FOR CONFIRMATION',
                photographer_id: route.params.id, 
            }

            let data = await $fetch('/api/bookings', { body: _payload, method: 'POST'}); 
            alert('Booking has been submitted!'); 
            navigateTo('/my-bookings'); 
        } catch(error) {
            alert('Booking failed!')
        }
    }
</script>
<template>
    <div class="md:max-w-[800px] md:mx-auto px-2 font-serif">
        <BackButton/>
        <h1 class="text-2xl mb-2 font-serif mt-4 mb-2 border-b-2 pb-4 border-dashed">
            Booking Form
        </h1>
        <div>
            <ProfileServiceItem :service="service"/>
            <input v-model="payload.booked_date" type="date" class="p-2 rounded border mt-4 w-full">
        </div>
        <div class="italic font-thin my-4">
            Our system will email you once your booking's approved.
        </div>
        <div class="mt-4 w-full p-4 bg bg-[#f0f2ef] text-center rounded-md font-bold">
            <button @click="onBook">SUBMIT</button>
        </div>
    </div>
</template>
