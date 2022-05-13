import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { DarkModeToggleSwitch } from "./DarkModeToggleSwitch";

export default function MainMenu(): JSX.Element {
    const [isDarkModeToggle, setIsDarkModeToggle] = useState<boolean>(false);
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

    return(
        <div className={styles.menuHeader}>
            <ul>
                <li>
                    {"Mode: "}<DarkModeToggleSwitch checked={!isDarkModeToggle} onChange={()=> setIsDarkModeToggle(!isDarkModeToggle)} sx={{ m: 1 }}/>
                </li>
                <li>
                    <Link href={"/"}><a className={styles.menuLink} >Home</a></Link>
                </li>
                <li>
                    <a className={styles.menuLink} href="https://github.com/srinathv31" target={"_blank"} rel="noreferrer">Projects</a>
                </li>
                <li>
                    <a className={styles.menuLink} href="https://github.com/srinathv31" target={"_blank"} rel="noreferrer">Experience</a>
                </li>
                <li>
                    <a className={styles.menuLink} href="https://github.com/srinathv31" target={"_blank"} rel="noreferrer">Github</a>
                </li>
                <li>
                    <Link href={"/about"}><a className={styles.menuLink} >About</a></Link>
                </li>
            </ul>
        </div>
    );
}
