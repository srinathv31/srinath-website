import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { DarkModeToggleSwitch } from "./DarkModeToggleSwitch";

export default function MainMenu({ menuType }: {
    menuType: "main-page" | "top-menu"
}): JSX.Element {
    const [isDarkModeToggle, setIsDarkModeToggle] = useState<boolean>(false);
    // Dark Mode Toggle
    useEffect(() => {
        const mainPage = document.getElementById("mainPage");
        if (mainPage !== null){
            if (isDarkModeToggle) {
                mainPage.className = `${styles.containerLight}`;
            }
            else {
                mainPage.className = `${styles.container}`;
            }
        }
    }, [isDarkModeToggle]);

    return(
        <ul>
            {menuType === "top-menu" && 
                <li>
                    {"Mode: "}<DarkModeToggleSwitch checked={!isDarkModeToggle} onChange={()=> setIsDarkModeToggle(!isDarkModeToggle)} sx={{ m: 1 }}/>
                </li>}
            {menuType === "top-menu" && 
                <li>
                    <a className={styles.menuLink} href="https://github.com/srinathv31" target={"_blank"} rel="noreferrer">Home</a>
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
                <a className={styles.menuLink} href="https://github.com/srinathv31" target={"_blank"} rel="noreferrer">About</a>   
            </li>
        </ul>
    );
}
