
<script lang="ts">
  import { get_element } from "./common";
  import { app_state } from "./store";

  function input_focus() {
    const retype_input = get_element(".retype-input") as HTMLInputElement;

    setTimeout(() => {
      retype_input?.focus();
    }, 500);
  }

  function handle_keydown(e: KeyboardEvent) {
    if (e.key === " ") {
      app_state.update((state) => ({ ...state, is_reveal: true }));
    }

    if (e.key === "r" && !$app_state.is_correct) {
      app_state.update((state) => ({ ...state, is_answered: false }));
      input_focus();
    }
  }
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="retype-answer-result-message mt-6 flex flex-col items-center">
  <div class="">
    {#if $app_state.is_correct}
      Now try to recall its <b class="">meaning</b> &
      <b class="">pitch accent</b>
    {:else}
      Is this typo? press <kbd class="bg-base px-2 py-1 rounded-sm text-sm"
        >r</kbd
      >
      to retry or <kbd class="bg-base px-2 py-1 rounded-sm text-sm">space</kbd> to
      reveal the definitions
    {/if}
  </div>
  {#if $app_state.is_correct}
    <div class="">
      press <kbd class="bg-base px-2 py-1 rounded-sm text-sm">space</kbd> to reveal
      the definitions
    </div>
  {/if}
</div>
