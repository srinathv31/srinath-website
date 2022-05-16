import { Card, CardMedia, CardActionArea } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function CardButton({ buttonText, image, link }: {
    buttonText: string,
    image: string,
    link: string
}): JSX.Element {
    return(
        <Card variant="elevation">
            <Link style={{ width: "100%" }} href={link}>
                <CardActionArea
                    onClick={() => console.log("Image Button Clicked")}
                >
                    <CardMedia
                        component="img"
                        height="300"
                        image={image}
                        alt="image button"
                    ></CardMedia>
                    <div className={styles.cardButtonText}>
                        {buttonText}
                    </div>
                </CardActionArea>
            </Link>
        </Card>
    );
}
