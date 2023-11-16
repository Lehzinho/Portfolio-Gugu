import React from 'react'
import { Container } from './styles'
import Image from 'next/image'

export const Footer = () => {
  return (
    <Container>
      <p>find me in:</p>
      <div className='separator'/>

      <Image src='/facebook.svg'
      width={49}
      height={49}
      alt='facebook'
      />
      <div className='separator'/>
      <Image src='/Twitter.svg'
      width={49}
      height={49}
      alt='facebook'
      />
      <div className='separator'/>

      <Image src='/Github.svg'
      width={49}
      height={49}
      alt='facebook'
      />
    </Container>
  )
}
