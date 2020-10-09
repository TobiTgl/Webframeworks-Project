import React from 'react'
import styles from './SignUp.module.css'

export default function SignUp(props) {
    
    //onChange arrow syntax wegen object/finction? binding
    return (
        <div className={styles.signUp}>
            <div className={styles.input}>
                <input className={styles.inputfield} type="text" placeholder="Username" onChange={(event)=>props.signUpUsername(event)}></input>
                <input className={styles.inputfield} type="password" placeholder="Password" onChange={(event)=>props.signUpPassword(event)}></input>
                <input className={styles.inputfield} type="text" placeholder="Email" onChange={(event)=>props.signUpEmail(event)}></input>
                <button className={styles.button} onClick={()=>props.signUpClick()}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}
