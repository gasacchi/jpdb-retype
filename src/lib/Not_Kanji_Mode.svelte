<script lang="ts">
    import { app_state } from "./store";


  function handle_keydown(e: KeyboardEvent) {
    if (e.key === " ") {
      app_state.update(state => ({...state, is_reveal: true}))
    }
  }
</script>

<svelte:window on:keydown={handle_keydown} />

<div
  class="retype-not-kanji-mode flex flex-col items-center text-xl text-text"
>
  <h3 class="">The word doesn't contains Kanji</h3>
  <h4 class="">
    just try to recall its <b
      class="underline underline-offset-8 decoration-peach">meaning</b
    >
    & <b class="underline underline-offset-8 decoration-peach">pitch accent</b>
  </h4>
  <h5 class="">press <kbd class="bg-base px-2 py-1 rounded-sm text-sm">space</kbd> to reveal the definitions</h5>
</div>
