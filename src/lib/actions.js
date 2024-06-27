'use server'
import { revalidatePath } from 'next/cache'
import userModel from './user-model'
import db from './db'

 
export async function createUser(prevState, formData) {
    
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        gender: formData.get('gender'),
        phoneNumber: formData.get('phoneNumber'),
        dob: formData.get('dob'),
        password:formData.get('password')
    }
    
    try {
        await db()
        const user = new userModel(data)
        await user.save()
        // revalidatePath('/')
        return { message: `Created user ${data.firstName}` }
    } catch (e) {
        return { message: 'Failed to create user' }
    }
}
