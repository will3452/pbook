import useDatabase from "~/composables/useDatabase"

const client = useDatabase()

export default defineEventHandler( async (event) => {
    let body = await readBody(event);

    let {data: photographer} = await client.from('photographers').select('id').eq('user_id', body.user_id).single()

    console.log(photographer); 
    delete body.user_id 
    body.photographer_id = photographer.id
    body.inclusions =body.inclusions ? body.inclusions.split(','): []; 

    console.log('body ', body)

    const data = await client.from('photographer_services').insert(body);

    console.log("data -> ", data); 

    return data; 
})