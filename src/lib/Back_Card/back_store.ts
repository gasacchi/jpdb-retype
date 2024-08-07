import { writable } from "svelte/store";

import type { data as front_data } from "../Front_Card/front_store";

export type data =
{
    is_reveal: boolean;
    word?: string;
    time_start?: string;
    user_answer?: string;
    correct_answer?: string,
}

const default_value: data =
{
    is_reveal: false,
    time_start: undefined,
    user_answer: undefined,
    correct_answer: undefined,
    word: undefined
}

export const back_store = writable<data>(default_value, (set) => {
        const data = localStorage.getItem("retype-data");

        if (data)
        {
            const { is_kanji, time_start, user_answer, word} : front_data = JSON.parse(data);
            const is_reveal = is_kanji === true ? false : true;
            set({ is_reveal, time_start, user_answer, word });
        }
});
