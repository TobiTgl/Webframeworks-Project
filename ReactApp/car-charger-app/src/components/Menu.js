import React from 'react'
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <div className= { styles.headerBackground }>
            <div className={styles.container}>
                <a className={styles.brand } > GreenFuel </a>
                <a className={styles.subCat } >Map </a>
                <a className={styles.subCat }>Login</a>
                <a className={styles.subCat }> SignUp</a>
                <input className={styles.searchbar } type="text" placeholder="Search for chargers"></input>
                <button>search</button>
               
            
            </div>
            
        </div>
    )
}
