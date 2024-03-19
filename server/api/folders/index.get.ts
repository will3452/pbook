import useDatabase from "~/composables/useDatabase"

const client = useDatabase()

export default defineEventHandler( async (event) => {
    let query = getQuery(event)
    let { data } = await client
        .from('folders')
        .select()
        .eq('photographer_id', query.photographer_id)

    return data; 
})