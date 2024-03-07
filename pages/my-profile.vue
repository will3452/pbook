<script setup>
    const { data, getSession } = useAuth()
    const newPassword = ref('')
    const showUpdate = ref(false)
    const upload = ref(null)
    const uploading = ref(false)
    async function changePassword() {
        try {
            await $fetch('/api/change-pwd', {method: 'POST', body: { newPassword: newPassword.value, user_id: data.value.data.id}})
            alert('Password has been changed!'); 
        } catch(error) {
            console.log('changePassword ', error)
            alert('Failed to change password!'); 
        }
    }
    async function fileChange (e) {
        if (e.target.files.length == 0) return; 
        const file = e.target.files[0]
        console.log(file); 
        uploading.value = true; 
        const fd = new FormData()
        fd.append('file', file, file.name); 
        fd.append('user_id', data.value.data.id); 
        console.log(fd.entries); 
        let resp = await $fetch('/api/upload-profile', { body: fd, method: 'POST'})
        console.log(resp); 
        uploading.value = false; 
        alert('Image has been uploaded, please refresh your page or press CTRL + SHIFT + R'); 
    }
</script>
<template>
    <Container class="mt-2">
        <h1 class="text-center md:text-left">
            Account Settings
        </h1>
        <span>{{ uploading ? 'Uploading ...' : '' }}</span>
        <div class="md:flex w-full mt-2">
            <img @mouseover="showUpdate = true" v-if="! showUpdate" class="md:w-32 md:h-32 w-1/2 mx-auto md:ml-0 md:mr-2 rounded-md" :src="data.data.image ? data.data.image : `https://ui-avatars.com/api/?name=${data.data.name}`"/>
            <div @click="upload.click()" v-if="showUpdate" @mouseleave="showUpdate = false" class="flex items-center justify-center bg-[#f0f2ef] cursor-pointer md:w-32 md:h-32 w-64 h-64 mx-auto md:ml-0 md:mr-2 rounded-md">
                <span>{{ uploading ? 'Uploading ...' : 'Upload' }}</span>
            </div>
            <div v-show="false">
                <input type="file" @change="fileChange" ref="upload"/>
            </div>
            <div class="md:text-left px-2 md:px-0 text-center mt-2">
                <h1 class="text-xl font-bold">
                    {{ data.data.name}} <span class="text-xs"> ( {{ data.data.type}} ) </span>
                </h1>
                <h2>
                    {{ data.data.email }}
                </h2>
                <h3>{{ data.data.phone }}</h3>
                <div>
                    <span class="text-xs mt-2">
                        New Password : 
                    </span>
                    <input class="border-b p-1 mt-2" v-model="newPassword"/> <button class="bg-[#f0f2ef] p-2 rounded text-xs" @click="changePassword">Change Password</button>
                </div>
            </div>
        </div>
    </Container>
</template>
