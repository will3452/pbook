import useDatabase from "~/composables/useDatabase";

const client = useDatabase()

export default defineEventHandler(async (event) => {
    let body = await readBody(event)
    let data = await client
        .from('photographers')
        .update({'is_approved': true})
        .eq('id', body.id)

    return data; 
})