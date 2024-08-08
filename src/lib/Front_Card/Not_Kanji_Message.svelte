<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    import { front_store } from "./front_store";

    export let reveal_form_element: HTMLFormElement | null;

    let is_animated: boolean = false;


    function handle_keyup(event: KeyboardEvent): void
    {
         if (reveal_form_element && (event.key === " "))
         {
            // fix form submission canceled because the form is not connected
            // https://stackoverflow.com/questions/42053775/getting-error-form-submission-canceled-because-the-form-is-not-connected

            reveal_form_element.classList.add("hidden")

            document.querySelector("body")?.appendChild(reveal_form_element);

            const button = document.querySelector("#show-answer");

            if (button)
            {
                localStorage.setItem("retype-data", JSON.stringify($front_store));             
                (button as HTMLInputElement).click();
            }
         }
    }

    onMount(() => {
        setTimeout(() => {
            is_animated = true;
        }, 500)
    })

</script>

<svelte:window on:keyup={handle_keyup} />

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
        @apply fixed bottom-10 text-center text-text text-xl;
    }

    .retype-not-kanji-message b {
        @apply font-normal underline underline-offset-4;
        @apply decoration-peach;
    }

    kbd {
        @apply kbd kbd-sm;
    }
</style>
