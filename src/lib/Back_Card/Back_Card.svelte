<script lang="ts">
    import SentenceFurigana from "./Sentence_Furigana.svelte";
    import Glossary from "./Glossary.svelte";
    import WordFurigana from "./Word_Furigana.svelte";

    export let word_furigana_element;
    export let word_audio_element
    export let sentence_furigana_element;
    export let sentence_audio_element;
    export let sentence_edit_element;
    export let sentence_translation_element;
    export let meanings_element;
    export let kanji_used_element;
    export let pitch_accent_container_element;
    export let pitch_accent_nodes;
    export let composed_vocabulary_element;
    export let examples_element;
    export let grade_element;
</script>

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
