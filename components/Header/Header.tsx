'use client'
import {useState} from 'react'
import { Container, NavLinks } from './styles'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  const [active, setActive] = useState(true)
  return (
    <Container>
      <p>gustavo-gomes</p>
      <div onClick={() => setActive((prev) => !prev)}>
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
        <Link href={'/'}>_hello</Link>
        <div className='separator'/>
        <Link href={'/'}>_about-me</Link>
        <div className='separator'/>
        <Link href={'/'}>_projects</Link>
        <div className='separator'/>
        <Link href={'/'}>_contact-me</Link>
      </NavLinks>
      }
    </Container>
  )
}

