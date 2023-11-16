import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import StyleSheetManager from "../styles/StyledComponentsRegistry";
import GlobalStyles from '../styles/globals'
import {Header} from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer';

const inter = Fira_Code({ 
  subsets: ['latin'],
  weight:['400', '700']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
        <StyleSheetManager>
          <GlobalStyles/>
          <Header/>
          {children}
          <Footer/>
        </StyleSheetManager>
        </div>
      </body>
    </html>
  )
}
