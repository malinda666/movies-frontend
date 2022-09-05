import { ReactNode } from 'react'
import { FC } from 'react'

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return <div className='page'>{children}</div>
}

export default PageLayout
