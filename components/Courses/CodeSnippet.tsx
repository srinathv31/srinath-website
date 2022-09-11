import courseStyles from "../../styles/Courses.module.css";

export default function CodeSnippet({ snippet }: {
    snippet: string
}): JSX.Element {
    return(
        <div className={courseStyles.codeBlock} style={{ padding: 40 }}>
            <p>{snippet}</p>
        </div>
    );
}
