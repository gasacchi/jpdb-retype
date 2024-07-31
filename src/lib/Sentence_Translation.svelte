<script lang="ts">
  import type { element } from "./common";
  import { app_state } from "./store";

  export let sentence_translation_element: element;
</script>

<div
  class="retype-sentence-translation mt-4 text-subtext1 opacity-0"
  class:opacity-100={$app_state.is_reveal}
>
  {@html sentence_translation_element?.innerHTML}
</div>
