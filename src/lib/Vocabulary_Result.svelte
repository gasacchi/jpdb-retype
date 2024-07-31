<script lang="ts">
  import { get_element, type element } from "./common";
  import { app_state } from "./store";

  export let meaning_element: element;
  export let pitch_accent_container_element: element;
  export let pitch_accent_nodes_element: NodeListOf<Element>;
  export let kanji_used_element: element;
  export let compose_vocabulary_element: element;

  function retype_meaning_restyle(_node: HTMLDivElement) {
    const icon_link = get_element(".retype-meaning a");
    if (icon_link) {
      icon_link.innerHTML = `
      
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="size-4 fill-blue ml-2"
    >
      <path
        d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z"
      />
    </svg>
    `;
    }
  }

  function retype_pitch_restyle() {
    const container = get_element(".retype-pitch-accent .subsection>div");
    const icon = `
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
    `;
    if (container) {
      container.innerHTML = "";
      pitch_accent_nodes_element.forEach((e, index) => {
        container.appendChild(e);

        // console.log(index);
        const icon_link = get_element(`.retype-pitch-accent .subsection>div>div:nth-child(${index + 1}) a`)
        if (icon_link) {
          icon_link.innerHTML = icon
        }
      });
    }
  }


  $: if ($app_state.is_reveal) retype_pitch_restyle();
</script>

<div
  class="retype-result-vocabulary flex flex-wrap mt-8 opacity-0"
  class:opacity-100={$app_state.is_reveal}
>
  <div use:retype_meaning_restyle class="retype-meaning basis-1/2">
    {@html meaning_element?.innerHTML}
  </div>
  <div class="retype-pitch-accent basis-1/2">
    {@html pitch_accent_container_element?.innerHTML}
  </div>

  {#if kanji_used_element}
    <div class="retype-kanji-used basis-1/2 mt-4">
      {@html kanji_used_element.innerHTML}
    </div>
  {/if}
  {#if compose_vocabulary_element}
    <div class="retype-composed-of-vocabulary basis-1/2 mt-4">
      {@html compose_vocabulary_element.innerHTML}
    </div>
  {/if}
</div>

<style lang="postcss">
  .retype-meaning :global(svg) {
    @apply stroke-blue;
  }

  .retype-kanji-used :global(.subsection > div) {
    @apply flex items-center gap-2;
  }
  .retype-kanji-used :global(.spelling > a) {
    @apply text-peach font-notojp;
  }

  .retype-composed-of-vocabulary :global(.plain) {
    @apply text-peach font-notojp text-3xl;
  }
  .retype-composed-of-vocabulary :global(.composed-of) {
    @apply flex items-center gap-2;
  }
</style>
