import styles from "../../styles/Players.module.css";
import Divider from "../Divider";

export default function NoDataCard(): JSX.Element {
    return(
        <div className={styles.card}>
            <div style={{ marginBottom: 5, fontWeight: 500, fontSize: 18 }}>{"No Team Data for This Year"}</div>
            <Divider />
        </div>
    );
}
