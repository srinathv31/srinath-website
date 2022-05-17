import ImageSwiperStatic from "../../components/ImageSwiperStatic";
import styles from "../../styles/Projects.module.css";

export default function Vital(): JSX.Element {
    return(
        <main className={styles.experience}>
            <div className={styles.vital}>
                <h1>This is my Vital App</h1>
                <ImageSwiperStatic />
            </div>
        </main>
    );
}
