import Head from  'next/head'

import Layout from '../components/layout'

export default function About() {
    return(
        <Layout>
            <Head>
                <title>About | Ben Skinner  </title>
            </Head>
            <h1>About</h1>
            <p>About content goes here.</p>
        </Layout>
    )
}