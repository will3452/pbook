import useDatabase from '~/composables/useDatabase';
import bcrypt from 'bcrypt'; 
const client = useDatabase()

export default defineEventHandler(async (event) => {
    const { newPassword, user_id } = await readBody(event)
    const saltRound = 10; 
    let data = await (new Promise((resolve, reject) => {
        bcrypt.hash(newPassword, saltRound, async (err:any, hash:string) => {
            if (err) {
                console.log(err)
                return;
            }
            let creation = await client.from('users').update({password: hash}).eq('id', user_id)
            return resolve(creation)
        })
    }))
})