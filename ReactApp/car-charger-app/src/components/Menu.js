import React from 'react'
import styles from './Menu.module.css'
import { BrowserRouter as Router,Link } from 'react-router-dom';

export default function Menu(props) {
    return (

        
        <div className= { styles.headerBackground }>
            <div className={styles.container}>
                <div className={styles.brand } > GreenFuel </div>
                <Link to="/"><div className={styles.subCat } >Map </div></Link>
                <Link to="/charge"><div className={styles.subCat } >Select charger </div></Link>
                <Link to="/history"><div className={styles.subCat } >Charging History </div></Link>
                
                <Link to="/signup"><div className={styles.subCat }> SignUp</div></Link>
                <input className={styles.searchbar } type="text" placeholder="Search for chargers" onChange={ (event)=> props.onChange(event)}></input>
                

                <input className={styles.login } type="text" placeholder="Username" onChange={ (event)=> props.usernameChange(event)}></input>
                
                <input type="password" placeholder="Password" onChange={ (event)=> props.passwordChange(event)}></input>
                
                <button className={styles.login } onClick={()=>props.userLogin(props.currentUser)}>Login</button> 
               
            
            </div>
            
        </div>
        
    )
}
