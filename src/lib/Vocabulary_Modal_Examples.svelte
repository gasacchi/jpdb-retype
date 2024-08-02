<script lang="ts">
  export let example_nodes_element: NodeListOf<Element>;

  function retype_vocabulary_examples(node: HTMLDivElement) {
    const icon = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="size-8 fill-blue"
    >
      <path
        d="M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A6.985 6.985 0 0 0 1.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546V3.75ZM16.45 5.05a.75.75 0 0 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.899Z"
      />
      <path
        d="M14.329 7.172a.75.75 0 0 0-1.061 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 0 0 1.06 1.06 4 4 0 0 0 0-5.656Z"
      />
    </svg>
    `;

    if (example_nodes_element) {
      example_nodes_element.forEach((element, index) => {
        const container = document.createElement("div");
        container.classList.add("retype-vocabulary-example-container");
        container.appendChild(element);
        node.appendChild(container);

        if (index < example_nodes_element.length - 1) {
          const icon_link = container.querySelector(
            `:nth-child(${index + 1}) a`,
          );
          if (icon_link) {
            icon_link.innerHTML = icon;
          }
        }
      });
    }
  }
</script>

<input
  type="checkbox"
  id="retype-vocabulary-modal-examples"
  class="modal-toggle"
/>
<div class="modal modal-open" role="dialog">
  <div class="modal-box bg-base">
    <h3 class="text-lg font-bold text-peach">Examples</h3>
    <div
      class="retype-vocabulary-examples flex flex-col gap-2 mt-4"
      use:retype_vocabulary_examples
    ></div>
  </div>
  <label class="modal-backdrop" for="retype-vocabulary-modal-examples"
    >Close</label
  >
</div>

<style lang="poscss">
</style>
