import useDatabase from "~/composables/useDatabase"

const client = useDatabase()

export default defineEventHandler( async (event) => {
    let body = await readBody(event)


    const data = await client.from('photographer_services').delete().eq('id', body.service_id)

    console.log("data -> ", data); 

    return data; 
})