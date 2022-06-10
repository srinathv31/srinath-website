export default function EmphasisWord({ word, pageLink }: {
    word: string,
    pageLink?: string
}): JSX.Element {
    return(
        pageLink === undefined ?
            <span style={{ color: "#35b0ee" }}>{word}</span> :
            <a href={pageLink}><span style={{ color: "#35b0ee" }}>{word}</span></a>
    );
}
