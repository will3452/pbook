<script setup>
    const status = ref('')
    const { data:userData } = useAuth()
    const data = ref([])

    async function loadBookings () {
        data.value = await $fetch('/api/bookings/requests', {
            query: {
                photographer_id: userData.value.data.photographers[0].id,
                status: status.value, 
            },
        })
    }

    async function changeStatus(booking) {
        await $fetch('/api/bookings', {method: 'PUT', body: JSON.parse(JSON.stringify(booking))})
        alert('status has been updated!');
    }

    await loadBookings()
</script>
<template>
        <div class="mx-2 font-serif mt-2 md:max-w-[900px] md:mx-auto px-2">
            <h1 class="text-2xl mb-2 font-serif flex justify-between">
                <span>
                    My Booking Requests
                </span>
                <select name="" id="" class="border" v-model="status" @change="loadBookings">
                    <option value="">
                        All
                    </option>
                    <option value="FOR CONFIRMATION">
                        For Confirmation
                    </option>
                    <option value="CONFIRMED">
                        Confirmed
                    </option>
                    <option value="DONE">
                        Done
                    </option>
                </select>
            </h1>

            <div class="p-4 border md:flex justify-between mb-2" v-for="booking in data">
                <div class="md:flex items-center">
                    <img class="mx-auto w-16 h-16 rounded" :src="`https://ui-avatars.com/api/?name=${booking.users.name}`" alt="">
                    <div class="text-center md:text-left ml-2 w-full">
                        <h2>
                            {{ booking.users.name }} | {{ booking.users.email }} | {{ booking.users.phone }}
                        </h2>
                        <div class="font-bold">
                            {{ booking.status }}
                        </div>
                        <div  class="" v-if="booking.status == 'CONFIRMED' && booking.proof_of_payment">
                            <a target="_blank" class="underline" :href="booking.proof_of_payment">View Proof Of Payment</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="text-center md:text-right">
                        Service: {{ booking.services ? booking.services.name: '---' }}
                    </div>
                    <div class="text-center md:text-right">
                        Date: {{ booking.booked_date }}
                    </div>
                    <div class="text-center md:text-left">
                        <div>
                            <select class="p-1 border mr-2 rounded" v-model="booking.status">
                                <option value="CONFIRMED">Confirmed</option>
                                <option value="REJECTED">Reject</option>
                                <option value="DONE">Done</option>
                            </select>
                            <button class="bg-[#f0f2ef] rounded p-1 mr-2" @click="changeStatus(booking)">
                                Save Status
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>