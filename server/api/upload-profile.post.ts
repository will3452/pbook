import useDatabase from '~/composables/useDatabase'; 
const client = useDatabase()
export default defineEventHandler(async (event) => {
    const formData = await readFormData(event);
    const user_id = formData.get('user_id');
    const file = formData.get('file');
    const { data } = await client.storage.from(`pbook`).upload(`users/${user_id}`, file, { upsert: true}); 
    let { data:image } = await client.storage.from('pbook').getPublicUrl(data.path); 
    let response = await client.from('users').update({image: image.publicUrl, }).eq('id', user_id); 
    return response; 
}); 
