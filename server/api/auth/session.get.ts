import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
    try {
        let token = event.headers.get('Authorization')?.split(' ')[1];
        const data = jwt.verify(token, 's3cr3t'); 
        return data; 
    } catch (error) {
        console.log('session.error', error)
    }
})