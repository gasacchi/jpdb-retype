<script lang="ts">
  import { app_state } from "./store";
</script>

<div class="retype-answer-result text-xl mt-6">

  Your answer
  <span class="text-peach font-notojp text-2xl">{$app_state.user_answer}</span>
  is
  {#if $app_state.is_correct}

    <span class="text-green font-semibold">correct</span>

  {:else if $app_state.is_reveal}

    <span class="text-red font-semibold">incorrect</span>
    it should be
    <span class="font-notojp text-2xl text-green">{$app_state.correct_answer}</span>

  {:else}

    <span class="text-red font-semibold">incorrect</span>

  {/if}

</div>
