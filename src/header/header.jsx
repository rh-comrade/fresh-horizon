import React from 'react'
import './header.module.css'
import Link from 'next/link'
import navItems from './config.json'
const Header = () => {
  return (
    <div>
      <header>
        {
          navItems.map(({item,route},index)=>{
            return <Link key={`navItem ${index}`} href={route}>{item.toUpperCase()} </Link>
          })
        }
      </header>
    </div>
  )
}

export default Header
