import type { NextPage } from 'next'
import { useRouter, NextRouter } from "next/router"

const BlogPage: NextPage = () => {
  const router = useRouter()

  return (
    <h1>This blog posted on Year {router.query.slug ? router.query.slug[0] : undefined} and Month {router.query.slug ? router.query.slug[1] : undefined}</h1>
  )
}

export default BlogPage