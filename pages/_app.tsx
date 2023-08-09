import '../shared/styles/global.scss';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel='icon' type='image/png' sizes='16x16' href='/static/images/favicon-16x16.png' />
                <link rel='icon' type='image/png' sizes='96x96' href='/static/images/favicon-96x96.png' />
                <meta httpEquiv='Content-Type' content='Type=text/html; charset=UTF-8' />
                <meta
                    name='description'
                    content='اسنپ فود (زودفود قدیم) سامانه سفارش آنلاین غذا، شیرینی و خرید آنلاین از کافی شاپ و سوپرمارکت ها در تهران، کرج، شیراز، اصفهان، مشهد و سراسر ایران'
                    data-react-helmet='true'
                />
                <title>سفارش آنلاین از رستوران‌ها، ‌شیرینی‌فروشی‌ها، کافی‌شاپ‌ها، سوپرمارکت‌ها،‌ نانوایی‌ها و ...</title>
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

export default App;
