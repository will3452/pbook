<template>
    <div class="flex items-start">
        <textarea placeholder="Write your feedback." class="mr-1 border w-full p-2 rounded-md mb-2" />
        <button class="p-2 rounded border bg-[#f0f2ef]">Submit</button>
    </div>
    <div v-for="i in 5" class="flex" :key="i">
            <img :src="`https://picsum.photos/seed/${i}/200`" alt="" class="w-10 rounded mb-4">
            <div>
                <div class="text-xs ml-2">
                    <div class="flex">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0"/></svg> 5
                        </div>
                        <div class="ml-2">
                            March 03, 2024
                        </div>
                    </div>
                    <span class="font-sans">Lorem ipsum dolor, sit amet consectetur adipisicing elit</span>
                </div>
            </div>
        </div>
</template>