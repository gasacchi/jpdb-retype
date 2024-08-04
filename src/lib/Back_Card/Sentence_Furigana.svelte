<script lang="ts">
    export let sentence_furigana_element: Element | null;
    export let sentence_audio_element: HTMLAnchorElement | null;
    export let sentence_edit_element: HTMLAnchorElement | null;
    export let sentence_translation_element: Element | null;


    function sentence_furigana_render(node: HTMLDivElement): void
    {
        if (sentence_furigana_element)
        {
            const anchor = sentence_furigana_element.querySelectorAll("a");

            if (anchor)
                anchor.forEach(a => a.remove());

            node.appendChild(sentence_furigana_element);
        }
    }
</script>

<div class="retype-sentence-furigana">

    {#if sentence_audio_element}
    	  <button 
    	      on:click|preventDefault={() => sentence_audio_element.click()}
    	      class="retype-sentence-furigana-audio"
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

    {#if sentence_furigana_element}
    	<div use:sentence_furigana_render class="retype-sentence-furigana-content"></div>
    {/if}

    {#if sentence_edit_element}
    	  <button 
    	      on:click|preventDefault={() => sentence_edit_element.click()}
    	      class="retype-sentence-furigana-edit"
    	  >
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-6 fill-blue -mb-3 -ml-3"
            >
                <path fill-rule="evenodd" d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z" clip-rule="evenodd" />
            </svg>
    	  </button>
    {/if}
</div>

<div class="retype-sentence-translation">
    {#if sentence_translation_element}
        <div class="retype-sentence-translation-content">
            {@html sentence_translation_element.innerHTML}
        </div>
    {/if}
</div>

<style lang="postcss">
    .retype-sentence-furigana {
        @apply flex gap-2 mt-8;
    }

    .retype-sentence-furigana-audio,
    .retype-sentence-furigana-edit {
        @apply border-none shadow-none;
    }

    .retype-sentence-furigana-content {
        @apply text-text text-3xl font-notojp;
    }

    .retype-sentence-furigana-content :global(.highlight) {
        @apply bg-transparent underline underline-offset-8;
        @apply decoration-peach;
    }

    .retype-sentence-translation {
        @apply mt-4 text-subtext1;
    }

</style>
