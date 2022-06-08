import { Button, ButtonGroup } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ScheduleData } from "../../utilities/interfaces/nbaRoster";
import WinsTotalGraph from "./WinsTotalGraph";
const WinsPerMonthGraph = dynamic(() => import("../../components/NbaAPI/WinsPerMonthGraph"), {
    ssr: false,
});

export default function GraphSelector({ schedule }: {
    schedule: ScheduleData
}): JSX.Element {
    const [graphType, setGraphType] = useState<JSX.Element>(<WinsPerMonthGraph schedule={schedule} />);

    const buttonList: { name: string, graph: JSX.Element }[] = [
        { name: "Monthly Wins", graph: <WinsPerMonthGraph schedule={schedule} /> },
        { name: "Total Wins", graph: <WinsTotalGraph schedule={schedule}/> }
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
            {graphType}
        </>
    );
}
