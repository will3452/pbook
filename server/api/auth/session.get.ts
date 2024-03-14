import jwt from 'jsonwebtoken';
import useDatabase from '~/composables/useDatabase'; 
const client = useDatabase()

export default defineEventHandler(async (event) => {
    try {
        let token = event.headers.get('Authorization')?.split(' ')[1];
        const data = jwt.verify(token, 's3cr3t'); 
        const user_id = data.data.id; 
        const response = await client.from('users').select('*, photographers(id)').eq('id', user_id).single(); 
        return response; 
    } catch (error) {
        console.log('session.error', error)
    }
})