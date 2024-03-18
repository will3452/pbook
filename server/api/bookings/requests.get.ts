import useDatabase from "~/composables/useDatabase";

const client = useDatabase()

export default defineEventHandler(async (event) => {
    let query = getQuery(event)
    let limit:number = query.limit as number || 10; 
    let search:string = query.search as string || ""; 
    let { data } = await client
        .from('bookings')
        .select('*, users(*), services(*)')
        .eq('photographer_id', query.photographer_id)
        .ilike('status', `%${query.status}%`)
        .ilike('reference', `%${search}%`)
    .limit(limit); 

    return data; 
})