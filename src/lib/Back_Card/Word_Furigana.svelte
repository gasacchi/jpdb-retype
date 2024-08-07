<script lang="ts">
    import { scale } from "svelte/transition";

    export let word_furigana_element: Element | null;
    export let word_audio_element: HTMLAnchorElement | null

</script>

<div
    in:scale={{ duration: 500 }}
    class="retype-word-furigana"
>
    {#if word_audio_element}
    	  <button 
    	      on:click|preventDefault={() => word_audio_element.click()}
    	      class="retype-word-furigana-audio"
    	  >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-6 fill-blue"
            >
              <path d="M7.557 2.066A.75.75 0 0 1 8 2.75v10.5a.75.75 0 0 1-1.248.56L3.59 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.59l3.162-2.81a.75.75 0 0 1 .805-.124ZM12.95 3.05a.75.75 0 1 0-1.06 1.06 5.5 5.5 0 0 1 0 7.78.75.75 0 1 0 1.06 1.06 7 7 0 0 0 0-9.9Z" />
              <path d="M10.828 5.172a.75.75 0 1 0-1.06 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 1 0 1.06 1.06 4 4 0 0 0 0-5.656Z" />
            </svg>
    	  </button>
    {/if}

    {#if word_furigana_element}
        <div class="retype-word-furigana-content">
            {@html word_furigana_element.outerHTML}
        </div>
    {/if}
</div>

<style lang="postcss">
    .retype-word-furigana {
        @apply flex justify-center items-center;
        @apply w-full gap-2;
    }

    .retype-word-furigana-audio {
        @apply border-none shadow-none;
    }
    
    .retype-word-furigana-content :global(a) {
        @apply text-peach text-7xl font-notojp;
    }

    .retype-word-furigana-content :global(a:hover) {
        @apply border-none;
    }

    .retype-word-furigana-content :global(rt) {
        font-size: 35%;
    }
</style>
