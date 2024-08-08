<script lang="ts">
    import { onMount } from "svelte";

    import * as wanakana from "wanakana";

    import Retype from "./Retype.svelte";
    import Sentence from "./Sentence.svelte";
    import Word from "./Word.svelte";
    import NotKanjiMessage from "./Not_Kanji_Message.svelte";

    import { front_store } from "./front_store";


    export let sentence_element: Element | null;
    export let word_element: Element | null;
    export let reveal_form_element: HTMLFormElement | null;

    let animated: boolean = false;
    let is_kanji: boolean;

    function kanji_mode(): boolean
    {
        const word = word_element
            ?.textContent
            ?.split("")
            .map(wanakana.isKanji)
            .reduce((prev, curr) => prev || curr)

        return word ?? false;
    }

    onMount(() => 
    {
        is_kanji = kanji_mode();

        front_store.update(data => {
            data.is_kanji = is_kanji;
            data.time_start = new Date().toISOString();
            data.word = word_element?.textContent ?? undefined;
            return data
        });

        setTimeout(() => {
            animated = true;
        }, 300)
    });

</script>

{#if animated}

    <Word
        {word_element}
    />

    <Sentence
        {sentence_element}
    />

{/if}

{#if is_kanji}

    <Retype
        {reveal_form_element}
    />

{:else}

    <NotKanjiMessage
        {reveal_form_element}
    />

{/if}
