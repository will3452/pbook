import useDatabase from "~/composables/useDatabase";

const client = useDatabase(); 

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    delete body.users 
    delete body.services 
    body.updated_at = new Date()
    let rd = await client.from('bookings').update(body).eq('id', body.id); 
    console.log("rd -> ", rd); 
    return rd; 
})