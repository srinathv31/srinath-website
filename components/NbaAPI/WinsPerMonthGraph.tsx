import { useContext } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { ScheduleData } from "../../utilities/interfaces/nbaRoster";
import { globalPropsContext } from "../ContextHooks/GlobalPropsContext";

function calculateMonthlyWins(schedule: ScheduleData) {
    const scheduleMonthlyData: { "month": string, "W": number, "L": number }[] = [];
    Object.values(schedule.games).forEach(gamesArr => {
        gamesArr.forEach(game => {
            const gameMonth = game["Date"].substring(5,8);
            if (!scheduleMonthlyData.find(item => item.month === gameMonth)) {
                scheduleMonthlyData.push({ "month": gameMonth, "W": 0, "L": 0 });
            }
            const gameResult: "W" | "L" = game["Result"] as "W" | "L";
            scheduleMonthlyData[scheduleMonthlyData.length - 1][gameResult]++;
        });
    });
    return scheduleMonthlyData;
}
  
export default function WinsTotalGraph({ schedule }: {
    schedule: ScheduleData
}): JSX.Element {
    const data = calculateMonthlyWins(schedule);
    const { isDarkModeToggle } = useContext(globalPropsContext);
    const graphAxisColor = !isDarkModeToggle ? "whitesmoke" : "#5d5d5d";
    
    return(
        <>
            <h2 style={{ fontWeight: 300 }}>Monthly Win Totals + Playoffs</h2>
            <BarChart width={600} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke={graphAxisColor}/>
                <YAxis stroke={graphAxisColor}/>
                <Tooltip labelStyle={{ color: "black" }} />
                <Legend />
                <Bar dataKey="W" fill="#19AADE" />
                <Bar dataKey="L" fill="#DE542C" />
            </BarChart>
        </>
    );
}
