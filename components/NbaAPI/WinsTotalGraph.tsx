import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { ScheduleData } from "../../utilities/interfaces/nbaRoster";

function calculateTotalWins(schedule: ScheduleData) {
    const scheduleData: { gameNumber: string, winTotal: number }[] = [];
    Object.keys(schedule.games).forEach(game => {
        scheduleData.push({ gameNumber: "Game #: "+game, winTotal: +schedule.games[game]["W"] });
    });
    return scheduleData;
}
  
export default function WinsTotalGraph({ schedule }: {
    schedule: ScheduleData
}): JSX.Element {
    const data = calculateTotalWins(schedule);

    return(
        <>
            <h2 style={{ fontWeight: 300 }}>Regular Season Total Wins + Playoffs</h2>
            <LineChart width={500} height={350} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="gameNumber" />
                <YAxis/>
                <Tooltip labelStyle={{ color: "black" }}/>
                <Legend />
                <Line type="monotone" dataKey="winTotal" stroke="#8884d8" />
            </LineChart>
        </>
    );
}
