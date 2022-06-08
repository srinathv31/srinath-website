import { Button, ButtonGroup } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import { RosterData, ScheduleData } from "../../utilities/interfaces/nbaRoster";
import PlayerPERGraph from "./PlayerPERGraph";
import WinsTotalGraph from "./WinsTotalGraph";
const WinsPerMonthGraph = dynamic(() => import("../../components/NbaAPI/WinsPerMonthGraph"), {
    ssr: false,
});

export default function GraphSelector({ schedule, roster }: {
    schedule: ScheduleData,
    roster: RosterData
}): JSX.Element {
    const [graphType, setGraphType] = useState<number>(1);

    const buttonList: { name: string, graph: number }[] = [
        { name: "Monthly Wins", graph: 1 },
        { name: "Total Wins", graph: 2 },
        { name: "Player PER", graph: 3 }
    ];

    return(
        <>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {buttonList.map((item, index) => {
                    return (
                        <Button onClick={() => setGraphType(item.graph)} key={index}>{item.name}</Button>
                    );
                })}
            </ButtonGroup>
            {graphType === 1 && <WinsPerMonthGraph schedule={schedule} />}
            {graphType === 2 && <WinsTotalGraph schedule={schedule}/>}
            {graphType === 3 && <PlayerPERGraph roster={roster}/>}
        </>
    );
}
