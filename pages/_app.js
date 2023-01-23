import Head from 'next/head';
import '../styles/globals.css';
import { OpenFormatProvider } from '@simpleweb/open-format-react';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Open Format Test</title>
                <meta name='title' content='Open Format Test'/>
                <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
            </Head>
            <OpenFormatProvider config={{
                network: "mumbai",
                nftStorageToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU3OWNjNWRFZmM1OGE1ODg2NDAxMTM5ZkMzRDEwZjE3MTEwNmQ3ZmUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NDIxNDI0NzUwNSwibmFtZSI6Ik9wZW5Gb3JtYXRUZXN0In0.ElF7DqR-g83-h7RKpJlxZWTLMAY8g6X-C7o1zAQj9jk",
            }}>
                <Component {...pageProps} />
            </OpenFormatProvider>
        </>
    );
}

export default MyApp;
