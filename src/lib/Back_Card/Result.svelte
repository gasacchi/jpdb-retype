<script lang="ts">
    import { derived } from "svelte/store";
    import { back_store } from "./back_store";
    import { scale } from "svelte/transition";
    import { onMount } from "svelte";


    let is_correct = derived(back_store, (data, set) => {
        const correct = data.correct_answer === data.user_answer
        set(correct)
    });

    let is_animated: boolean = false;


    function handle_keyup(event: KeyboardEvent): void
    {
        if (!$back_store.is_reveal)
        {
            if (!$is_correct && (event.key === "t"))
            {
                window.history.back();
            }

            else if (event.key === " ")
            {
                back_store.update(data => {
                   data.is_reveal = true;
                   return data; 
                });
            }
        }
    }

    onMount(() => {
        setTimeout(() => {
            is_animated = true;
        }, 500);
    })
    
</script>

<svelte:window on:keyup={handle_keyup} />

{#if is_animated}
    <div in:scale={ { duration: 500 } } class="retype-result">
        {#if $is_correct}
            <div class="retype-result-correct">
                <span>Your answer</span>
                <span>{$back_store.user_answer}</span>
                <span>is</span>
                <span>correct</span>
            </div>
        {:else}
            <div class="retype-result-incorrect">
                <span>Your answer</span>
                <span>{$back_store.user_answer}</span>
                <span>is</span>
                <span>incorrect</span>
            </div>
        {/if}
    </div>

    <div in:scale={ { duration: 500, delay: 300 } } class="retype-message">
        {#if $is_correct}
            <div class="retype-message-correct">
                <div>
                    <span>Now, try to recall its</span>
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
        {:else}
            <div class="retype-message-incorrect">
                <div>
                    <span>Is this typo?</span>
                </div>
                <div>
                    <span>Press</span>
                    <kbd>t</kbd>
                    <span>to try again</span>
                    <span>or</span>
                    <kbd>space</kbd>
                    <span>to reveal the card</span>
                </div>
            </div>
        {/if}
    </div>
{/if}



<style lang="postcss">

    .retype-result {
        @apply text-center;
    }

    .retype-result-correct,
    .retype-result-incorrect {
        @apply flex gap-1 text-text text-2xl mt-4;
    }

    .retype-result-correct>span:nth-child(2),
    .retype-result-incorrect>span:nth-child(2) {
        @apply font-notojp text-peach;
    }

    .retype-result-correct>span:nth-child(4) {
        @apply text-green;
    }

    .retype-result-incorrect>span:nth-child(4) {
        @apply text-red;
    }

    .retype-result-incorrect>span:nth-child(6) {
        @apply text-green;
    }

    .retype-message {
        @apply mt-4 text-center text-text text-xl;
    }

    .retype-message b {
        @apply font-normal underline underline-offset-4;
        @apply decoration-peach;
    }

    kbd {
        @apply kbd kbd-sm;
    }

</style>
