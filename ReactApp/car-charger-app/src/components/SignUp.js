import React from 'react'

export default function SignUp(props) {
    
    //onChange arrow syntax wegen object/finction? binding
    return (
        <div>
            <input type="text" placeholder="Username" onChange={(event)=>props.signUpUsername(event)}></input>
            <input type="password" placeholder="Password" onChange={(event)=>props.signUpPassword(event)}></input>
            <input type="text" placeholder="Email" onChange={(event)=>props.signUpEmail(event)}></input>
            <button onClick={()=>props.signUpClick()}>Sign Up</button>
        </div>
    )
}
