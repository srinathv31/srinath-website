import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { DarkModeToggleSwitch } from "./DarkModeToggleSwitch";

export default function MainMenu({ menuType }: {
    menuType: "main-page" | "top-menu"
}): JSX.Element {
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

    return(
        <div className={styles.menuHeader}>
            <ul>
                {menuType === "top-menu" && 
                <li>
                    {"Mode: "}<DarkModeToggleSwitch checked={!isDarkModeToggle} onChange={()=> setIsDarkModeToggle(!isDarkModeToggle)} sx={{ m: 1 }}/>
                </li>}
                {menuType === "top-menu" && 
                <li>
                    <Link href={"/"}><a className={styles.menuLink} >Home</a></Link>
                </li>}
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
                    <Link href={"/hello"}><a className={styles.menuLink} >About</a></Link>
                </li>
            </ul>
        </div>
    );
}
