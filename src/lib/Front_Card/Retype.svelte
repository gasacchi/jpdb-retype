<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    import * as wanakana from "wanakana";
    import { front_store } from "./front_store";

    export let reveal_button_element: HTMLInputElement | null;

    let retype_input: HTMLInputElement;
    let error: boolean = false;
    let error_message: string = "";
    let is_animated: boolean = false;


    function wanakana_init(node: HTMLInputElement): { destroy(): void }
    {
        wanakana.bind(node);

        return {
            destroy(): void
            {
                wanakana.unbind(node);
            }
        }
    }

    function send_data_to_back_card(answer: string): void
    {
         front_store.update(data => {
             data.user_answer = answer;
             return data
         });

         if (reveal_button_element)
         {
            localStorage.setItem("retype-data", JSON.stringify($front_store));             

            reveal_button_element.click()
         }
    }

    function reset_error():void
    {
        setTimeout(() => {
            error = false;
            error_message = "";
        }, 1500)
    }

    function validate_input(value: string): void
    {
        if (value === "" || value === " ")
        {
            error = true;
            error_message = "Input cannot be empty";
        }
        else if (!wanakana.isHiragana(value))
        {
            error = true;
            error_message = "Input only accept Hiragana";
        }
        else
        {
            send_data_to_back_card(value);
        }

        reset_error();
    }

    function handle_submit(): void
    {
        validate_input(retype_input.value);
    }

    onMount(() => {
        setTimeout(() => {
            is_animated = true;
        }, 300)
    })
</script>


{#if is_animated}

    <form
        in:fade={{ duration: 1000, delay: 500 }}
        class="retype-form"
        on:submit|preventDefault={handle_submit}
    >

        {#if error}

        	<span in:fade>{error_message}</span>

        {/if}
        <!-- svelte-ignore a11y-autofocus -->
        <input
            autofocus
            bind:this={retype_input}
            use:wanakana_init
            type="text"
        >
    </form>

{/if}


<style lang="postcss">

    form {
        @apply fixed bottom-6 w-full;
        @apply flex flex-col gap-2 items-center;
    }

    form > span {
        @apply text-red text-xl font-semibold;
    }

    input {
        @apply text-center text-2xl text-peach;
        @apply outline-none border-none rounded-none;
        @apply bg-base font-notojp;
    }

    input:focus {
        @apply border border-peach;
    }

</style>
