<script lang="ts">
    import { fade } from "svelte/transition";

    export let word_element: Element;
</script>

<div class="retype-front-word" in:fade={{ duration: 1000 }}>
    {#if word_element}
        {word_element.textContent}
    	{:else}
    	  "Word no found"
    {/if}
</div>

<style lang="postcss">
    div {
        @apply text-9xl text-peach font-notojp;
    }    
</style>
