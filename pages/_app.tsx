import '../styles/globals.scss';
import Layout from './component/layout/Layout';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
