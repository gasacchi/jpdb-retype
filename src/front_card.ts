import Front_Card from "./lib/Front_Card/Front_Card.svelte"


function clean(): void
{
    const container = document.querySelector(".container.bugfix");
    const review = container?.querySelector(".review-hidden");
    const bottom_padding = document.querySelector(".with-bottom-padding-1");

    review?.remove();
    bottom_padding?.remove();
    container?.remove();
}

function mount(element: Element): void
{
    const body = document.querySelector("body");

    body?.appendChild(element);
}

type front_data =
{
    word_element: Element | null;
    sentence_element: Element | null;
    reveal_form_element: Element | null;
    reveal_button_element: Element | null;
}

function get_data(): front_data
{
    const word_element = document.querySelector(".answer-box .plain>div:nth-child(3)");
    const sentence_element = document.querySelector(".card-sentence .sentence");
    const reveal_form_element = document.querySelector(".review-button-group form");
    const reveal_button_element = document.querySelector("#show-answer");

    return { 
        word_element,
        sentence_element,
        reveal_form_element,
        reveal_button_element
    };
}


export function render()
{
    const retype = document.createElement("div");

    retype.classList.add("retype-front-container");
    mount(retype);

    new Front_Card({ target: retype, props: {...get_data()} });

    clean();
}
