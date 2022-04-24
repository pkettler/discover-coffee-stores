import '../styles/globals.css';
import StoreProvider from '../store/store-context';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;

// <div>
// <Component {...pageProps} />
// <footer>
//   <p>© 2022 Paul Kettler</p>
// </footer>
// </div>
