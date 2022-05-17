import Image from "next/image";
import ImageSwiper from "../../components/ImageSwiper";
import styles from "../../styles/Projects.module.css";

export default function Vital(): JSX.Element {
    return(
        <main className={styles.experience}>
            <div className={styles.vital}>
                <h1>This is my Vital App</h1>
                {/* <Image src={"https://i.imgur.com/BkIeqWm.png"} height={500} width={500} alt={"app showcase"} ></Image> */}
                <ImageSwiper />
            </div>
        </main>
    );
}
