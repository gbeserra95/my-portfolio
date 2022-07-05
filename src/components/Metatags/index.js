import Head from 'next/head'

function Metatags() {
    const title = "Gabriel Beserra | Frontend Developer"
    const description = "Hi, everyone! My name is Gabriel Beserra, I am a Frontend Developer and I build modern websites using mostly Next.js and React."
    const image = "https://gabrielbeserra.com/assets/images/preview.png"

    return (
        <Head>
            <title key={'title'}>{ title }</title>
            <meta name="description" content={description} />

            <meta name="og:locale" content="en" />
            <meta property="og:site_name" content="Gabriel Beserra" />
            <meta property="og:type" content={ 'website' } />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={ title } />
            <meta property="og:url" content={ "https://gabrielbeserra.com" } />
            <meta property="og:image" content={image} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ "https://gabrielbeserra.com" } />
            <meta property="twitter:title" content={ title } />
            <meta property="twitter:description" content={ description} />
            <meta property="twitter:image" content={ image } />

        </Head>
    )
}

export default Metatags