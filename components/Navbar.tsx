import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
    text: 'Home',
    href: '/',},
  {
    text: 'About',
    href: '/about',},
  {
    text: 'Contact',
    href: '/contact',},
  {
    text: 'Pricing',
    href: '/pricing',},
]

export const Navbar = () => {
  return (
    <nav>
      {/* primera forma en donde se pasa el arreglo y se invocan sus valores */}
      {/* {menuItems.map( menuItem => <ActiveLink key={menuItem} text={menuItem.text} href={menuItem.href}/>)}  */}
          {/* Segunda forma donde se usa la desestructuracion de los componentes del array */}
      {menuItems.map( ({text,href}) => <ActiveLink key={href} text={text} href={href}/>)} 
        {/* <ActiveLink text="Home" href='/'/>
        <ActiveLink text="About" href='/about'/>
        <ActiveLink text="Contact" href='/contact'/>
        <ActiveLink text="Pricing" href='/pricing'/> */}

    </nav>
  )
}
