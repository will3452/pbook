<script setup>
    const credentials = ref({
        email: '',
        password:''
    }) 
    const { signUp } = useAuth(); 
    async function onRegister () {
        try {
            const data = await signUp(credentials.value, { callbackUrl: '/' });
            console.log('data -> ', data) 
        } catch (error) {
            console.log(error)
            alert('User not found.')
        }
    }
    definePageMeta({
        auth: {
            unauthenticatedOnly: true,
            navigateAuthenticatedTo: '/',
        }
    })
</script>
<template>
    <div class="md:max-w-[800px] md:mx-auto flex font-serif justify-between items-center w-full">
        <form @submit.prevent="onRegister" class="w-full my-4 px-4">
            <div  class="mt-4">
                Register as:
                <div class="flex items-center">
                    <input type="radio" v-model="credentials.type" value="CLIENT" name="type"/> Client <input class="ml-4" type="radio" v-model="credentials.type" value="PHOTOGRAPHER" name="type"/> Photographer
                </div>
            </div>
            <div  class="mt-4">
                Full Name
            </div>
            <input type="text" v-model="credentials.name" class="border-2  w-full block px-2 p-1" placeholder="Enter Full Name.">
            <div class="mt-4">
                Mobile Phone
            </div>
            <input type="text" v-model="credentials.phone" class="border-2  w-full block px-2 p-1" placeholder="Enter email address.">
            <div class="mt-4">
                Password
            </div>
            <div class="mt-4">
                Email
            </div>
            <input type="email" v-model="credentials.email" class="border-2  w-full block px-2 p-1" placeholder="Enter email address.">
            <div class="mt-4">
                Password
            </div>
            <input type="password" v-model="credentials.password" class="border-2  w-full block px-2 p-1" placeholder="Enter password.">
            <button type="submit" class="mt-4 bg-[#f0f2ef] p-2 px-4 rounded">
                Register
            </button>
        </form>
    </div>
</template>