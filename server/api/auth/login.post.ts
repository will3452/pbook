import useDatabase from "~/composables/useDatabase";

const client = useDatabase()
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {data, error} = await client.auth.signInWithPassword(body)

    return data; 
})