import App from "./App.svelte"
import { get_element } from "./lib/common"


const DEBUG_MODE = false


const get_data_audio = () => {
  const word_audio = get_element(".answer-box .plain a.icon-link.vocabulary-audio")
  const sentence_audio = get_element(".sentence a.icon-link.example-audio")

  return {
    word_audio,
    sentence_audio
  }
}

const get_data = () => {
  const word_element = get_element(".answer-box a.plain");
  const sentence_element = get_element(".sentence")
  const sentence_edit_element = get_element(".icon-link:has(.ti-pencil)")
  const sentence_translation_element = get_element(".sentence-translation")
  const meaning_element = get_element(".subsection-meanings")
  const kanji_used_element = get_element(".subsection-composed-of-kanji")
  const pitch_accent_container_element = get_element(".subsection-pitch-accent")
  const pitch_accent_nodes_element = document.querySelectorAll(".subsection-pitch-accent .subsection>div>div")
  const compose_vocabulary_element = get_element(".subsection-composed-of-vocabulary")
  const example_nodes_element = document.querySelectorAll(".subsection-examples .subsection>div")
  const grade_elements = {
    nothing: get_element("input#grade-1"),
    something: get_element("input#grade-2"),
    hard: get_element("input#grade-3"),
    okay: get_element("input#grade-4"),
    easy: get_element("input#grade-5"),
    blacklist: get_element("input#grade-blacklist"),
    never_forget: get_element("input#grade-permaknown"),
  }


  return {
    word_element,
    sentence_element,
    sentence_edit_element,
    sentence_translation_element,
    meaning_element,
    kanji_used_element,
    pitch_accent_container_element,
    pitch_accent_nodes_element,
    compose_vocabulary_element,
    example_nodes_element,
    grade_elements,
  }
}

const clean = () => {
  let audio = get_data_audio()
  get_element(".container.bugfix")?.classList.add("hidden");
  get_element(".with-bottom-padding-2")?.classList.add("hidden")
  audio.sentence_audio?.remove()
  audio.word_audio?.remove()
}

export const render = () => {

  const jpdb_retype_element = document.createElement("div")
  jpdb_retype_element.classList.add(
    "jpdb-retype", "flex", "flex-col", "items-center",
    "justify-center", "grow"
  )
  const nav_element = get_element(".nav")
  nav_element?.parentNode?.insertBefore(jpdb_retype_element, nav_element.nextSibling)


  new App({
    target: jpdb_retype_element,
    props: {
      ...get_data(),
      ...get_data_audio(),
      debug_mode: DEBUG_MODE
    }
  })

  clean()
}
