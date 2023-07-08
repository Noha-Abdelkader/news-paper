import React from 'react'
import styles from './Header.module.css';
import { ImNewspaper } from "react-icons/im";

export default function Header() {
  return (
    <div className={`${styles.head} d-flex justify-content-center align-items-center p-3 text-danger-emphasis`}>
      <ImNewspaper className='mx-2'/>
    <header className={`${styles.header} fw-bolder  text-capitalize `}>Time News</header>
      </div>
  )
}
