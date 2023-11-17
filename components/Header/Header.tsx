'use client'
import {useState} from 'react'
import { Container, NavLinks } from './styles'
import Image from 'next/image'
import Link from 'next/link'


export const Header = () => {
  const [active, setActive] = useState(false)

  const handleClose = () => {
    setActive((prev) => !prev)
  }

  return (
    <Container>
      <p>gustavo-gomes</p>
      <div onClick={handleClose}>
        {active ?  
        <Image
        src='/Close.svg'
        width={15}
        height={15}
        alt='close'
        />: <div className='hamburguer'/>}        
      </div>
      {active && 
      <NavLinks className={active? 'active':''}>
        <Link onClick={handleClose} href={'/'}>_hello</Link>
        <div className='separator'/>
        <Link onClick={handleClose} href={'/about'}>_about-me</Link>
        <div className='separator'/>
        <Link onClick={handleClose} href={'/'}>_projects</Link>
        <div className='separator'/>
        <Link onClick={handleClose} href={'/'}>_contact-me</Link>
      </NavLinks>
      }
    </Container>
  )
}

