import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import styles from "../styles/Home.module.css";
import { DarkModeToggleSwitch } from "./DarkModeToggleSwitch";
import { FaGithub } from "react-icons/fa";
import { globalPropsContext } from "./ContextHooks/GlobalPropsContext";

export default function MainMenu(): JSX.Element {
    const { setIsDarkModeToggle, isDarkModeToggle } = useContext(globalPropsContext);

    // Dark Mode Toggle
    useEffect(() => {
        const mainPage = document.getElementsByTagName("body");
        if (mainPage !== null){
            if (isDarkModeToggle) {
                mainPage[0].className = "dark";
            }
            else {
                mainPage[0].className = "light";
            }
        }
    }, [isDarkModeToggle]);

    const location = useRouter().pathname;
    // Radio the top menu
    useEffect(() => {
        const listElements = document.getElementsByTagName("a");
        Array.from(listElements).forEach(item => {
            if (item.className === styles.menuLink || item.className === styles.selectedLink) {
                item.className = styles.menuLink;
                if (item.className === styles.menuLink && item.getAttribute("href") === location){
                    item.className = styles.selectedLink;
                }
            }
        });
    }, [location]);

    // Open Mobile Menu
    function openMenu() {
        const burgerMenu = document.getElementById("burger-menu");
        const burgerMenuText = document.getElementById("burger-menu-text");
        const menuItems = document.getElementById("menuLinks");
        if (burgerMenu !== null) {
            burgerMenu.classList.toggle(styles.change);
        }
        if (burgerMenuText !== null) {
            burgerMenuText.classList.toggle(styles.hide);
        }
        if (menuItems !== null) {
            menuItems.classList.toggle(styles.show);
        }
    }

    return(
        <div className={styles.menuHeader} id="menuLinks">
            <div className={styles.burgerContainer} id="burger-menu" onClick={() => openMenu()}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
            <ul>
                <li>
                    {"Mode: "}<DarkModeToggleSwitch checked={!isDarkModeToggle} onChange={()=> setIsDarkModeToggle(!isDarkModeToggle)} sx={{ m: 1 }}/>
                </li>
                <li>
                    <Link href={"/"}><a className={styles.menuLink}>Home</a></Link>
                </li>
                <li>
                    <Link href={"/projects"}><a className={styles.menuLink}>Projects</a></Link>
                </li>
                {/* <li>
                    <Link href={"/experience"}><a className={styles.menuLink}>Experience</a></Link>
                </li> */}
                <li>
                    <a className={styles.menuLink} href="https://github.com/srinathv31" target={"_blank"} rel="noreferrer">Github <span style={{ fontSize: 25 }}><FaGithub/></span>
                    </a>
                </li>
                <li>
                    <Link href={"/about"}><a className={styles.menuLink}>About</a></Link>
                </li>
            </ul>
        </div>
    );
}
