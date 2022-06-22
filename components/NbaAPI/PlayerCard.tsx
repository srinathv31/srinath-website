import { Player } from "../../utilities/interfaces/nbaRoster";
import styles from "../../styles/Players.module.css";
import Divider from "../Divider";

export default function PlayerCard({ player, name }: {
    player: Player, name: string
}): JSX.Element {
    return(
        <div className={styles.card}>
            <div style={{ marginBottom: 5, fontWeight: 500, fontSize: 18 }}>{name}</div>
            <div>{`G: ${player.G} | PER: ${player.PER} | TS%: ${player["TS%"]}`}</div>
            <Divider />
            <div style={{ marginBottom: 5, marginTop: 5 }}>Playoff Stats</div>
            {player.P_G === undefined
                ? <div>{"P_G: N/A | P_PER: N/A | TS%: N/A"}</div>
                : <div>{`P_G: ${player.P_G} | P_PER: ${player.P_PER} | TS%: ${player["P_TS%"]}`}</div>}
        </div>
    );
}
