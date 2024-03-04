<template>
    <div class="columns-2 md:columns-4 gap-1">
        <img @click.prevent="navigateTo(`https://picsum.photos/seed/${i}/${(Math.floor(Math.random() * 2) + 1) * 100}/100`, {external: true})" :src="`https://picsum.photos/seed/${i}/${(Math.floor(Math.random() * 2) + 1) * 100}/100`" v-for="i in 8" class="w-full aspect-ratio p-2 rounded-xl object-cover" :key="i">
    </div>

</template>
