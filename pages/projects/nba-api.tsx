import axios from "axios";
import { useEffect, useState } from "react";
import NoDataCard from "../../components/NbaAPI/NoDataCard";
import PlayerCard from "../../components/NbaAPI/PlayerCard";
import TeamButtonSelect from "../../components/NbaAPI/TeamRosterLabel";
import TeamSelectDialog from "../../components/NbaAPI/TeamSelectDialog";
import styles from "../../styles/Projects.module.css";
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
        const options = {
            method: "GET",
            url: "https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/elements/BOSTON%20CELTICS/1976/Roster",
            headers: {
                "X-RapidAPI-Host": "1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com",
                "X-RapidAPI-Key": "c0b14705ddmshe3175ea352cb808p17750fjsn3d9fcaa205f9"
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setRoster(response.data);
        }).catch(function (error) {
            setRoster({ url: "google.com", players: { "Bill": { G: "18", PER: "10.2", "TS%": ".406", WS: "0.5", P_G: "25", P_PER: "8.2", "P_TS%": ".545", P_WS: "0.7" } } });
            console.error(error);
        });
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
                    ></TeamSelectDialog>
                    <div style={{ flexDirection: "row" }}>
                        <TeamButtonSelect team={team} year={year}/>
                    </div>
                    <div className={roster.url !== "google.com" ? styles.rosterList : "none"}>
                        {Object.keys(roster.players).map((item, index) => {
                            return (
                                item === "Bill" 
                                    ? <NoDataCard />
                                    : <PlayerCard key={index} name={item} player={roster.players[item]} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
