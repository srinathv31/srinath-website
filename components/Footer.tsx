import { FooterLinks } from "./FooterLinks";
import styles from "../styles/Home.module.css";

export default function Footer(): JSX.Element {
    return(
        <footer className={styles.footer}>
            <span>
                <FooterLinks />
            </span>
        </footer>
    );
}
