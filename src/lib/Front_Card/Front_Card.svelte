<script lang="ts">
    import Retype from "./Retype.svelte";
    import Sentence from "./Sentence.svelte";
    import Word from "./Word.svelte";

    export let sentence_element: Element | null;
    export let word_element: Element | null;
</script>

<Word {word_element} />

<Sentence {sentence_element} />

<Retype />
