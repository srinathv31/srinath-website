import axios from "axios";
import { InferGetServerSidePropsType } from "next/types";
import { useEffect, useState } from "react";
import styles from "../../styles/Projects.module.css";

export default function NbaAPI(): JSX.Element {
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
            url: "https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/elements/BOSTON%20CELTICS/2008/Roster",
            headers: {
                "X-RapidAPI-Host": "1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com",
                "X-RapidAPI-Key": "c0b14705ddmshe3175ea352cb808p17750fjsn3d9fcaa205f9"
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setRoster(response.data);
        }).catch(function (error) {
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
                    {Object.keys(roster.players).map((item, index) => {
                        return (
                            <span key={index}>
                                <p>{item}</p>
                                <p>{roster.players[item].PER}</p>
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
  
interface RosterData {
    url: string,
    players: {
        [name: string]: {
            G: string,
            PER: string,
            "TS%": string,
            WS: string,
            P_G: string,
            P_PER: string,
            "P_TS%": string,
            P_WS: string
        }
    }
};
