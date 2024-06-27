'use client'
import React, { useRef } from 'react'
import styles from "./signup.module.css"
import {useFormState, useFormStatus} from 'react-dom'
import { useEffect } from 'react'
import { createUser } from '@/lib/actions'

const Signup = () => {
    const [state, formAction] = useFormState(createUser, {message: '',})
    const {pending} = useFormStatus();

    const ref = useRef(null)
    useEffect(() =>{
        if (state.message.indexOf('Created user') === 0) {
            ref.current?.reset()
            console.log(state.message)
        } else if (state.message) {
            console.log(state.message)
        }
    }, [state.message])
  return (
    <div className={styles.signupCon}>
      <div className={styles.signupLeft}>
        <h2>Welcome to Elevate</h2>
      </div>
      <div className={styles.signupRight}>
        <div className={styles.sRightWrapper}>
            <div className={styles.sRightTop}>
                <h3>Sign up</h3>
                <p>Sign up to enjoy our services</p>
            </div>
            <form className={styles.sForm} action={formAction}>
                <section className={styles.formInputs}>
                    <input type='text' name='firstName' placeholder='first name' required/>
                    <input type='text' name='lastName' placeholder='last name' required/>
                </section>
                <section className={styles.formInputs}>
                    <input type='email' name='email' placeholder='email'/>
                    <input type='text' name='gender' placeholder='gender'/>
                </section>
                <section className={styles.formInputs}>
                    <input type='number' name='phoneNumber' placeholder='phone number'/>
                    <input type='date' name='dob' placeholder='DOB'/>
                </section>
                <section className={styles.formInputs}>
                    <input type='password' name='password' placeholder='password' required/>
                    <input type='password' name='confirmPassword' placeholder='confirm password' required/>
                </section>
                <div className={styles.checkCon}>
                    <input type='checkbox'/>
                    <p>I agree to the terms and conditions</p>
                </div>
                <button type='submit' disabled={pending} className={styles.formButton}>{pending? "signing up..." : "Sign up"}</button>
            </form>
            <div className={styles.sRightBottom}>
                <div></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
