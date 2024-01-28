import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './logo.png'


function Navbar() {
    return (
        <nav>
          <Image
          src={logo}
          width={70}
          quality={100}
          placeholder='blur'

          />

          
        <h1>helpdesk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/ticket">Ticket</Link>
        </nav>
    )
}

export default Navbar
