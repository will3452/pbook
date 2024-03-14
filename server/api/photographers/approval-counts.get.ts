import useDatabase from "~/composables/useDatabase";

const client = useDatabase()

export default defineEventHandler(async (event) => {
    let data = await client
        .from('photographers')
        .select('id', {count: 'exact', head: true})
        .eq('is_approved', false)

        console.log('data ', data)

    return data.count; 
})