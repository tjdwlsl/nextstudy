import Link from 'next/link'
import './globals.css'

// title, favidon
export const metadata = {
  title: 'Create tjdwls',
  description: 'tjdwls',
  icons :{
    icon : '/images/ict_favicon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body >
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          <li><Link href='/read/1'>HTML</Link></li>
          <li><Link href='/read/2'>CSS</Link></li>
          <li><Link href='/read/3'>JS</Link></li>
        </ol>
        {children}
        <ul>
          <li><Link href='/create'>Create</Link></li>
          <li><Link href='/update'>Update</Link></li>
          <li><input type='button' value="delete" /></li>
        </ul>
        </body>
    </html>
  )
}