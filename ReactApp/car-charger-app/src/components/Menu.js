import React from 'react'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

export default function Menu(props) {
    return (
        <div className= { styles.headerBackground }>
            <div className={styles.container}>
                <div className={styles.brand } >
                    GreenFuel
                </div>
                <Link className={styles.subCat }to='/'>
                    <div>Map</div>
                </Link>
                <ProtectedRoute isAuthenticated={props.isAuthenticated} path="/" render={(props)=>
                    <Link className={styles.subCat } to='/charge'>
                        <div>Select charger</div>
                    </Link>}>
                </ProtectedRoute>
                <ProtectedRoute isAuthenticated={props.isAuthenticated} path="/" render={(props)=>
                    <Link className={styles.subCat } to='/history'>
                        <div>Charging History</div>
                    </Link>}>
                </ProtectedRoute>
                <Link className={styles.subCat } to='/signup'>
                    <div>SignUp</div>
                </Link>
                <input className={styles.searchbar } type="text" placeholder="Search for chargers" onChange={ (event)=> props.onChange(event)}></input>
                <input className={styles.login } type="text" placeholder="Username" onChange={(event)=> props.usernameChange(event)}></input>
                <input type="password" placeholder="Password" onChange={ (event)=> props.passwordChange(event)}></input>
                <button className={styles.login } onClick={()=>props.userLogin(props.currentUser)}>
                    Login
                </button> 
            </div>
        </div>
        
    )
}
