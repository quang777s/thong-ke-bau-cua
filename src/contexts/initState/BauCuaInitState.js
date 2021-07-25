import { BAU, CUA, TOM, CA, NAI, GA } from "./types";

const BauCuaInitState = {
    data: [
        { name: 'Bầu', game_value: 0, total: 0, id: BAU },
        { name: 'Cua', game_value: 0, total: 0, id: CUA },
        { name: 'Cá', game_value: 0, total: 0, id: TOM },
        { name: 'Tôm', game_value: 0, total: 0, id: CA },
        { name: 'Nai', game_value: 0, total: 0, id: NAI },
        { name: 'Gà', game_value: 0, total: 0, id: GA },
    ],
    gameClick: 0,
    gamesCount: 0,
    lastGame: [],
    currentGame: [],
    addGameResult: () => {},
    resetGame: () => {},
    deleteLastGame: () => {},
};
export default BauCuaInitState;