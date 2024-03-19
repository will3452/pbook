import useDatabase from '~/composables/useDatabase'; 
const client = useDatabase()
export default defineEventHandler(async (event) => {
    const formData = await readFormData(event);
    const folder_id = formData.get('folder_id');
    const file = formData.get('file');
    const { data } = await client.storage.from(`pbook`).upload(`works/${file.name}`, file, { upsert: true}); 
    let { data:uploadedFile } = await client.storage.from('pbook').getPublicUrl(data.path); 
    let response = await client.from('works').insert({file: `${uploadedFile.publicUrl}?v=${Date.now()}`, folder_id})
    return response; 
}); 
