<script lang="ts">
    import { fade } from "svelte/transition";
    import * as wanakana from "wanakana";

    let retype_input: HTMLInputElement;
    let error: boolean = false;
    let error_message: string = "";


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

    function reset_error():void
    {
        setTimeout(() =>
        {
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
            console.log(value);
        }

        reset_error();
    }

    function handle_submit(): void
    {
        validate_input(retype_input.value);
    }
</script>


<form action="" class="retype-form" on:submit|preventDefault={handle_submit}>
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
        @apply bg-base;
    }
    input:focus {
        @apply border border-peach;
    }
</style>
