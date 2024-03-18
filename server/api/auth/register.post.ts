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
            let [ last_name, first_name,middle_name ] = body.name.split(' '); 
            let creation = await client.from('users').insert({ ...body })
            console.log('creation >> ', creation)
            if (body.type == 'PHOTOGRAPHER') {
                const { data:user } = await client.from('users').select().eq('email', body.email).single()

                console.log("createdUser -> ", user)
                let data = await client.from('photographers').insert({
                    first_name,last_name, middle_name, email: body.email, user_id: user.id, is_approved: false,  
                })

                console.log('created -> ', data)
            }
            return resolve(creation)
        })
    }))
    return data; 
})