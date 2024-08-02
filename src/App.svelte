<script lang="ts">
  import * as wanakana from "wanakana";
  import { onMount } from "svelte";

  import {
    get_datetime,
    type element,
    type grade_elements,
    type link_element,
  } from "./lib/common";
  import { app_state } from "./lib/store";

  import Debugger from "./lib/Debugger.svelte";
  import Word from "./lib/Word.svelte";
  import Sentence from "./lib/Sentence.svelte";
  import SentenceTranslation from "./lib/Sentence_Translation.svelte";
  import VocabularyResult from "./lib/Vocabulary_Result.svelte";
  import RetypeWanakanaInput from "./lib/Retype_Wanakana_Input.svelte";
  import AnswerResult from "./lib/Answer_Result.svelte";
  import AnswerResultMessage from "./lib/Answer_Result_Message.svelte";
  import Grade from "./lib/Grade.svelte";
  import VocabularyModalExamples from "./lib/Vocabulary_Modal_Examples.svelte";

  export let debug_mode: boolean;
  export let word_element: element;
  export let word_audio: link_element;
  export let sentence_element: element;
  export let sentence_audio: link_element;
  export let sentence_edit_element: link_element;
  export let sentence_translation_element: element;
  export let meaning_element: element;
  export let kanji_used_element: element;
  export let pitch_accent_container_element: element;
  export let pitch_accent_nodes_element: NodeListOf<Element>;
  export let compose_vocabulary_element: element;
  export let example_nodes_element: NodeListOf<Element>;
  export let grade_elements: grade_elements;

  let show_modal_examples = false;

  function kanji_mode() {
    const word = word_element?.textContent;
    const chars = word?.split("").filter(wanakana.isKanji);
    if (chars) {
      return chars.length > 0;
    } else {
      return false;
    }
  }

  function handle_keyup(event: KeyboardEvent) {
    if (event.key === "x" && $app_state.is_reveal) {
      show_modal_examples = !show_modal_examples;
    } else if (event.key === "r") {
      console.log("here error");
    }
  }

  onMount(() => {
    app_state.update((state) => ({ ...state, timer_start: get_datetime() }));
  });

  // TODO:
  // - [] sometime `e` & `r` key still playing the audio
</script>

<svelte:window on:keyup={handle_keyup} />

{#if debug_mode}
  <Debugger />
{/if}

<Word {word_audio} {word_element} />
<Sentence {sentence_audio} {sentence_edit_element} {sentence_element} />

{#if $app_state.is_reveal}
  <SentenceTranslation {sentence_translation_element} />
  <VocabularyResult
    {word_audio}
    {meaning_element}
    {kanji_used_element}
    {pitch_accent_container_element}
    {pitch_accent_nodes_element}
    {compose_vocabulary_element}
  />
{/if}

{#if $app_state.is_answered}
  <AnswerResult />
{/if}

{#if $app_state.is_answered && !$app_state.is_reveal}
  <AnswerResultMessage />
{/if}

{#if $app_state.is_reveal}
  <Grade {grade_elements} {word_element} />
{/if}

<RetypeWanakanaInput kanji_mode={kanji_mode()} />

{#if show_modal_examples && $app_state.is_reveal}
  <VocabularyModalExamples {example_nodes_element} />
{/if}
