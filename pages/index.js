import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Im a pew pew man with subauwu</p>
        <p>
          This is a example use of framework with a tunnel{' '}
         
        </p>
      </section>
    </Layout>
  )
}