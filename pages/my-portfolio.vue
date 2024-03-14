<script setup>

    const addNewService = ref(false)
    const { data:userData } = useAuth()
    const { data:services, refresh:refreshService } = await useFetch('/api/services', { query: { limit: 99} })
    const newService = ref({
        schedules:[]
    })

    const myServices = ref([])

    async function loadMyServices () {
        if (userData.value.data.photographers.length)
        myServices.value = await $fetch('/api/services/my-services', {query: { photographer_id: userData.value.data.photographers[0].id}})
    }

    useAsyncData(async () => {
        await loadMyServices()
    })

    async function onAddNewService() {
        try {
            newService.value.user_id = userData.value.data.id; 
            await $fetch('/api/services', {method: 'POST', body: newService.value})
            alert('New Services has been added!'); 
            await loadMyServices()
            addNewService.value = false
        } catch (error) {
            alert('Error, please contact your administrator!')
        } finally {
            newService.value = {schedules: []}
        }
    }
</script>
<template>
    <div class="mx-2 font-serif mt-2 md:max-w-[800px] md:mx-auto px-2">
        <h1 class="text-2xl mb-2 font-serif">
            My Portfolio
        </h1>
        <div class="border-t-2 border-dashed mb-4"></div>
        
        <div class="flex justify-between mb-2">
            <h1>My Service(s)</h1>
            <button class="underline" @click="addNewService = ! addNewService">{{ ! addNewService ? 'Add New': 'Cancel' }} </button>
        </div>
        <div v-if="addNewService">
            <form class="p-4 shadow-md border my-4" @submit.prevent="onAddNewService">
                <h1 class="font-bold mb-4">Add new service Form</h1>
                <div class="text-xs">Service type</div>
                <select name="" id="" class="border p-2 w-full mb-2" v-model="newService.service_id">
                    <option :value="service.id" v-for="service in services" :key="service.id">
                        {{ service.name }} - {{ service.description }}
                    </option>
                </select>
                
                <div class="text-xs">Service Fee</div>
                <input type="number" v-model="newService.fee" class="border p-2 w-full  mb-2">

                <div class="text-xs">Inclusions ***separate by comma (,)***</div>
                <input type="text" v-model="newService.inclusions" class="border p-2 w-full  mb-2">

                <div class="text-xs">Schedules / Availability</div>
                <div class="flex">
                    <label :for="i" v-for="i in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" class="flex items-center mr-2">
                        <input v-model="newService.schedules" type="checkbox" :value="i" :id="i"> {{i}}
                    </label>
                </div>
                <button type="submit" class="border p-2 mt-4">
                    Submit
                </button>
            </form>
        </div>
        <table class="border w-full">
            <thead>
                <tr>
                    <th>Service</th>
                    <th>Fee</th>
                    <th>Schedule</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="service in myServices" :key="service.id">
                    <td class="border text-center">
                        {{ service.services.name }}
                    </td>
                    <td class="border text-center">
                        {{ service.fee }}
                    </td>
                    <td class="border text-center">
                        {{ service.schedules.join(', ') }}
                    </td>
                    <td class="border p-2 text-center">
                        <a class="bg-[#f0f2ef] rounded p-2 mr-2">Edit</a>
                        <a class="bg-[#f0f2ef] rounded p-2 mr-2">Remove</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>