import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import styles from "../styles/Home.module.css";

export default function About(): JSX.Element {
    return(
        <>
            <main className={styles.main}>
                <Avatar sx={{ bgcolor: deepPurple[500], width: 200, height: 200 }}>SV</Avatar>
                <div className={styles.aboutDescription}>
                    <h1>
                        {"Hi, again 👋 I'm"}<div className={styles.nameHeader}>Srinath Venkatesh</div>
                    </h1>
                    <p>
                        A passionate creator and Founder of Vital. 
                        In order to turn my ideas into realities, I learned technologies such as
                        React / React Native / Typescript / Nodejs. I learned Python and Plotly to
                        pursue data projects.
                    </p>
                </div>
            </main>
        </>
    );
}
