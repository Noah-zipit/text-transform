<script>
  export let text = '';
  export let style = {};
  
  import { fly } from 'svelte/transition';
  import { addToHistory } from '$lib/stores/transformStore';
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Add to history if we have both text and style
    if (text && style) {
      addToHistory(text, style, text);
    }
  });
</script>

{#if text}
  <div class="output-container" transition:fly={{ y: 20, duration: 300 }}>
    <div class="output-header">
      <h2>Transformed in <span class="style-name">{style.name}</span> style</h2>
      
      <div class="actions">
        <button class="action-button copy" on:click={() => navigator.clipboard.writeText(text)}>
          Copy
        </button>
      </div>
    </div>
    
    <div class="output-content card">
      <p>{text}</p>
    </div>
  </div>
{/if}

<style>
  .output-container {
    margin-top: 2rem;
  }
  
  .output-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .output-header h2 {
    margin: 0;
    font-size: 1.5rem;
  }
  
  .style-name {
    color: var(--primary);
  }
  
  .actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .action-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    background-color: rgba(187, 134, 252, 0.2);
    color: var(--primary);
  }
  
  .action-button:hover {
    background-color: rgba(187, 134, 252, 0.3);
  }
  
  .output-content {
    padding: 1.5rem;
    background-color: var(--surface);
    border-radius: 8px;
    line-height: 1.6;
  }
  
  .output-content p {
    margin: 0;
    white-space: pre-wrap;
  }
</style>