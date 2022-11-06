import config from "@/config";
import stringUtilities from "@/utilities/stringUtilities";
import axios, { type AxiosResponse } from "axios";

const api = axios.create({baseURL: config.baseApiUrl})
const { replaceSpaceWithPlusSign } = stringUtilities;

export const listQuotesForCharacter = (characterName: string) => {
    return api.get(`/quote?author=${replaceSpaceWithPlusSign(characterName)}`)
}
