import config from "@/config";
import axios, { type AxiosResponse } from "axios";
import type CharacterDto from "./models/CharacterDto";
import type ListCharactersDto from "./models/ListCharactersDto";
const api = axios.create({baseURL: config.baseApiUrl})

export const listCharacters = (): Promise<AxiosResponse<ListCharactersDto|any>> => {
    return api.get('/characters');
}

export const getCharacter = (id: number): Promise<AxiosResponse<CharacterDto|any>> => {
    return api.get(`/characters/${id}`)
}

