<script setup>
const showMenu = ref(false)
const { data, status, signOut } = useAuth()

const menus = computed(() => {
    const _menu = [{path:'/', name: 'Home'},];
    try {
        if (data.value.data.type == 'CLIENT') {
            _menu.push({path: '/photographers', name: 'Photographers'})
            _menu.push({path: '/my-bookings', name: 'My Bookings'})
        } else if (data.value.data.type == 'PHOTOGRAPHER') {
            _menu.push({path: '/my-request-bookings', name: 'My Booking Request'})
            _menu.push({path: '/my-portfolio', name: 'My Portfolio'})
        } else if (data.value.data.type == 'ADMINISTRATOR') {
            _menu.push({path: '/photographers', name: 'Photographers'})
        }

        return _menu; 
    } catch (error) {
        return _menu; 
    }
})


</script>

<template>
    <div class="flex bg-[#f0f2ef] items-center px-2 py-4 ">
        <div class="md:max-w-[900px] md:mx-auto flex justify-between items-center w-full">
            <img src="/ologo.png" class="w-32 h-16 object-cover" alt="">
            <div class="hidden md:block font-serif">
                <a href="javascript:;" v-for="i in menus" @click.prevent="navigateTo(i.path)" :class="{ 'underline': $route.path == i.path}" class="ml-4">
                    {{ i.name }} <span class="text-xs" v-if="i.count">({{ i.count }})</span>
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
        <a href="javascript:;" v-for="i in menus" :key="i.path" @click.prevent="navigateTo(i.path); showMenu = false"
            class="block p-2 text-xl font-serif text-center hover:underline">{{i.name}}</a>
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