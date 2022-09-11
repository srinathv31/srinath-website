/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import courseStyles from "../../styles/Courses.module.css";

export default function NextButton({ url, label, img }: {
    url: string,
    label: string,
    img?: string
}): JSX.Element {
    return(
        <Link href={`${url}`}>
            <div className={courseStyles.courseCard} style={{ justifyContent: "center", width: "auto", backgroundColor: "white", color: "black" }}>
                { img && <img src={img} alt={`${label} Image`} height={50} />}
                <p>{label}</p>
            </div>
        </Link>
    );
}
