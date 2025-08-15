<script>
  import { transformText } from '$lib/services/aiService';
  import { styles } from '$lib/styles/styleDefinitions';
  import TextInput from '$lib/components/TextInput.svelte';
  import StyleSelector from '$lib/components/StyleSelector.svelte';
  import TransformedOutput from '$lib/components/TransformedOutput.svelte';
  import DeveloperSection from '$lib/components/DeveloperSection.svelte';
  
  let inputText = '';
  let selectedStyle = styles[0].id;
  let transformedText = '';
  let isLoading = false;
  let error = null;
  
  // Get the current style object
  $: currentStyle = styles.find(style => style.id === selectedStyle);
  
  async function handleTransform() {
    if (!inputText.trim()) return;
    
    isLoading = true;
    error = null;
    
    try {
      transformedText = await transformText(inputText, currentStyle);
    } catch (err) {
      error = "Sorry, something went wrong with the transformation. Please try again.";
      console.error(err);
    } finally {
      isLoading = false;
    }
  }
</script>

<svelte:head>
  <title>Text Style Transformer</title>
</svelte:head>

<main>
  <header class="app-header">
    <h1>Text Style Transformer</h1>
    <p>Transform ordinary text into various stylistic forms using AI</p>
  </header>
  
  <section class="main-content">
    <!-- Section for input and output - keeping them close together -->
    <div class="input-output-section">
      <TextInput 
        bind:value={inputText} 
        on:submit={handleTransform} 
        {isLoading} 
      />
      
      <button 
        class="transform-button" 
        on:click={handleTransform} 
        disabled={isLoading || !inputText.trim()}
      >
        {isLoading ? 'Transforming...' : 'Transform Text'}
      </button>
      
      {#if error}
        <div class="error-message">{error}</div>
      {/if}
      
      {#if transformedText}
        <TransformedOutput 
          text={transformedText} 
          style={currentStyle} 
        />
      {/if}
    </div>
    
    <!-- Style selector moved below input/output -->
    <div class="style-section">
      <StyleSelector 
        bind:selectedStyle 
        styles={styles} 
      />
    </div>
  </section>
  
  <DeveloperSection />
</main>

<style>
  .app-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .app-header h1 {
    color: var(--primary);
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
  }
  
  .app-header p {
    opacity: 0.8;
    font-size: 1.2rem;
  }
  
  .main-content {
    margin-bottom: 4rem;
  }
  
  .input-output-section {
    margin-bottom: 2rem;
  }
  
  .style-section {
    margin-top: 2rem;
  }
  
  .transform-button {
    margin: 1.5rem auto;
    display: block;
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    background: linear-gradient(135deg, var(--primary), var(--primary-variant));
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(187, 134, 252, 0.3);
    width: 100%;
    max-width: 300px;
  }
  
  .transform-button:hover {
    background: linear-gradient(135deg, var(--primary-variant), var(--primary));
  }
  
  .error-message {
    color: var(--error);
    text-align: center;
    padding: 1rem;
    margin: 1rem 0;
    background-color: rgba(207, 102, 121, 0.1);
    border-radius: 8px;
  }
</style>
