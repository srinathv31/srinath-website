import axios from "axios";
import { RosterData, ScheduleData } from "../interfaces/nbaRoster";
import { nbaRapidHost, nbaRapidKey } from "../secretAPIKeys/nbaDataKey";

export function getRosterDataAPI( setRoster: (r: RosterData) => void, year: string, team: string ) {
    const options = {
        method: "GET",
        url: `https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/elements/${team}/${year}/Roster`,
        headers: {
            "X-RapidAPI-Host": nbaRapidHost,
            "X-RapidAPI-Key": nbaRapidKey
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
        setRoster(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export function getScheduleDataAPI( setSchedule: (s: ScheduleData) => void, year: string, team: string ) {
    const options = {
        method: "GET",
        url: `https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/elements/${team}/${year}/Schedule`,
        headers: {
            "X-RapidAPI-Host": nbaRapidHost,
            "X-RapidAPI-Key": nbaRapidKey
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
        setSchedule(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
