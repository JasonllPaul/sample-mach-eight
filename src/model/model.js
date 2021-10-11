import {makePublicRequest} from "../js/clientImpl";

const {
    SERVICE_GET_MACH_EIGHT_PLAYERS_DATA
} = process.env;


export const getPlayersData = async () => {
    try {
        const res = makePublicRequest("https://mach-eight.uc.r.appspot.com/", 'GET');
        return JSON.parse(await res);
    } catch (e) {
        return {}
    }
};