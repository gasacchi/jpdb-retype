<script lang="ts">
  import type { element, link_element } from "./common";
  import { app_state } from "./store";

  export let sentence_audio: link_element;
  export let sentence_element: element;
  export let sentence_edit_element: link_element;
</script>

<div class="retype-sentence flex items-end gap-2 mt-4">
  {#if $app_state.is_reveal}
    <a
      href="#"
      class="retype-sentence-audio hover:border-none"
      on:click|preventDefault={() => sentence_audio?.click()}
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
  {/if}

  <p
    class="retype-sentence-content text-3xl text-text font-notojp"
    style={`--opacity: ${$app_state.is_reveal ? "100" : "0"}`}
  >
    {@html sentence_element?.innerHTML}
  </p>

  {#if $app_state.is_reveal}
    <a
      class="retype-sentence-edit hover:border-none cursor-pointer"
      on:click={() => sentence_edit_element?.click()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="size-6 fill-blue"
      >
        <path
          d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z"
        />
      </svg>
    </a>
  {/if}
</div>

<style lang="postcss">
  .retype-sentence-content :global(a) {
    @apply hidden;
  }
  .retype-sentence-content :global(rt) {
    opacity: var(--opacity);
  }

  .retype-sentence-content :global(.highlight) {
    @apply bg-transparent underline underline-offset-8 decoration-peach;
  }
</style>
