export default interface CreateCharacterReviewRequestDto {
    char_id: string;
    name: string;
    date: string;
    review: string;
    rating: number;
}