import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";
import { globalPropsContext } from "../components/ContextHooks/GlobalPropsContext";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
    const [isDarkModeToggle, setIsDarkModeToggle] = useState<boolean>(false);
    const globalProps = { isDarkModeToggle, setIsDarkModeToggle };

    return (
        <>
            <globalPropsContext.Provider value={globalProps}>
                <Layout>
                    <Component {...pageProps} id="mainPage" className="dark" />
                </Layout>
            </globalPropsContext.Provider>
            <Analytics />
        </>
    );
}

export default MyApp;
