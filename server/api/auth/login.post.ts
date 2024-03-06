import useDatabase from "~/composables/useDatabase";
import jwt from 'jsonwebtoken'; 
import bcrypt from 'bcrypt'; 
const client = useDatabase(); 

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body.email)
    const { data } = await client.from('users').select().eq('email', body.email).single();
    console.log(data)
    if (data == null) return createError({statusCode: 404, statusMessage: 'user not found.'})

    // check password 
    let correctPassword = await (new Promise((resolve, reject) => {
        bcrypt.compare(body.password, data.password, (err, result) => {
            if (err) resolve(false)
            resolve(result)
        })
    }))
    if (! correctPassword) return createError({statusCode: 404, statusMessage: 'user not found.'})

    let accessToken = jwt.sign({ data }, 's3cr3t')
    return { token: { 
        accessToken, 
    }}; 
})