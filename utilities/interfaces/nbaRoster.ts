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

