import useDatabase from "~/composables/useDatabase";

const client =  useDatabase()

export default defineEventHandler(async (event) => {
    let { data } = await client
        .from('random_photographers')
        .select()
        

    return data; 
})