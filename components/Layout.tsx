import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import MainMenu from "./MainMenu";

export default function Layout({ children }: {
    children: ReactJSXElement
}): JSX.Element {
    return(
        <div className={styles.container}>
            <MainMenu />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
