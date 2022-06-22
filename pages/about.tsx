import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import EmphasisWord from "../components/EmphasisWord";
import styles from "../styles/Home.module.css";

export default function About(): JSX.Element {
    return(
        <>
            <main className={styles.main}>
                {/* <Avatar sx={{ bgcolor: deepPurple[500], width: 250, height: 250 }}>SV</Avatar> */}
                <div className={styles.aboutDescription}>
                    <h1>
                        {"Hi, again 👋 I'm"}<div className={styles.nameHeader}>Srinath Venkatesh</div>
                    </h1>
                    <p>
                        A passionate creator and Founder of the mobile app <EmphasisWord word="Vital"/>. 
                        In order to turn my ideas into realities, I learned technologies such as
                        <EmphasisWord word=" React"/> / <EmphasisWord word="React Native "/>
                         / <EmphasisWord word="Typescript"/> / <EmphasisWord word="NodeJS"/>. I also learned 
                        <EmphasisWord word=" Python"/> and <EmphasisWord word="Plotly"/> to
                        pursue data projects.
                    </p>
                </div>
            </main>
        </>
    );
}
