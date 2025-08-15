<script>
  let inputText = '';
  let transformedText = '';
  let isLoading = false;
  
  async function transformText() {
    if (!inputText) return;
    
    isLoading = true;
    
    try {
      // This is a simple mock transformation for now
      // We'll replace this with the actual API call later
      await new Promise(resolve => setTimeout(resolve, 1000));
      transformedText = `Ahoy matey! ${inputText} be soundin' like pirate talk now, arr!`;
    } catch (error) {
      console.error('Error transforming text:', error);
      transformedText = 'Error transforming text. Please try again.';
    } finally {
      isLoading = false;
    }
  }
</script>

<svelte:head>
  <title>Style Transformer</title>
</svelte:head>

<div class="hero">
  <h1>Transform Your Text</h1>
  <p>Convert ordinary text into fun styles with AI</p>
</div>

<div class="transform-container">
  <div class="input-section">
    <h2>Enter Your Text</h2>
    <textarea 
      bind:value={inputText}
      placeholder="Type something here..."
      rows="5"
      disabled={isLoading}
    ></textarea>
    
    <button on:click={transformText} disabled={!inputText || isLoading}>
      {isLoading ? 'Transforming...' : 'Transform Text'}
    </button>
  </div>
  
  {#if transformedText}
    <div class="output-section">
      <h2>Transformed Text</h2>
      <div class="output-box">
        <p>{transformedText}</p>
      </div>
    </div>
  {/if}
</div>

<style>
  .hero {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .hero h1 {
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .hero p {
    opacity: 0.8;
    font-size: 1.2rem;
  }
  
  .transform-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .input-section {
    margin-bottom: 2rem;
  }
  
  h2 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  
  textarea {
    width: 100%;
    background-color: var(--surface);
    color: var(--on-surface);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1rem;
    font-size: 1rem;
    resize: vertical;
    margin-bottom: 1rem;
    min-height: 120px;
  }
  
  textarea:focus {
    border-color: var(--primary);
    outline: none;
  }
  
  button {
    background: linear-gradient(135deg, var(--primary), var(--primary-variant));
    color: var(--on-primary);
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
  }
  
  button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .output-section {
    margin-top: 2rem;
  }
  
  .output-box {
    background-color: var(--surface);
    border-radius: 8px;
    padding: 1.5rem;
    border-left: 4px solid var(--primary);
  }
  
  .output-box p {
    margin: 0;
    line-height: 1.6;
  }
</style>
