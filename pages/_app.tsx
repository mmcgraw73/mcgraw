import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import RootLayout from '../app/layout';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import '../public/fonts/fontawesome-pro/css/all.min.css'; // Import Font Awesome Pro CSS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
