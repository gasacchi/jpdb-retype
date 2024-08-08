import Back_Card from "./lib/Back_Card/Back_Card.svelte"

function clean(): void
{
     const container = document.querySelector(".container.bugfix");
     const padding = document.querySelector(".with-bottom-padding-2");

     container?.classList.add("hidden");
     padding?.classList.add("hidden");   
}

function mount(element: Element): void
{
    const body = document.querySelector("body");

    body?.appendChild(element);
}


export type grade_element =
{
    nothing: Element | null;
    something: Element | null;
    hard: Element | null;
    okay: Element | null;
    easy: Element | null;
    blacklist: Element | null;
    never_forget: Element | null;
}
type back_data =
{
    word_furigana_element: Element | null;
    word_audio_element: HTMLAnchorElement | null;
    sentence_furigana_element: Element | null;
    sentence_audio_element: HTMLAnchorElement | null;
    sentence_edit_element: HTMLAnchorElement | null;
    sentence_translation_element: Element | null;
    meanings_element: Element | null;
    kanji_used_element: Element | null;
    pitch_accent_container_element: Element | null;
    pitch_accent_nodes: NodeListOf<Element> | null;
    composed_vocabulary_element: Element | null;
    examples_container_element: Element | null;
    examples_nodes: NodeListOf<Element> | null;
    grade_element: grade_element;
}

function get_data(): back_data
{
    const word_furigana_element = document.querySelector(".answer-box .plain a");
    const word_audio_element = document.querySelector(".icon-link.vocabulary-audio") as HTMLAnchorElement;
    const sentence_furigana_element = document.querySelector(".sentence");
    const sentence_audio_element = document.querySelector(".sentence a.icon-link.example-audio") as HTMLAnchorElement;
    const sentence_edit_element = document.querySelector(".card-sentence .icon-link[href*='/edit']") as HTMLAnchorElement;
    const sentence_translation_element = document.querySelector(".sentence-translation");
    const meanings_element = document.querySelector(".subsection-meanings");
    const kanji_used_element = document.querySelector(".subsection-composed-of-kanji");
    const pitch_accent_container_element = document.querySelector(".subsection-pitch-accent");
    const pitch_accent_nodes = document.querySelectorAll(".subsection-pitch-accent .subsection>div>div")
    const composed_vocabulary_element = document.querySelector(".subsection-composed-of-vocabulary");
    const examples_container_element = document.querySelector(".subsection-examples");
    const examples_nodes = document.querySelectorAll(".subsection-examples .subsection>div");
    const grade_element = {
        nothing: document.querySelector("#grade-1"),        
        something: document.querySelector("#grade-2"),        
        hard: document.querySelector("#grade-3"),        
        okay: document.querySelector("#grade-4"),        
        easy: document.querySelector("#grade-5"),        
        blacklist: document.querySelector("#grade-blacklist"),        
        never_forget: document.querySelector("#grade-permaknown"),        
    }

    return {
        word_furigana_element,
        word_audio_element,
        sentence_furigana_element,
        sentence_audio_element,
        sentence_edit_element,
        sentence_translation_element,
        meanings_element,
        kanji_used_element,
        pitch_accent_container_element,
        pitch_accent_nodes,
        composed_vocabulary_element,
        examples_container_element,
        examples_nodes,
        grade_element,
    }
}


export function render(): void
{
    const retype = document.createElement("div");

    retype.classList.add("retype-back-container");
    mount(retype);

    new Back_Card({
       target: retype,
       props: {
           ...get_data(),
       } 
    });

    clean();
}
