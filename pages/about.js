import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/layout';

const myStyle = {
  color: 'red',
  borderLeft: '5px solid black',
  padding: '5px',
};

const About = () => {
  return (
    <Layout
      mainTitle='My about page built with NextJS'
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>About page</title>
        <meta name='description' content='About page' />
        <meta name='keywords' content='about nextjs' />
        <meta name='author' content='Kasper' />
      </Head>

      <h1>About page</h1>
      <Link href='/'>
        <a style={myStyle}>Home page</a>
      </Link>

      <p>Lorem ipsum</p>

      <style jsx>
        {`
          p {
            color: indigo;
            font-size: 20px;
          }
        `}
      </style>
    </Layout>
  );
};

export default About;
