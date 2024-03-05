import useDatabase from "~/composables/useDatabase";

const client = useDatabase()
export default defineEventHandler(async (event) => {
    const data = await client.auth.getUser(); 
    console.log('data >> ', data)
    return data; 
})