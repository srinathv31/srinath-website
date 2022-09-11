import axios from "axios";
import { RosterData, ScheduleData } from "../interfaces/nbaRoster";

export function getRosterDataAPI(setRoster: React.Dispatch<React.SetStateAction<RosterData>>, year: string, team: string) {
    const options = {
        method: "GET",
        url: `https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/elements/${team}/${year}/Roster`,
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
}

export function getScheduleDataAPI(setSchedule: React.Dispatch<React.SetStateAction<ScheduleData>>, year: string, team: string) {
    const options = {
        method: "GET",
        url: `https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/elements/${team}/${year}/Schedule`,
        headers: {
            "X-RapidAPI-Host": "1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com",
            "X-RapidAPI-Key": "c0b14705ddmshe3175ea352cb808p17750fjsn3d9fcaa205f9"
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
        setSchedule(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
