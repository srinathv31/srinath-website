import axios from "axios";
import { RosterData, ScheduleData } from "../interfaces/nbaRoster";

export async function getTeamData(year: string, team: string) {
    const options = {
        method: "GET",
        url: `https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/v1/nba/${team}/${year}`,
        headers: {
            "X-RapidAPI-Key": "c0b14705ddmshe3175ea352cb808p17750fjsn3d9fcaa205f9",
            "X-RapidAPI-Host": "1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com"
        }
    };

    return await axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data[team][year] as { Roster: RosterData, Schedule: ScheduleData };
    }).catch(function (error) {
        console.error(error);
        return null;
    });
}

export async function getRosterDataAPI(setRoster: React.Dispatch<React.SetStateAction<RosterData>>, year: string, team: string) {
    console.log(team);
    console.log(year);
    const options = {
        method: "GET",
        url: `https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/v1/nba/${team}/${year}`,
        headers: {
            "X-RapidAPI-Key": "c0b14705ddmshe3175ea352cb808p17750fjsn3d9fcaa205f9",
            "X-RapidAPI-Host": "1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com"
        }
    };
    const data = await axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data;
        setRoster(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    console.log("🚀 ~ data ~ data:", data);
}

export async function getScheduleDataAPI(setSchedule: React.Dispatch<React.SetStateAction<ScheduleData>>, year: string, team: string) {
    const options = {
        method: "GET",
        url: `https://nba-api-go-production.up.railway.app/v1/nba/${team}/${year}/Roster`
    };
    const data = await axios.request(options).then(function (response) {
        console.log(response.data);
        setSchedule(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
