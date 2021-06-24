import Head from 'next/head'
import { Navbar } from 'views/Navbar'
import { Header } from 'views/Header'
import { Profile } from 'views/Profile'
import { Skills } from 'views/Skills'
import { Projects } from 'views/Projects'
import { Resume } from 'views/Resume'
import { Contact } from 'views/Contact'
import { Footer } from 'views/Footer'
import { useState } from 'react'
import { META } from 'config'
import { DefaultSeo } from 'next-seo';

export default function Home() {

  const [ isBurgerMenuOpen, setIsBurgerMenuOpen ] = useState(false)
  const [ isPageLoaded, setIsPageLoaded ] = useState(false)

  return (
    <>
      <DefaultSeo
        title={META.TITLE}
        description={META.DESCRIPTION}
        canonical={META.URL}
        openGraph={{
          url: META.URL,
          site_name: META.TITLE,
          locale: META.OG.LOCALE,
          description: META.DESCRIPTION,
          title: META.TITLE,
          type: 'website',
          images: [ META.OG.IMAGE ],
          article: {
            publishedTime: '2021-07-20T11:08:32.879Z',
            modifiedTime: new Date().toISOString(),
            section: META.TITLE,
            authors: [ 'Laurent Blondy' ],
            tags: META.OG.TAGS,
          },
          profile: {
            firstName: 'Laurent',
            lastName: 'Blondy',
          }
        }}
        additionalMetaTags={[ {
          property: 'dc:creator',
          content: 'Laurent Blondy'
        }, {
          name: 'application-name',
          content: META.TITLE
        }, {
          name: 'application-decription',
          content: META.DESCRIPTION
        }, {
          httpEquiv: 'x-ua-compatible',
          content: 'IE=edge; chrome=1'
        } ]}
        additionalLinkTags={[ META.ICON, META.APPLE_TOUCH_IMAGE ]}
      />

      <Navbar
        onBurgerMenuClick={() => setIsBurgerMenuOpen(v => !v)}
        isBurgerMenuOpen={isBurgerMenuOpen}
        isPageLoaded={isPageLoaded}
      />

      <Header
        isBurgerMenuOpen={isBurgerMenuOpen}
        onLoad={() => setIsPageLoaded(true)}
      />

      <main className='main'>
        <Profile />
        <Skills />
        <div className='divider mt-10 md:mt-14 lg:mt-18' />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
