import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/layout';

const Index = () => {
  return (
    <Layout
      mainTitle='My Home page built with NextJS'
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>NextJS React App</title>
      </Head>
      <h1>Hello World!</h1>
      <Link href='/about'>
        <a>About page</a>
      </Link>

      <p>Lorem ipsum</p>
    </Layout>
  );
};

export default Index;
