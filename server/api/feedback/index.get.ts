import useDatabase from "~/composables/useDatabase"

const client = useDatabase()

export default defineEventHandler( async (event) => {
    let query = getQuery(event)
    let { data } = await client
        .from('feedback')
        .select('*, users(*)')
        .eq('photographer_id', query.photographer_id)

        console.log('query', query)
        console.log(data)
    return data; 
})