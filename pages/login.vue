<script setup>
    import { useReCaptcha } from 'vue-recaptcha-v3';
    const recaptchaInstance = useReCaptcha();

    const recaptcha = async () => {
        // optional you can await for the reCaptcha load
        await recaptchaInstance?.recaptchaLoaded();

        // get the token, a custom action could be added as argument to the method
        const token = await recaptchaInstance?.executeRecaptcha('yourActionHere');

        return token;
    };

    const credentials = ref({
        email: '',
        password:''
    }) 
    const { signIn } = useAuth(); 
    async function onLogin () {
        try {
            const token = await recaptcha();
            await signIn(credentials.value, { callbackUrl: '/'}); 
        } catch (error) {
            console.log(error)
            alert('User not found.')
        }
    }
</script>
<template>
    <div class="md:max-w-[800px] md:mx-auto flex font-serif justify-between items-center w-full">
        <form @submit.prevent="onLogin" class="w-full my-4 px-4">
            <div>
                Email
            </div>
            <input type="email" v-model="credentials.email" class="border-2  w-full block px-2 p-1" placeholder="Enter email address.">
            <div class="mt-4">
                Password
            </div>
            <input type="password" v-model="credentials.password" class="border-2  w-full block px-2 p-1" placeholder="Enter password.">
            <button type="submit" class="mt-4 bg-[#f0f2ef] p-2 px-4 rounded">
                Login
            </button>
        </form>
    </div>
</template>