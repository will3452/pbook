import useDatabase from "~/composables/useDatabase";

const client = useDatabase(); 

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    body.reference = "BRN" + Date.now();

    let { data } = await client.from('photographer_services').select().eq('id', body.photographer_service_id).single()
    body.service_id = data.service_id; 
    let rd = await client.from('bookings').insert(body); 
    console.log("rd -> ", rd); 
    return rd; 
})