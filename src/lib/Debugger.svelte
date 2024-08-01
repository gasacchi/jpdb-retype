<script lang="ts">
  import { app_state } from "./store";
</script>

<div
  class="retype-debuger fixed left-0 top-0 bg-base bg-opacity-80 w-1/4 h-full p-4"
>

  <h1 class="text-xl text-peach font-semibold">jpdb-retype Debugger</h1>
  <div class="retype-debug-state">
    <h2 class="text-subtext1">State</h2>
    <ul class="">
      {#each Object.entries($app_state) as [key, val] }
      	<li class="text-mauve">
      	  {key} <span class="text-subtext1">{val}</span>
      	</li>
      {/each}
    </ul>
  </div>

</div>
