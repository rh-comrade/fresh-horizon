import React from 'react'
import './header.module.css'
import Link from 'next/link'
import { Navbar } from '@/component/navbar'
const Header = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
    </div>
  )
}

export default Header
