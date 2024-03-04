<script setup>
    const showMenu = ref(false)
</script>
<template>
    <div class="flex justify-between bg-[#f0f2ef] items-center px-2 py-4">
        <img src="/logo.jpg" class="w-16 h-16" alt="">
        <div class="hidden md:block font-serif">
            <a href="javascript:;" @click.prevent="navigateTo('/')" class="ml-4">
                Home
            </a>
            <a href="javascript:;" @click.prevent="navigateTo('/photographers')" class="ml-4">
                Photographers
            </a>
            <a href="javascript:;" @click.prevent="navigateTo('/')" class="ml-4">
                My Bookings
            </a>
            <a href="javascript:;" @click.prevent="navigateTo('/')" class="ml-4">
                About Us
            </a>
        </div>
        <svg @click="showMenu = ! showMenu" class="md:hidden block cursor-pointer" v-if="! showMenu" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg @click="showMenu = ! showMenu" class="md:hidden block cursor-pointer" v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 19.5l15-15m-15 0l15 15"/></svg>
    </div>
    <div v-if="showMenu">
        <a href="javascript:;" @click.prevent="navigateTo('/'); showMenu = false" class="block p-2 text-xl font-serif text-center hover:underline">Home</a>
        <a href="#" @click.prevent="navigateTo('/photographers'); showMenu = false" class="block p-2 text-xl font-serif text-center hover:underline">Photographers</a>
        <a href="#" class="block p-2 text-xl font-serif text-center hover:underline">My Bookings</a>
        <a href="#" class="block p-2 text-xl font-serif text-center hover:underline">About us</a>
    </div>
</template>