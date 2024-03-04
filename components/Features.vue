<template>
    <div class="mx-2">
        <h1 class="text-xl font-serif md:text-center">
            Feature Photographers
        </h1>
        <FeatureProfile v-for="profile in profiles" :key="profile.id"/>
    </div>
    {{ profiles }}
</template>

<script setup>
    import useApi from '~/composables/useApi'
    const sb = useApi()

    const profiles = ref([])

    async function getProfiles() {
        const { data } = await sb.from('photographers').select()
        profiles.value = data; 
    }

    onMounted(() => {
        getProfiles()
    })
</script>