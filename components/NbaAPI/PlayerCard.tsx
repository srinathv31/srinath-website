import { Player } from "../../utilities/interfaces/nbaRoster";
import styles from "../../styles/Players.module.css";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Divider from "../Divider";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

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
