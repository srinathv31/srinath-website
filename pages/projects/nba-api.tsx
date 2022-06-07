import axios from "axios";
import { useEffect, useState } from "react";
import NoDataCard from "../../components/NbaAPI/NoDataCard";
import PlayerCard from "../../components/NbaAPI/PlayerCard";
import TeamButtonSelect from "../../components/NbaAPI/TeamRosterLabel";
import TeamSelectDialog from "../../components/NbaAPI/TeamSelectDialog";
import styles from "../../styles/Projects.module.css";
import { getRosterDataAPI } from "../../utilities/apiFunctions/nbaDataAPI";
import { RosterData } from "../../utilities/interfaces/nbaRoster";

export default function NbaAPI(): JSX.Element {
    const [team, setTeam] = useState<string>("LOS ANGELES LAKERS");
    const [year, setYear] = useState<string>("2010");
    const [roster, setRoster] = useState<RosterData>({
        url: "google.com",
        players: {
            "Bill": {
                G: "18",
                PER: "10.2",
                "TS%": ".406",
                WS: "0.5",
                P_G: "25",
                P_PER: "8.2",
                "P_TS%": ".545",
                P_WS: "0.7"
            }
        }
    });

    useEffect(() => {
        getRosterDataAPI(setRoster, "2010", "LOS ANGELES LAKERS");
    }, []);

    return(
        <div className={styles.nbaAPI}>
            <h1>This is my NBA Data API in Action</h1>
            <div style={{ flexDirection: "row" }}>
                <div className={styles.leftSideInner}>
                    <p>App Store Link</p>
                </div>
                <div className={styles.rightSideInnerAPI}>
                    <TeamSelectDialog
                        setYear={setYear}
                        year={year}
                        setTeam={setTeam}
                        team={team}
                        setRoster={setRoster}
                    ></TeamSelectDialog>
                    <div style={{ flexDirection: "row" }}>
                        <TeamButtonSelect team={team} year={year}/>
                    </div>
                    {roster.players !== undefined ? 
                        <div className={styles.rosterList}>
                            {Object.keys(roster.players).map((item, index) => {
                                return (
                                    <PlayerCard key={index} name={item} player={roster.players[item]} />
                                );
                            })}
                        </div> :
                        <div>
                            <NoDataCard />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
