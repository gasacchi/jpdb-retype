<script lang="ts">
    export let sentence_element: Element | null;  

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

<div use:render_sentence_element class="retype-front-sentence">
</div>

<style lang="postcss">
    div {
        @apply text-3xl text-text
    }    
    div :global(.highlight) {
        @apply bg-transparent border-none underline underline-offset-8 decoration-peach;
    }
</style>
