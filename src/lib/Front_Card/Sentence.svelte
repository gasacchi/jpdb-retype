<script lang="ts">
    import { fade } from "svelte/transition";

    export let sentence_element: Element;  

    function render_sentence_element(node: HTMLDivElement):void
    {
        if (sentence_element)
        {
            const a_element = sentence_element.querySelectorAll("a");

            a_element?.forEach(anchor => { anchor.remove() });

            node.appendChild(sentence_element)

        }
    }
</script>

<div
    in:fade={{ duration: 1000, delay: 300 }}
    use:render_sentence_element class="retype-front-sentence"
    >
</div>

<style lang="postcss">
    div {
        @apply text-3xl text-text font-notojp;
    }    
    div :global(.highlight) {
        @apply bg-transparent border-none underline underline-offset-8 decoration-peach;
    }
</style>
