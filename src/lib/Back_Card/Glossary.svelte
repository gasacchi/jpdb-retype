<script lang="ts">
    export let meanings_element: Element | null;
    export let pitch_accent_container_element: Element | null;
    export let pitch_accent_nodes: NodeListOf<Element> | null;
    export let kanji_used_element: Element | null;
    export let composed_vocabulary_element: Element | null;


    function meanings_render(node: HTMLDivElement): void
    {
        const icon = `
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-6 fill-blue ml-2"
            >
                <path fill-rule="evenodd" d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z" clip-rule="evenodd" />
            </svg>
        `;

        const link = node.querySelector("a[href*='/edit']");

        if (link)
        {
            link.innerHTML = icon;
        }
        
    }

    function pitch_accent_render(node: HTMLDivElement): void
    {
        const container = node.querySelector(".subsection>div");

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


        if (pitch_accent_nodes && container)
        {
            container.innerHTML = "";
            container.setAttribute("style", "--pitch-low-s: #89b4fa;--pitch-high-s: #f38ba8");

            pitch_accent_nodes.forEach(pitch_element => {
                const link = pitch_element.querySelector("a");

                pitch_element.classList.add("mt-4");

                if (link)
                {
                    link.innerHTML = icon;
                }
                
                container.appendChild(pitch_element); 
            });
        }
    }

</script>


<div class="retype-glossary">

    {#if meanings_element}

        <div use:meanings_render class="retype-meanings">
            {@html meanings_element.innerHTML}
        </div>
    	
    {/if}    

    {#if pitch_accent_container_element}

        <div use:pitch_accent_render class="retype-pitch-accent">
            {@html pitch_accent_container_element.innerHTML}
        </div>
    	
    {/if}  

    {#if kanji_used_element}

        <div class="retype-kanji-used">
            {@html kanji_used_element.innerHTML}
        </div>
    	
    {/if}


    {#if composed_vocabulary_element}

        <div class="retype-composed-vocabulary">
            {@html composed_vocabulary_element.innerHTML}
        </div>
    	
    {/if}

</div>

<style lang="postcss">
    .retype-glossary {
        @apply flex flex-wrap mt-8;
    }

    .retype-meanings {
        @apply basis-1/2;        
    }

    .retype-pitch-accent {
        @apply basis-1/2;        
    }

    .retype-pitch-accent :global(div[style*="word-break"]) {
        @apply font-notojp text-text text-xl font-semibold;
    }

    .retype-pitch-accent :global(div[style*="word-break"] div>div) {
        @apply !bg-crust;
    }

    .retype-kanji-used {
        @apply basis-1/2;       
    }

    .retype-kanji-used :global(.subsection div) {
        @apply flex items-center gap-2;
    }

    .retype-kanji-used :global(.subsection a) {
        @apply text-peach font-notojp;
    }

    .retype-composed-vocabulary {
        @apply basis-1/2;        
    }
</style>
