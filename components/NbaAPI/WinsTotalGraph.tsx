import { useContext } from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { ScheduleData } from "../../utilities/interfaces/nbaRoster";
import { globalPropsContext } from "../ContextHooks/GlobalPropsContext";

function calculateTotalWins(schedule: ScheduleData) {
    const scheduleData: { gameNumber: string, winTotal?: { total: number, result: string, year: string }, gameTotal?: number }[] = [];
    Object.keys(schedule.games).forEach(game => {
        if (game === "P_1"){
            scheduleData.push({ gameNumber: "Playoffs" });
        }
        const totalGames = (+schedule.games[game]["W"]) + (+schedule.games[game]["L"]);
        const yearString = schedule.games[game]["Date"].trim().slice(schedule.games[game]["Date"].length - 4);
        scheduleData.push({ 
            gameNumber: "Game #: "+game,
            winTotal: { 
                total: +schedule.games[game]["W"], 
                result: schedule.games[game]["Result"],
                year: yearString
            }, 
            gameTotal: totalGames 
        });
    });
    return scheduleData;
}
  
export default function WinsTotalGraph({ schedule }: {
    schedule: ScheduleData
}): JSX.Element {
    const data = calculateTotalWins(schedule);
    const { isDarkModeToggle } = useContext(globalPropsContext);
    const graphAxisColor = !isDarkModeToggle ? "whitesmoke" : "#5d5d5d";

    const CustomizedDot = (props: any) => {
        const { cx, cy, payload } = props;

        if (payload.winTotal === undefined) {
            return (
                <></>
            );
        }

        const winsNeeded = calculatePlayoffWinsNeeded(+payload.winTotal.year);
        if (payload.gameNumber.trim().includes("P") && payload.winTotal.total === winsNeeded) {
            return (
                <circle cx={cx} cy={cy} r={5} stroke="black" strokeWidth={1} fill="yellow" />
            );
        }

        if (payload.winTotal.result === "L") {
            return (
                <circle cx={cx} cy={cy} r={5} stroke="black" strokeWidth={1} fill="#db2c00" />
            );
        }

        return (
            <circle cx={cx} cy={cy} r={5} stroke="black" strokeWidth={1} fill="#19AADE" />
        );
    };

    function calculatePlayoffWinsNeeded(year: number) {
        if (year < 1984) {
            return 14;    
        }
        else if (year < 2003) {
            return 15;
        }
        return 16;
    }

    return(
        <>
            <h2 style={{ fontWeight: 300 }}>Regular Season Total Wins + Playoffs</h2>
            <LineChart width={500} height={350} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="gameNumber" stroke={graphAxisColor} />
                <YAxis stroke={graphAxisColor} domain={[0, 82]}/>
                <Tooltip labelStyle={{ color: "black" }}/>
                <Legend />
                <Line type="monotone" dataKey="winTotal.total" stroke="#8884d8" name="Total Wins" dot={ <CustomizedDot /> }/>
                <Line dataKey="gameTotal" strokeDasharray="5 5" dot={false} name="Total # of Games"/>
            </LineChart>
            <div style={{ color: !isDarkModeToggle ? "gold" : "black", fontWeight: 300 }}>
                *Yellow Dot Indicates Championship Won
            </div>
        </>
    );
}
