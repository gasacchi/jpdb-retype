<script lang="ts">
  import type { input_element } from "./common";

  export let selected_grade: input_element;
  export let close_modal: () => void;

  function selected_grade_value() {
    switch (selected_grade?.value) {
      case "✘ Nothing":
        return "Nothing";
      case "✘ Something":
        return "Something";
      case "✔ Hard":
        return "Hard";
      case "✔ Okay":
        return "Okay";
      case "✔ Easy":
        return "Easy";
      case "Blacklist":
        return "Blacklist";
      case "I'll never forget":
        return "Never Forget";
      default:
        return "null";
    }
  }

  function handle_keyup(event: KeyboardEvent) {
    // if (event.key === "")
    if (event.key === "Enter") {
      selected_grade?.click();
    } else if (event.key === "c" || event.key === "Escape") {
      close_modal();
    }
  }
</script>

<svelte:window on:keyup={handle_keyup} />
<!-- Put this part before </body> tag -->
<input type="checkbox" id="grade-modal-confirm" class="modal-toggle" />
<div class="modal modal-open" role="dialog">
  <div class="modal-box bg-base text-center">
    <h3 class="text-lg font-bold text-peach">Review Confirmation</h3>
    <p class="py-4 text-text">
      You select <span
        class="px-2 underline underline-offset-4 decoration-peach font-semibold"
        >{selected_grade_value()}</span
      >, are you sure?
    </p>
    <div class="flex justify-center items-center gap-5">
      <button
        class="border-green text-green"
        on:click={() => selected_grade?.click()}
      >
        <kbd>enter</kbd>
        <span>Okay</span>
      </button>
      <button class="border-red text-red" on:click={() => close_modal()}>
        <kbd>c</kbd>
        <span>Cancel</span>
      </button>
    </div>
  </div>
  <label class="modal-backdrop" for="grade-modal-confirm">Close</label>
</div>

<style lang="postcss">
  button {
    @apply !border rounded-md px-4 flex items-center gap-2;
  }

  kbd {
    @apply bg-crust px-2 py-1 rounded-sm text-sm;
  }
</style>
