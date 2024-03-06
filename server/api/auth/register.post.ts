import useDatabase from "~/composables/useDatabase";
import bcrypt from 'bcrypt'; 

const client = useDatabase(); 

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const saltRound = 10; 
    let data = await (new Promise((resolve, reject) => {
        bcrypt.hash(body.password, saltRound, async (err:any, hash:string) => {
            if (err) {
                console.log(err)
                return;
            }
            body.password = hash; 
            let creation = await client.from('users').insert({ ...body })
            return resolve(creation)
        })
    }))
    return data; 
})