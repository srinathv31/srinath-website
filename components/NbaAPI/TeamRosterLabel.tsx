import styles from "../../styles/Players.module.css";

export default function TeamRosterLabel({ team, year }: {
    team: string, year: string
}): JSX.Element {
    return(
        <div className={styles.label}>
            <div style={{ marginBottom: 5, fontWeight: 500, fontSize: 18 }}>{`${year} ${team} Roster`}</div>
        </div>
    );
}
