<script lang="ts">
    export let word_element: Element | null;
</script>

<div class="retype-front-word">
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
