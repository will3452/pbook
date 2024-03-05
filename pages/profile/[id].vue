
<script setup>
    import ProfileServices from '~/components/ProfileServices.vue';
    const route = useRoute()
    const { data } = await useFetch(`/api/photographers/${route.params.id}`)
</script>
<template>
    <Profile :data="data" />
    <div class="mx-2 font-serif md:max-w-[800px] md:mx-auto">
        <h1 class="text-base border-l-8  pl-4 mb-2">{{ data.bio || 'No Bio Found.' }}</h1>
        <h1 class="text-2xl mb-2 font-serif">
            {{data.first_name}}'s Services
        </h1>
        <ProfileServices :services="data.photographer_services"/>
        <h1 class="text-2xl mb-2 font-serif">
            {{data.first_name}}'s Works
        </h1>
        <ProfileWorks />
        <h1 class="text-2xl mb-2 font-serif">
            Customer Feedback
        </h1>
        <ProfileFeedback />
    </div>
    
</template>