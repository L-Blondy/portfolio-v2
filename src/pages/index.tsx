import Head from 'next/head'
import { Header } from 'views/Header'
import { Navbar } from 'views/Navbar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Header />

      <main className='main'>
        <h2>Main</h2>
      </main>

      <footer className={'footer'}>
        <h2>Footer</h2>
      </footer>
    </>
  )
}
