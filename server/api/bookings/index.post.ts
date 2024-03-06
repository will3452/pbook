import useDatabase from "~/composables/useDatabase";

const client = useDatabase(); 

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    body.reference = "BRN" + Date.now();
    let rd = await client.from('bookings').insert(body); 
    return rd; 
})