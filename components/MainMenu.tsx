import styles from "../styles/Home.module.css";

export default function MainMenu({ menuType }: {
    menuType: "main-page" | "top-menu"
}): JSX.Element {
    return(
        <ul>
            {/* {menuType === "top-menu" && 
                <li>
                    {"Mode: "}<DarkModeToggle checked={!isDarkModeToggle} onChange={()=> setDarkModeToggle(!isDarkModeToggle)} sx={{ m: 1 }}/>
                </li>} */}
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
