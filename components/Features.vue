<script setup>
    const { data } = useFetch('/api/photographers/features')    
</script>
<template>
    <div class="mx-2">
        <h1 class="text-xl font-serif md:text-center">
            Feature Photographers
        </h1>
        <FeatureProfile :data="profile" v-for="profile in data" :key="profile.id"/>
    </div>
</template>
