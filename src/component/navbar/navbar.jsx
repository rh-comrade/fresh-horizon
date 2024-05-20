import React from 'react'
import styles from './navbar.module.css'
import navItem from './config.json'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='container-fluid'>
      {
        navItem?.map(({item,route},index)=>{
          return <Link key={`nav_${index}`} href={route}>{item.toUpperCase()}</Link>
        })
      }
    </nav>
  )
}

export default Navbar
