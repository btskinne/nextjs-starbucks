import Head from  'next/head'

import Layout from '../components/layout'

export default function Portfolio() {
    return(
        <Layout>
            <Head>
                <title>Portfolio | Ben Skinner  </title>
                <meta name="description" content="A robust portfolio of web design projects"></meta>
            </Head>
            <h1>Portfolio</h1>
            <p>Portfolio content goes here.</p>
        </Layout>
    )
}