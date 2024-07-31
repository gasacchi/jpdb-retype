<script lang="ts">
  import type { element, link_element } from "./common";
  import { app_state } from "./store";

  export let word_audio: link_element;
  export let word_element: element;
</script>

<div class="retype-word flex items-end gap-3">
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a
    href="#"
    class="retype-word-audio mb-12 hover:border-none opacity-0"
    class:opacity-100={$app_state.is_reveal}
    on:click|preventDefault={() => word_audio?.click()}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="size-8 fill-blue"
    >
      <path
        d="M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A6.985 6.985 0 0 0 1.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546V3.75ZM16.45 5.05a.75.75 0 0 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.899Z"
      />
      <path
        d="M14.329 7.172a.75.75 0 0 0-1.061 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 0 0 1.06 1.06 4 4 0 0 0 0-5.656Z"
      />
    </svg>
  </a>
  <h1
    class="retype-word-content text-9xl font-notojp"
    style={`--opacity: ${$app_state.is_reveal ? "100" : "0"}`}
  >
    {@html word_element?.outerHTML}
  </h1>
</div>

<style lang="postcss">
  .retype-word-content :global(.plain) {
    @apply text-peach hover:border-none;
  }
  .retype-word-content :global(rt) {
    opacity: var(--opacity);
    font-size: 35% !important;
  }
</style>
