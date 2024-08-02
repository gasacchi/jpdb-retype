import Front_Card from "./lib/Front_Card/Front_Card.svelte"

function clean(): void
{
    const container = document.querySelector(".container.bugfix");
    const bottom_padding = document.querySelector(".with-bottom-padding-1");

    container?.remove();
    bottom_padding?.remove();
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
}

function get_data(): front_data
{
    const word_element = document.querySelector(".answer-box .plain>div:nth-child(3)");
    const sentence_element = document.querySelector(".card-sentence .sentence");

    return { word_element, sentence_element };
}


export function render()
{
    const data = get_data();
    const retype = document.createElement("div");

    retype.classList.add("retype-front-container");
    mount(retype);

    new Front_Card({
        target: retype,
        props: {
            ...data
        }
    });

    clean();
}
