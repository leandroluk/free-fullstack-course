import { attributes, react as HomeContent } from '$/content/home.md'
import type { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{attributes.title as string}</title>
        <meta name="description" content={attributes.title as string} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeContent />
      </main>
    </div>
  )
}

export default HomePage
