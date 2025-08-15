<script>
  export let value = '';
  export let isLoading = false;
  
  function handleKeyDown(event) {
    // Submit on Cmd/Ctrl + Enter
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      event.preventDefault();
      dispatch('submit');
    }
  }
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="text-input-container">
  <h2>Enter Your Text</h2>
  <div class="input-area card">
    <textarea 
      bind:value
      placeholder="Type or paste your text here..."
      disabled={isLoading}
      on:keydown={handleKeyDown}
    ></textarea>
    
    <div class="character-count">
      {value.length} characters
    </div>
    
    <div class="shortcuts">
      <span>Tip: Press Cmd/Ctrl + Enter to transform</span>
    </div>
  </div>
</div>

<style>
  .text-input-container {
    margin-bottom: 2rem;
  }
  
  h2 {
    margin-bottom: 1rem;
    color: var(--primary);
  }
  
  .input-area {
    display: flex;
    flex-direction: column;
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
    padding: 1rem;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  textarea:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 2px rgba(187, 134, 252, 0.2);
  }
  
  textarea:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .character-count {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    opacity: 0.7;
    text-align: right;
  }
  
  .shortcuts {
    margin-top: 1rem;
    font-size: 0.85rem;
    opacity: 0.6;
  }
</style>