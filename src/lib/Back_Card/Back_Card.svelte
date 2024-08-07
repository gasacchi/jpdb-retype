<script lang="ts">
    import { onMount } from "svelte";

    import Examples from "./Examples.svelte";
    import Glossary from "./Glossary.svelte";
    import Grade from "./Grade.svelte";
    import Result from "./Result.svelte";
    import SentenceFurigana from "./Sentence_Furigana.svelte";
    import WordFurigana from "./Word_Furigana.svelte";

    import type { grade_element } from "../../back_card";
    import {back_store} from "./back_store";

    export let word_furigana_element: Element | null;
    export let word_audio_element: HTMLAnchorElement | null;
    export let sentence_furigana_element: Element | null;
    export let sentence_audio_element: HTMLAnchorElement | null;
    export let sentence_edit_element: HTMLAnchorElement | null;
    export let sentence_translation_element: Element | null;
    export let meanings_element: Element | null;
    export let kanji_used_element: Element | null;
    export let pitch_accent_container_element: Element | null;
    export let pitch_accent_nodes: NodeListOf<Element> | null;
    export let composed_vocabulary_element: Element | null;
    export let examples_container_element: Element | null;
    export let examples_nodes: NodeListOf<Element> | null;
    export let grade_element: grade_element;

    let open_example: boolean = false;

    function close_examples(): void
    {
        open_example = false;
    }

    function handle_keyup(event: KeyboardEvent): void
    {
        if ($back_store.is_reveal)
        {
            switch (event.key)
            {
                case "x":
                    open_example = !open_example;
                    break;
                case "Escape":
                    open_example = false;
                    break;
            }
        }
    }

    function get_correct_answer(): string | undefined
    {
        if (pitch_accent_nodes && (pitch_accent_nodes.length > 0)) {
            const word_reading = pitch_accent_nodes[0];
            return word_reading.textContent || undefined;
        }
        return undefined
    }

    onMount(() => {
        back_store.update(data => {
            data.correct_answer = get_correct_answer();
            return data;
        })

    });
    
</script>

<svelte:window
    on:keyup={handle_keyup}
/>

{#if $back_store.is_reveal}
    <WordFurigana
        {word_furigana_element}
        {word_audio_element}
    />

    <SentenceFurigana
        {sentence_furigana_element}
        {sentence_audio_element}
        {sentence_edit_element}
        {sentence_translation_element}
    />

    <Glossary
        {meanings_element}
        {pitch_accent_container_element}
        {pitch_accent_nodes}
        {kanji_used_element}
        {composed_vocabulary_element}
    />
{/if}

{#if open_example}
    <Examples
        {examples_container_element}
        {examples_nodes}
        {close_examples}
    />
{/if}

{#if !$back_store.is_reveal}
    <Result />
{/if}

{#if $back_store.is_reveal}
    <Grade
        {grade_element}
    />
{/if}

