<script lang="ts">
  import type { grade_elements, input_element } from "./common";
  import GradeModalConfirm from "./Grade_Modal_Confirm.svelte";

  export let grade_elements: grade_elements;

  let show_modal_confirm = false;
  let selected_grade: input_element = null;

  function close_modal() {
    show_modal_confirm = false;
  }

  function handle_keyup(e: KeyboardEvent) {
    switch (e.key) {
      case "n":
        show_modal_confirm = true;
        selected_grade = grade_elements.nothing;
        break;
      case "s":
        show_modal_confirm = true;
        selected_grade = grade_elements.something;
        break;
      case "h":
        show_modal_confirm = true;
        selected_grade = grade_elements.hard;
        break;
      case "o":
        show_modal_confirm = true;
        selected_grade = grade_elements.okay;
        break;
      case "e":
        show_modal_confirm = true;
        selected_grade = grade_elements.easy;
        break;
      case "b":
        show_modal_confirm = true;
        selected_grade = grade_elements.blacklist;
        break;
      case "f":
        show_modal_confirm = true;
        selected_grade = grade_elements.never_forget;
        break;
    }
  }
</script>

<svelte:window on:keyup={handle_keyup} />

{#if show_modal_confirm}
  <GradeModalConfirm {selected_grade} {close_modal} />
{/if}

<div class="retype-grade fixed bottom-6">
  <div class="flex gap-4 justify-center items-center">
    <button
      class="border-red text-red"
      on:click={() => grade_elements.nothing?.click()}
    >
      <kbd>n</kbd>
      <span>Nothing</span>
    </button>
    <button
      class="border-mauve text-mauve"
      on:click={() => grade_elements.something?.click()}
    >
      <kbd>s</kbd>
      <span>Something</span>
    </button>
    <button
      class="border-peach text-peach"
      on:click={() => grade_elements.hard?.click()}
    >
      <kbd>h</kbd>
      <span>Hard</span>
    </button>
    <button
      class="border-blue text-blue"
      on:click={() => grade_elements.okay?.click()}
    >
      <kbd>o</kbd>
      <span>Okay</span>
    </button>
    <button
      class="border-green text-green"
      on:click={() => grade_elements.easy?.click()}
    >
      <kbd>e</kbd>
      <span>Easy</span>
    </button>
    <button
      class="border-overlay2 text-overlay2"
      on:click={() => grade_elements.blacklist?.click()}
    >
      <kbd>b</kbd>
      <span>Blacklist</span>
    </button>
    <button
      class="border-overlay1 text-overlay1"
      on:click={() => grade_elements.never_forget?.click()}
    >
      <kbd>f</kbd>
      <span>Never Forget</span>
    </button>
  </div>
</div>

<style lang="postcss">
  button {
    @apply !border rounded-md px-4 flex items-center gap-2;
  }
  kbd {
    @apply bg-base px-2 py-1 rounded-sm text-sm;
  }
</style>
