import config from "@/config";
import axios, { type AxiosResponse } from "axios";
import type CharacterReviewDto from "./models/CharacterReviewDto";
import type CreateCharacterReviewRequestDto from "./models/CreateCharacterReviewRequestDto";

const api = axios.create({baseURL: config.baseApiUrl})

export const postCharacterReview = (request: CreateCharacterReviewRequestDto): Promise<AxiosResponse<CharacterReviewDto|any>> => {
    return api.post(`/characters/${request.char_id}/review`)
}
