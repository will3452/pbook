import useDatabase from "~/composables/useDatabase"

const client = useDatabase()

export default defineEventHandler( async (event) => {
    let { data } = await client
        .from('folders')
        .select('*, works(*)')
        .eq('id', event.context.params.id)
        .single()

    return data; 
})