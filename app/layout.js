
import './globals.css'
import ContextComponent from './utilities/Context'


export const metadata = {
  title: 'Job Rebuilder ',
  description: 'Job Rebuilder is your business agreement form builder partner',
}

export default function RootLayout({ children }) {
  return (
    <ContextComponent>
    <html lang="en">
      <body>{children}</body>
    </html>
    </ContextComponent>
   
  )
}
