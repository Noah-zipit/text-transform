<script>
  import DeveloperSection from '$lib/components/DeveloperSection.svelte';
</script>

<svelte:head>
  <title>About - Text Style Transformer</title>
</svelte:head>

<div class="about-page">
  <h1>About Style Transformer</h1>
  
  <div class="about-content card">
    <section class="about-section">
      <h2>What is Style Transformer?</h2>
      <p>
        Style Transformer is a web application that uses artificial intelligence to transform ordinary text into various stylistic forms. Whether you want your text to sound like a pirate, a Victorian gentleman, or Shakespeare himself, our tool can help you achieve that distinctive voice.
      </p>
    </section>
    
    <section class="about-section">
      <h2>How It Works</h2>
      <p>
        Style Transformer uses advanced AI language models to understand the context of your text and rewrite it in the style you choose. The process involves:
      </p>
      <ol>
        <li>You enter your text in the input field</li>
        <li>You select a style from our collection</li>
        <li>Our AI processes your text and transforms it into the selected style</li>
        <li>The transformed text is displayed for you to copy and use</li>
      </ol>
    </section>
    
    <section class="about-section">
      <h2>Technologies Used</h2>
      <p>
        This application is built using modern web technologies:
      </p>
      <ul>
        <li>SvelteKit - A framework for building web applications</li>
        <li>AI Language Models - For text transformation</li>
        <li>Vercel - For hosting and deployment</li>
      </ul>
    </section>
  </div>
  
  <DeveloperSection />
</div>

<style>
  .about-page {
    max-width: 800px;
    margin: 0 auto;
  }
  
  h1 {
    color: var(--primary);
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .about-content {
    padding: 2rem;
    margin-bottom: 3rem;
  }
  
  .about-section {
    margin-bottom: 2rem;
  }
  
  .about-section h2 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  
  .about-section p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  .about-section ul, .about-section ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .about-section li {
    margin-bottom: 0.5rem;
  }
</style>