import useDatabase from '~/composables/useDatabase'; 
const client = useDatabase()
export default defineEventHandler(async (event) => {
    const formData = await readFormData(event);
    const id = formData.get('id');
    const file = formData.get('file');
    const { data } = await client.storage.from(`pbook`).upload(`pop/${id}`, file, { upsert: true}); 
    let { data:image } = await client.storage.from('pbook').getPublicUrl(data.path); 
    let response = await client.from('bookings').update({proof_of_payment: `${image.publicUrl}?v=${Date.now()}`, }).eq('id', id); 
    return response; 
}); 
