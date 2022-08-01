import type { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'

const ClientProject: NextPage = () => {
  const router: NextRouter = useRouter()

  return (
    <div>
      <h1>The client {router.query.id} project is {router.query.project}</h1>
    </div>
  )
}

export default ClientProject