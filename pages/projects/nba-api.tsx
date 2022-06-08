import axios from "axios";
import { useEffect, useState } from "react";
import NoDataCard from "../../components/NbaAPI/NoDataCard";
import PlayerCard from "../../components/NbaAPI/PlayerCard";
import TeamButtonSelect from "../../components/NbaAPI/TeamRosterLabel";
import TeamSelectDialog from "../../components/NbaAPI/TeamSelectDialog";
import WinsTotalGraph from "../../components/NbaAPI/WinsTotalGraph";
import styles from "../../styles/Projects.module.css";
import { getRosterDataAPI, getScheduleDataAPI } from "../../utilities/apiFunctions/nbaDataAPI";
import { initialRoster, initialSchedule } from "../../utilities/initializers/nbaAPIInitializers";
import { RosterData, ScheduleData } from "../../utilities/interfaces/nbaRoster";

export default function NbaAPI(): JSX.Element {
    const [team, setTeam] = useState<string>("LOS ANGELES LAKERS");
    const [year, setYear] = useState<string>("2010");
    const [roster, setRoster] = useState<RosterData>(initialRoster);
    const [schedule, setSchedule] = useState<ScheduleData>(initialSchedule);

    useEffect(() => {
        getRosterDataAPI(setRoster, "2010", "LOS ANGELES LAKERS");
        getScheduleDataAPI(setSchedule, "2010", "LOS ANGELES LAKERS");
    }, []);

    return(
        <div className={styles.nbaAPI}>
            <h1>This is my NBA Data API in Action</h1>
            <div style={{ flexDirection: "row" }}>
                <div className={styles.leftSideInnerAPI}>
                    <WinsTotalGraph schedule={schedule}/>
                </div>
                <div className={styles.rightSideInnerAPI}>
                    <TeamSelectDialog
                        setYear={setYear}
                        year={year}
                        setTeam={setTeam}
                        team={team}
                        setRoster={setRoster}
                        setSchedule={setSchedule}
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
