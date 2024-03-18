import useDatabase from "~/composables/useDatabase"

const client = useDatabase()

export default defineEventHandler( async (event) => {
    let body = await readBody(event)


    console.log('body -> ', body)


    delete body.services; 


    const data = await client.from('photographer_services').update(body).eq('id', body.id)

    console.log("data -> ", data); 

    return data; 
})