export interface Player {
    G: string,
    PER: string,
    "TS%": string,
    WS: string,
    P_G: string,
    P_PER: string,
    "P_TS%": string,
    P_WS: string
}

export interface RosterData {
    url: string,
    players: {
        [name: string]: Player 
    }
};

export interface ScheduleData {
    url: string,
    games: {
        [num: string]: Game
    }
}

export interface Game {
    "Date": string,
    "Start (ET)": string,
    "Box Score": string,
    "Location": string,
    "Opponent": string,
    "Result": string,
    "PtsFor": string,
    "PtsOpp": string,
    "W": string,
    "L": string,
    "Streak": string,
}
