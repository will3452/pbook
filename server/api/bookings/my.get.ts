import useDatabase from "~/composables/useDatabase";

const client = useDatabase()

export default defineEventHandler(async (event) => {
    let query = getQuery(event)
    let limit:number = query.limit as number || 10; 
    let search:string = query.search as string || ""; 
    let { data } = await client
        .from('bookings')
        .select('*, photographers(*), services(*)')
        .eq('user_id', query.user_id)
        .ilike('reference', `%${search}%`)
    .limit(limit); 

    return data; 
})