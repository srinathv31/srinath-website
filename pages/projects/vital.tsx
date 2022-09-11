import styles from "../../styles/Projects.module.css";

export default function Vital(): JSX.Element {
    return(
        <div className={styles.vital}>
            <h1>This is my Vital App</h1>
            <div style={{ flexDirection: "row" }}>
                <div className={styles.leftSideInner}>
                    <p>App Store Link</p>
                </div>
                <div className={styles.rightSideInner}>
                    <p>I created Vital to create a space where information about Supplements can be found in one place. This eventually evolved into a Supplement and Mood tracker.</p>
                </div>
            </div>
        </div>
    );
}
