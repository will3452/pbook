<script setup>
    const credentials = ref({
        email: '',
        password:''
    }) 
    async function onLogin () {
        let data = await $fetch('/api/auth/login', {method: 'POST', body: credentials.value});
        if (! data.user) {
            alert('No user found!')
            return; 
        }
        navigateTo('/'); 
    }
</script>
<template>
    <div class="md:max-w-[800px] md:mx-auto flex font-serif justify-between items-center w-full">
        <form @submit.prevent="onLogin" class="w-full my-4 px-4">
            <div>
                Email
            </div>
            <input type="email" v-model="credentials.email" class="border-2  w-full block px-2 p-1" placeholder="Enter email address.">
            <div class="mt-4">
                Password
            </div>
            <input type="password" v-model="credentials.password" class="border-2  w-full block px-2 p-1" placeholder="Enter email address.">
            <button type="submit" class="mt-4 bg-[#f0f2ef] p-2 px-4 rounded">
                Login
            </button>
        </form>
    </div>
</template>