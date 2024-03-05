import useDatabase from "~/composables/useDatabase"

const client = useDatabase()

export default defineEventHandler( async (event) => {
    let { data } = await client.from('services')
        .select()
        .eq('id', event.context.params?.id)
        .single()
    return data; 
})