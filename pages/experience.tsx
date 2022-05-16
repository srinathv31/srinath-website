import { Card, CardMedia, CardActionArea } from "@mui/material";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import CardButton from "../components/CardButton";

export default function Experience(){
    return (
        <main className={styles.experience}>
            <div>
                <CardButton
                    buttonText="Take the Tour 👉"
                    image="https://i.imgur.com/BkIeqWm.png" 
                    link="/"
                />
            </div>
        </main>
    );
};
