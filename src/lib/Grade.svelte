<script lang="ts">
  import {
    clockfy_send,
    get_datetime,
    get_word_from_element,
    type element,
    type grade_elements,
    type input_element,
  } from "./common";
  import GradeModalConfirm from "./Grade_Modal_Confirm.svelte";
  import { app_settings, app_state } from "./store";

  export let grade_elements: grade_elements;
  export let word_element: element;

  let show_modal_confirm = false;
  let selected_grade: input_element = null;

  function close_modal() {
    show_modal_confirm = false;
  }

  function grading(element: input_element, grade: string) {
    app_state.update((state) => ({ ...state, timer_end: get_datetime() }));

    if ($app_state.timer_start && $app_state.timer_end) {
      const {
        clockify: { api_key, task_id, workspace_id, project_id },
      } = $app_settings;

      const start = $app_state.timer_start;
      const end = $app_state.timer_end;
      const word =
        get_word_from_element(word_element) || $app_state.correct_answer;
      const description = `Review - ${word} : ${grade}`;

      clockfy_send({
        api_key,
        task_id,
        project_id,
        workspace_id,
        start,
        end,
        description,
      });
    }

    element?.click();
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
  <GradeModalConfirm {selected_grade} {close_modal} {grading} />
{/if}

<div class="retype-grade fixed bottom-6">
  <div class="flex gap-4 justify-center items-center">
    <button
      class="border-red text-red"
      on:click={() => grading(grade_elements.nothing, "nothing")}
    >
      <kbd>n</kbd>
      <span>Nothing</span>
    </button>
    <button
      class="border-mauve text-mauve"
      on:click={() => grading(grade_elements.something, "something")}
    >
      <kbd>s</kbd>
      <span>Something</span>
    </button>
    <button
      class="border-peach text-peach"
      on:click={() => grading(grade_elements.hard, "hard")}
    >
      <kbd>h</kbd>
      <span>Hard</span>
    </button>
    <button
      class="border-blue text-blue"
      on:click={() => grading(grade_elements.okay, "okay")}
    >
      <kbd>o</kbd>
      <span>Okay</span>
    </button>
    <button
      class="border-green text-green"
      on:click={() => grading(grade_elements.easy, "easy")}
    >
      <kbd>e</kbd>
      <span>Easy</span>
    </button>
    <button
      class="border-overlay2 text-overlay2"
      on:click={() => grading(grade_elements.blacklist, "blacklist")}
    >
      <kbd>b</kbd>
      <span>Blacklist</span>
    </button>
    <button
      class="border-overlay1 text-overlay1"
      on:click={() => grading(grade_elements.never_forget, "never_forget")}
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
