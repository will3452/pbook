<script setup>
const showMenu = ref(false)
const { data, status, signOut } = useAuth()
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
                <a href="javascript:;" @click.prevent="navigateTo('/my-bookings')" :class="{ 'underline': $route.path == '/my-bookings'}" class="ml-4">
                    My Bookings
                </a>
                <a href="javascript:;" @click.prevent="navigateTo('/')" :class="{ 'underline': $route.path == '/about'}" class="ml-4">
                    About Us
                </a>
                <template v-if="status == 'authenticated'">
                    <a href="javascript:;" @click.prevent="signOut({callbackUrl: '/login'})" :class="{ 'underline': $route.path == '/about'}" class="ml-4">
                        Logout
                    </a>
                    <a href="javascript:;" @click.prevent="navigateTo('/my-profile')" :class="{ 'underline': $route.path == '/my-profile'}" class="ml-4">
                        <img :src="data.data.image ? data.data.image : `https://ui-avatars.com/api/?name=${data.data.name}`" alt="" class="h-[32px] w-[32px]  inline-block rounded">
                    </a>
                </template>
                <template v-if="status != 'authenticated'">
                    <a href="javascript:;" @click.prevent="navigateTo('/login')" :class="{ 'underline': $route.path == '/login'}" class="ml-4">
                        Login
                    </a>
                    <a href="javascript:;" @click.prevent="navigateTo('/register')" :class="{ 'underline': $route.path == '/register'}" class="ml-4">
                        Register
                    </a>
                </template>
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
        <a href="#" @click.prevent="navigateTo('/my-bookings')" class="block p-2 text-xl font-serif text-center hover:underline">My Bookings</a>
        <a href="#" class="block p-2 text-xl font-serif text-center hover:underline">About us</a>
        <template v-if="status == 'authenticated'">
            <a href="#" @click.prevent="navigateTo('/my-profile')"  class="block p-2 text-xl font-serif text-center hover:underline">My Profile</a>
            <a href="#" @click.prevent="signOut({callbackUrl: '/login'})"  class="block p-2 text-xl font-serif text-center hover:underline">Logout</a>
        </template>
        <template v-if="status != 'authenticated'">
            <a href="#" @click.prevent="navigateTo('/login')"  class="block p-2 text-xl font-serif text-center hover:underline">Login</a>
            <a href="#"  @click.prevent="navigateTo('/register')" class="block p-2 text-xl font-serif text-center hover:underline">Register</a>
        </template>
    </div>
</template>