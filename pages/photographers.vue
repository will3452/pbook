<template>
    <div class="mx-2 font-serif mt-2 md:max-w-[800px] md:mx-auto">
        <h1 class="text-2xl mb-2 font-serif">
            Search Photographers
        </h1>
        <input type="search" class="p-2 w-full border" placeholder="Search by Name">
        <FeatureProfile v-for="i in 20" :key="i"/>
    </div>
</template>