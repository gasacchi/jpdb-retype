<script lang="ts">
  import type { element } from "./common";

  export let sentence_translation_element: element;
</script>

<div
  class="retype-sentence-translation mt-4 text-subtext1"
>
  {@html sentence_translation_element?.innerHTML}
</div>
