<script lang="ts">
    import { onMount } from "svelte";

    import Retype from "./Retype.svelte";
    import Sentence from "./Sentence.svelte";
    import Word from "./Word.svelte";


    export let sentence_element: Element;
    export let word_element: Element;
    export let reveal_button_element: Element;

    let animated: boolean = false;

    function start_timer(): void
    {
       const timer_start = new Date().toISOString(); 
       const word = word_element?.textContent || null;

       window.localStorage.setItem("retype-time-start", JSON.stringify(timer_start));
       window.localStorage.setItem("retype-word", JSON.stringify(word));
    }

    onMount(() => 
    {
        start_timer();

        setTimeout(() => {
            animated = true;
        }, 300)
    });
</script>

{#if animated}
<Word {word_element} />

<Sentence {sentence_element} />
{/if}

<Retype {reveal_button_element} />
