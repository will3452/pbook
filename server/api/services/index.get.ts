import useDatabase from "~/composables/useDatabase"

const client = useDatabase()

export default defineEventHandler( async (event) => {
    let query = getQuery(event)
    let limit:number = query.limit as number || 10; 
    let search:string = query.search as string || ""; 
    let { data } = await client
        .from('services')
        .select()
        .ilike('name', `%${search}%`)
        .limit(limit); 

    return data; 
})