import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import theme from '../src/theme/theme';
import createEmotionCache from '../src/utils/createEmotionCache';
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
import "swiper/css";
import "swiper/css/pagination"
import '../src/styles/slider.css';
import GlobalContextProvider from "../context/GlobalContext";
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

export default function MyApp(props) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

    return (
        <GlobalContextProvider>

            <CacheProvider value={emotionCache}>
                <Head>
                    <title>Rental cycles automation, leads CRM, free listings database | RentBase</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width"/>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>

                    <Header/>
                    <Component {...pageProps} />
                    <Footer/>

                </ThemeProvider>
            </CacheProvider>
        </GlobalContextProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
