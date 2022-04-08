import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

const DynamicRoutePage = () => {
  const router = useRouter();
  const query = router.query.dynamic;
  console.log('router', router);
  return (
    <div>
      <Head>
        <title>{query}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> This is the {query} page</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default DynamicRoutePage;
