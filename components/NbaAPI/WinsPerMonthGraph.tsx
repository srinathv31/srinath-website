import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { ScheduleData } from "../../utilities/interfaces/nbaRoster";

function calculateMonthlyWins(schedule: ScheduleData) {
    const scheduleMonthlyData: { "month": string, "W": number, "L": number }[] = [];
    Object.keys(schedule.games).forEach(game => {
        const gameMonth = schedule.games[game]["Date"].substring(5,8);
        if (!scheduleMonthlyData.find(item => item.month === gameMonth)) {
            scheduleMonthlyData.push({ "month": gameMonth, "W": 0, "L": 0 });
        }
        const gameResult: "W" | "L" = schedule.games[game]["Result"] as "W" | "L";
        scheduleMonthlyData[scheduleMonthlyData.length - 1][gameResult]++;
    });
    return scheduleMonthlyData;
}
  
export default function WinsTotalGraph({ schedule }: {
    schedule: ScheduleData
}): JSX.Element {
    const data = calculateMonthlyWins(schedule);

    return(
        <>
            <h2 style={{ fontWeight: 300 }}>Monthly Win Totals + Playoffs</h2>
            <BarChart width={600} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip labelStyle={{ color: "black" }} />
                <Legend />
                <Bar dataKey="W" fill="#19AADE" />
                <Bar dataKey="L" fill="#DE542C" />
            </BarChart>
        </>
    );
}
