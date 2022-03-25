import MainLayout from "../layouts/MainLayout";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
