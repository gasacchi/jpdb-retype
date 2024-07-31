<script lang="ts">
  import * as wanakana from "wanakana";
  import { app_state } from "./store";
  import NotKanjiMode from "./Not_Kanji_Mode.svelte";

  export let kanji_mode: boolean;

  let retype_input: HTMLInputElement;
  let input_error: boolean = false;
  let input_error_message: string = "";

  function wanakana_input(node: HTMLInputElement) {
    wanakana.bind(node);

    return {
      destroy() {
        wanakana.unbind(node);
      },
    };
  }

  function reset_input_error() {
    setTimeout(() => {
      input_error = false;
      input_error_message = "";
    }, 3000);
  }

  function validate_input(input: string) {
    if (input === "" || input === " ") {
      input_error = true;
      input_error_message = "Input cannot be empty";
    } else if (!wanakana.isHiragana(input)) {
      input_error = true;
      input_error_message = "Input only accept hiragana";
    } else {
      let user_answer = input;
      let is_correct = $app_state.correct_answer === user_answer;
      app_state.update((state) => ({
        ...state,
        is_answered: true,
        is_correct,
        user_answer,
      }));

    }
    reset_input_error();
  }

  function handle_submit(_event: SubmitEvent) {
    validate_input(retype_input.value);
  }
</script>

{#if kanji_mode}
  <form
    class:hidden={$app_state.is_answered}
    class="retype-form fixed bottom-6 w-full flex flex-col gap-2 items-center"
    on:submit|preventDefault={handle_submit}
  >
    <span
      class="text-red font-semibold opacity-0 transition-opacity duration-700 delay-75 ease-linear"
      class:opacity-100={input_error}
    >
      {input_error_message}
    </span>
    <!-- svelte-ignore a11y-autofocus -->
    <input
      autofocus
      use:wanakana_input
      bind:this={retype_input}
      type="text"
      class="retype-input outline-none font-notojp shadow-none text-center text-2xl text-peach py-4 border-none rounded-none bg-base bg-opacity-50"
    />
  </form>
{:else if !$app_state.is_reveal}
  <NotKanjiMode />
{/if}
