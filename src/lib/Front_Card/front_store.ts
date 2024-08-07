import { writable } from "svelte/store";

export type data = 
{
    is_kanji: boolean;
    time_start?: string;
    word?: string;
    user_answer?: string;
}

export const front_store = writable<data>({
    is_kanji: true,
    time_start: undefined,
    word: undefined,
    user_answer: undefined,
})
