import type { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'

const PortfolioProjectPage: NextPage = () => {
  const router: NextRouter = useRouter()
  return (
    <div>
      <h1>Portfolio Project Page</h1>
      <p>{router.pathname}</p>
      <p>{router.query.id}</p>
    </div>
  )
}

export default PortfolioProjectPage