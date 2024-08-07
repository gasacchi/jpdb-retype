<script lang="ts">
    import { onMount } from "svelte";


    import { fade } from "svelte/transition";

    let is_animated: boolean = false;

    onMount(() => {
        setTimeout(() => {
            is_animated = true;
        }, 500)
    })

</script>

{#if is_animated}

    <div
        in:fade={{ duration:1000, delay: 500 }}
        class="retype-not-kanji-message"
    >
        <div>
            <span>Word not contains Kanji, just try to recall its</span>
            <b>meaning</b>
            <span>&</span>
            <b>pitch accent</b>
        </div>
        <div>
            <span>Press</span>
            <kbd>space</kbd>
            <span>to reveal the card</span>
        </div>
    </div>    
	
{/if}

<style lang="postcss">
    .retype-not-kanji-message {
        @apply fixed bottom-8 mt-8 text-center text-text text-xl;
    }

    .retype-not-kanji-message b {
        @apply font-normal underline underline-offset-4;
        @apply decoration-peach;
    }

    kbd {
        @apply kbd kbd-sm;
    }
</style>
