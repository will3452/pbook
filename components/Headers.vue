<script setup>
const showMenu = ref(false)
const { data } = await useFetch('/api/auth/session')
</script>

<template>
    <div class="flex bg-[#f0f2ef] items-center px-2 py-4 ">
        <div class="md:max-w-[800px] md:mx-auto flex justify-between items-center w-full">
            <img src="/ologo.png" class="w-32 h-16 object-cover" alt="">
            <div class="hidden md:block font-serif">
                <a href="javascript:;" @click.prevent="navigateTo('/')" :class="{ 'underline': $route.path == '/'}" class="ml-4">
                    Home
                </a>
                <a href="javascript:;" @click.prevent="navigateTo('/photographers')" :class="{ 'underline': $route.path == '/photographers'}" class="ml-4">
                    Photographers
                </a>
                <a href="javascript:;" @click.prevent="navigateTo('/')" :class="{ 'underline': $route.path == '/bookings'}" class="ml-4">
                    My Bookings
                </a>
                <a href="javascript:;" @click.prevent="navigateTo('/')" :class="{ 'underline': $route.path == '/about'}" class="ml-4">
                    About Us
                </a>
                <a href="javascript:;" @click.prevent="navigateTo('/login')" :class="{ 'underline': $route.path == '/login'}" class="ml-4">
                    Login
                </a>
                <a href="javascript:;" @click.prevent="navigateTo('/')" :class="{ 'underline': $route.path == '/register'}" class="ml-4">
                    Register
                </a>
            </div>
            <svg @click="showMenu = !showMenu" class="md:hidden block cursor-pointer" v-if="!showMenu"
                xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg @click="showMenu = !showMenu" class="md:hidden block cursor-pointer" v-else
                xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="m4.5 19.5l15-15m-15 0l15 15" />
            </svg>
        </div>

    </div>
    <div v-if="showMenu">
        <a href="javascript:;" @click.prevent="navigateTo('/'); showMenu = false"
            class="block p-2 text-xl font-serif text-center hover:underline">Home</a>
        <a href="#" @click.prevent="navigateTo('/photographers'); showMenu = false"
            class="block p-2 text-xl font-serif text-center hover:underline">Photographers</a>
        <a href="#" class="block p-2 text-xl font-serif text-center hover:underline">My Bookings</a>
        <a href="#" class="block p-2 text-xl font-serif text-center hover:underline">About us</a>
    </div>
</template>