<template>
    <div class="flex m-2 p-2 font-serif items-center justify-between md:max-w-[800px] md:mx-auto">
        <div class="flex">
            <img class="w-16 h-16 rounded" src="https://picsum.photos/200" alt="">
            <div  class="ml-2">
                <h1>Ruben Roxas</h1>
                <h2 class="text-sm">rubenroxas@gmail.com</h2>
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0"/></svg> 1.k
                </div>
            </div>
        </div>
        <div>
            <a href="" @click.prevent="navigateTo('/profile/1')" class="">Visit Profile</a>
        </div>
    </div>
</template>