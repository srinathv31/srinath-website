import { useState } from "react";
import NoDataCard from "../../components/NbaAPI/NoDataCard";
import PlayerCard from "../../components/NbaAPI/PlayerCard";
import TeamRosterLabel from "../../components/NbaAPI/TeamRosterLabel";
import TeamSelectDialog from "../../components/NbaAPI/TeamSelectDialog";
import styles from "../../styles/Projects.module.css";
import { FranchiseYearData, RosterData, ScheduleData } from "../../utilities/interfaces/nbaRoster";
import GraphSelector from "../../components/NbaAPI/GraphSelector";
import axios from "axios";
import { fallbackData } from "../../data/nbaStuff";

export default function NbaAPI({ data }: {
    data: FranchiseYearData
}): JSX.Element {
    const [team, setTeam] = useState<string>("LOS ANGELES LAKERS");
    const [year, setYear] = useState<string>("2010");
    const [roster, setRoster] = useState<RosterData>(data.Roster);
    const [schedule, setSchedule] = useState<ScheduleData>(data.Schedule);

    if (!data) {
        return (
            <div className={styles.nbaAPI}>
                <h1>No Data Loaded</h1>
            </div>
        );
    }

    return(
        <div className={styles.nbaAPI}>
            <h1>
                This is my NBA Data API in Action
                <a href="https://github.com/srinathv31/nba-api-go" target={"_blank"} rel="noreferrer"><span className={styles.gitLink}>{" Source Code"}</span></a>
                <a href="https://rapidapi.com/happysvstudio/api/1977-2022-nba-team-rosters-and-schedules/" target={"_blank"} rel="noreferrer"><span className={styles.apiLink}>{" RapidAPI.com"}</span></a>
            </h1>
            <div style={{ flexDirection: "row" }}>
                <div className={styles.leftSideInnerAPI}>
                    {schedule !== undefined && schedule.games !== undefined ? 
                        <GraphSelector schedule={schedule} roster={roster}/> :
                        <h1>No Data to Show</h1>
                    }
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
                    <TeamRosterLabel team={team} year={year}/>
                    {roster !== undefined && roster.players !== undefined ? 
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

// This gets called on every request
export async function getStaticProps() {
    const options = {
        method: "GET",
        url: "https://nba-data-api-cec43665ia-uc.a.run.app/v1/nba/LOS ANGELES LAKERS/2010",
    };
    const data = await axios.request(options).then(response => {
        console.log(response.data["LOS ANGELES LAKERS"]["2010"]);
        return(response.data["LOS ANGELES LAKERS"]["2010"] as FranchiseYearData);
    }).catch(error => {
        console.error(error);
        return fallbackData;
    });

    // Pass data to the page via props
    return { props: { data } };
}
