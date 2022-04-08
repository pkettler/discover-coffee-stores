import Link from 'next/link';
import { useRouter } from 'next/router';

const WelcomeAnkita = () => {
  const router = useRouter();
  console.log('router', router);
  return (
    <div>
      Welcome to Nextjs with Ankita! {router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/courses/nextjs">
        <a>Go to page dynamic</a>
      </Link>
    </div>
  );
};

export default WelcomeAnkita;
