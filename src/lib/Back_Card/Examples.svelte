<script lang="ts">
    export let examples_container_element: Element | null;
    export let examples_nodes: NodeListOf<Element> | null;  
    export let close_examples: () => void;


    function examples_render(node: HTMLDivElement): void
    {
        const container = node.querySelector(".subsection");

        const icon = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-6 fill-blue"
            >
              <path d="M7.557 2.066A.75.75 0 0 1 8 2.75v10.5a.75.75 0 0 1-1.248.56L3.59 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.59l3.162-2.81a.75.75 0 0 1 .805-.124ZM12.95 3.05a.75.75 0 1 0-1.06 1.06 5.5 5.5 0 0 1 0 7.78.75.75 0 1 0 1.06 1.06 7 7 0 0 0 0-9.9Z" />
              <path d="M10.828 5.172a.75.75 0 1 0-1.06 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 1 0 1.06 1.06 4 4 0 0 0 0-5.656Z" />
            </svg>
        `;

        if (container && examples_nodes)
        {
            container.innerHTML = "";

            examples_nodes.forEach((example_element, index) => {
                const link = example_element.querySelector("a");

                if (link && index < examples_nodes.length)
                {
                    link.innerHTML = icon;

                    container.appendChild(example_element);
                }
            });
        }
    }

</script>

{#if examples_container_element}
    <input
        on:click|preventDefault={() => close_examples()}
        type="checkbox" 
        id="examples_modal" 
        class="modal-toggle"
    />
    <div class="modal modal-open" role="dialog">
        <div use:examples_render class="retype-examples">
            <h3 class="retype-examples-title">Examples</h3>
            <div class="retype-examples-content">
                {@html examples_container_element.innerHTML}
            </div>
        </div>
        <label class="modal-backdrop" for="examples_modal">Close</label>
    </div>
{/if}


<style lang="postcss">
    .retype-examples {
        @apply bg-crust modal-box;
    }

    .retype-examples-title {
        @apply text-2xl text-peach font-bold text-center;
    }

    .retype-examples-content {
        @apply py-4;
    }

    .retype-examples-content :global(.subsection>div) {
        @apply py-4;
    }

    .retype-examples-content :global(.subsection>div:not(:last-child)) {
        @apply border-b border-dashed border-mauve;
    }

    .retype-examples-content :global(.jp) {
        @apply font-notojp text-text text-xl;
    }

    .retype-examples-content :global(.highlight) {
        @apply bg-transparent underline underline-offset-8;
        @apply decoration-peach;
    }
</style>
