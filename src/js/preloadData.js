import {getPlayersData} from "../model/model";


export const getAllPlayersData = async () => {
    let res = await getPlayersData();
    return res?.values;
}