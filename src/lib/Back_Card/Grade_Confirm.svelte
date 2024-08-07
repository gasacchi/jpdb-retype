<script lang="ts">
    import { back_store } from "./back_store";

    export let selected_grade: string | null;
    export let selected_grade_element: HTMLInputElement | null;
    export let confirm_close: () => void;

    function card_review(): void
    {
        const {time_start, word} = $back_store
    }

    function handle_keyup(event: KeyboardEvent): void
    {
        if (selected_grade && selected_grade_element)
        {
            switch (event.key)
            {
                case "Enter":
                    card_review();
                    break;
                case "c":
                case "Esc":
                    confirm_close();
                    break;
            }
        }
    }
</script>

<svelte:window on:keyup={handle_keyup} />

<input type="checkbox" id="grade_confirm" class="modal-toggle" />
<div
    class="modal modal-open"
    role="dialog"
>
    <div class="retype-grade-confirm">
        <h3 class="retype-grade-confirm-title">Confirm</h3>
        <div class="retype-grade-confirm-message">
          You're selecting <span>{selected_grade}</span>, are you sure?  
        </div>
        <div class="retype-grade-confirm-buttons">
        	<button
        	    class={`retype-grade-confirm-okay`}
        	    on:click={() => card_review()}
        	>
    	        <kbd>enter</kbd>
        	    <span>Confirm</span>
        	</button>
        	<button
        	    class={`retype-grade-confirm-cancel`}
        	    on:click={() => confirm_close()}
        	>
    	        <kbd>c</kbd>
        	    <span>Cancel</span>
        	</button>
        </div>
    </div>
    <label class="modal-backdrop" for="grade_confirm">Close</label>
</div>

<style lang="postcss">
    kbd {
        @apply kbd kbd-xs bg-base;
    }

    div.retype-grade-confirm {
        @apply modal-box bg-crust text-center;
        @apply flex flex-col gap-4;
    }

    .retype-grade-confirm-title {
        @apply text-peach text-2xl font-bold;
    }

    .retype-grade-confirm-message {
        @apply text-text;
    }

    .retype-grade-confirm-message span {
        @apply font-semibold underline decoration-peach;
    }

    .retype-grade-confirm-buttons {
        @apply flex justify-center items-center;
        @apply gap-10;
    }

    button {
        @apply text-xs px-3 py-1 flex items-center gap-1;
    }

    .retype-grade-confirm-okay {
        @apply border-green text-green;
    }

    .retype-grade-confirm-cancel {
        @apply border-red text-red;
    }
</style>
