<script lang="ts">
    import { fade, slide } from "svelte/transition";

    import type { grade_element } from "../../back_card";

    import GradeConfirm from "./Grade_Confirm.svelte";
  
    export let grade_element: grade_element;  


    let selected_grade: string | null = null;
    let selected_grade_element: HTMLInputElement | null = null;
    let confirm_open: boolean = false;

    function confirm_close(): void
    {
        confirm_open = false;
    }

    function get_name(name: string): string
    {
        const new_name = name.includes("_")
                         ? name.split("_").map(n => {
                             return n[0].toUpperCase() + n.substring(1);
                         }).join(" ")
                         : name[0].toUpperCase() + name.substring(1);

        return new_name;
    }

    function get_keymap(name: string): string | null
    {
        switch (name)
        {
            case "nothing":
            case "something":
            case "hard":
            case "okay":
            case "blacklist":
            case "never_forget":
                return name[0]
            case "easy":
                return "y"
            default:
                return null
        }
    }

    function handle_click(name: string, element: Element | null): void
    {
        selected_grade = name;
        selected_grade_element = element as HTMLInputElement;
        confirm_open = true;
    }

    function handle_keyup(event: KeyboardEvent): void
    {
        switch (event.key)
        {
            case "n":
            case "1":
                handle_click("nothing", grade_element.nothing);
                break;
            case "s":
            case "2":
                handle_click("something", grade_element.something);
                break;
            case "h":
            case "3":
                handle_click("hard", grade_element.hard);
                break;
            case "o":
            case "4":
                handle_click("okay", grade_element.okay);
                break;
            case "y":
            case "5":
                handle_click("easy", grade_element.easy);
                break;
            case "b":
            case "6":
                handle_click("blacklist", grade_element.blacklist);
                break;
            case "f":
            case "7":
                handle_click("never_forget", grade_element.never_forget);
                break;
        }
    }

</script>


<svelte:document on:keyup={handle_keyup} />

{#if grade_element}

    <div class="retype-grade">
        {#each Object.entries(grade_element) as [name, element] }
        	<button
        	    class={`retype-grade-${name}`}
        	    on:click={() => handle_click(name, element)}
        	>
        	    {#if get_keymap(name)}
        	        <kbd>{get_keymap(name)}</kbd>
        	    {/if}
        	    <span>{get_name(name)}</span>
        	</button>
        {/each}
    </div>
	
{/if}

{#if confirm_open}
    <GradeConfirm
        {selected_grade}
        {selected_grade_element}
        {confirm_close}
    />
{/if}


<style lang="postcss">
    .retype-grade {
        @apply flex flex-col gap-2;
        @apply fixed left-4 top-1/2 -translate-y-1/2;
    }

    kbd {
        @apply kbd kbd-xs bg-base;
    }

    button {
        @apply text-xs px-3 py-1 flex items-center gap-1;
    }

    .retype-grade-nothing {
        @apply text-red border-red;
    }
    .retype-grade-something {
        @apply text-mauve border-mauve;
    }
    .retype-grade-hard {
        @apply text-peach border-peach;
    }
    .retype-grade-okay {
        @apply text-blue border-blue;
    }
    .retype-grade-easy {
        @apply text-green border-green;
    }
    .retype-grade-blacklist {
        @apply text-overlay2 border-overlay2;
    }
    .retype-grade-never_forget {
        @apply text-overlay1 border-overlay1;
    }
</style>
