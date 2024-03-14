import useDatabase from "~/composables/useDatabase";

const client = useDatabase()

export default defineEventHandler(async (event) => {
    let query = getQuery(event)
    let limit:number = query.limit as number || 10; 
    let search:string = query.search as string || ""; 
    let { data } = await client
        .from('photographers')
        .select()
        .ilike('first_name', `%${search}%`)
        .eq('is_approved', false)
        .limit(limit); 

    return data; 
})