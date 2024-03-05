
<script setup>

    const route = useRoute()
    const { data } = await useFetch(`/api/photographers/${route.params.id}`)
    const service = computed(() => {
        return data.value.photographer_services.find( e => e.id == route.params.serviceId)
    })
</script>
<template>
    <div class="md:max-w-[800px] md:mx-auto px-2 font-serif">
        <BackButton/>
        <h1 class="text-2xl mb-2 font-serif mt-4 mb-2 border-b-2 pb-4 border-dashed">
            Booking Form
        </h1>
        <div>
            <ProfileServiceItem :service="service"/>
            <input type="date" class="p-2 rounded border mt-4 w-full">
        </div>
        <div class="italic font-thin my-4">
            Our system will email you once your booking's approved.
        </div>
        <div class="mt-4 w-full p-4 bg bg-[#f0f2ef] text-center rounded-md font-bold">
            <button>SUBMIT</button>
        </div>
    </div>
</template>
