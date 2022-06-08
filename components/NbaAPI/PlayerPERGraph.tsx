import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { RosterData } from "../../utilities/interfaces/nbaRoster";

function calculateTeamPER(roster: RosterData) {
    const teamPERData: { "name": string, "PER": number }[] = [];
    Object.keys(roster.players).forEach(player => {
        teamPERData.push({ "name": player, "PER": +roster.players[player].PER });
    });
    return teamPERData;
}
  
export default function WinsTotalGraph({ roster }: {
    roster: RosterData
}): JSX.Element {
    const data = calculateTeamPER(roster);

    return(
        <>
            <h2 style={{ fontWeight: 300 }}>Player PER Ratings</h2>
            <BarChart width={600} height={350} data={data}>
                <defs>
                    <linearGradient
                        id="colorUv"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100%"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#F0A58F" />
                        <stop offset=".5" stopColor="#EB548C" />
                        <stop offset="1" stopColor="#AF4BCE" />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip labelStyle={{ color: "black" }} itemStyle={{ color: "#AF4BCE" }} />
                <Legend />
                <Bar dataKey="PER" fill="url(#colorUv)" />
            </BarChart>
        </>
    );
}
