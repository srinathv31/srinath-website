import { useEffect, useState } from "react";
import NoDataCard from "../../components/NbaAPI/NoDataCard";
import PlayerCard from "../../components/NbaAPI/PlayerCard";
import TeamRosterLabel from "../../components/NbaAPI/TeamRosterLabel";
import TeamSelectDialog from "../../components/NbaAPI/TeamSelectDialog";
import styles from "../../styles/Projects.module.css";
import { FranchiseYearData, RosterData, ScheduleData } from "../../utilities/interfaces/nbaRoster";
import GraphSelector from "../../components/NbaAPI/GraphSelector";
import axios from "axios";

export default function NbaAPI({ data }: {
    data: FranchiseYearData
}): JSX.Element {
    const [team, setTeam] = useState<string>("LOS ANGELES LAKERS");
    const [year, setYear] = useState<string>("2010");
    const [roster, setRoster] = useState<RosterData>(data.Roster);
    const [schedule, setSchedule] = useState<ScheduleData>(data.Schedule);

    return(
        <div className={styles.nbaAPI}>
            <h1>This is my NBA Data API in Action</h1>
            <div style={{ flexDirection: "row" }}>
                <div className={styles.leftSideInnerAPI}>
                    {schedule !== undefined && schedule.games !== undefined ? 
                        <GraphSelector schedule={schedule} roster={roster}/> :
                        <h1>
                            No Data to Show
                            <a href="https://github.com/srinathv31/nba-data-api" target={"_blank"} rel="noreferrer"><span className={styles.gitLink}>{" Source Code"}</span></a>
                            <a href="https://rapidapi.com/happysvstudio/api/1977-2022-nba-team-rosters-and-schedules/" target={"_blank"} rel="noreferrer"><span className={styles.apiLink}>{" RapidAPI.com"}</span></a>
                        </h1>
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
        url: "https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/elements/LOS%20ANGELES%20LAKERS/2010",
        headers: {
            "X-RapidAPI-Host": "1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com",
            "X-RapidAPI-Key": "c0b14705ddmshe3175ea352cb808p17750fjsn3d9fcaa205f9"
        }
    };
    const data = await axios.request(options).then(response => {
        console.log(response.data);
        return(response.data as FranchiseYearData);
    }).catch(error => {
        console.error(error);
    });

    // Pass data to the page via props
    return { props: { data } };
}
