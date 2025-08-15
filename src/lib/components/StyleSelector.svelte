<script>
  import { styles } from '$lib/styles/styleDefinitions';
  
  export let selectedStyle = styles[0].id;
</script>

<div class="style-selector">
  <h2>Choose a Style</h2>
  
  <div class="style-grid">
    {#each styles as style}
      <div 
        class="style-card" 
        class:selected={selectedStyle === style.id}
        on:click={() => selectedStyle = style.id}
        tabindex="0"
        on:keydown={e => e.key === 'Enter' && (selectedStyle = style.id)}
      >
        <img src={style.icon} alt={style.name} />
        <h3>{style.name}</h3>
        <p>{style.description}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .style-selector {
    margin-bottom: 2rem;
  }
  
  h2 {
    margin-bottom: 1rem;
    color: var(--primary);
  }
  
  .style-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .style-card {
    background-color: var(--surface);
    border-radius: 8px;
    padding: 1.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .style-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  .style-card.selected {
    border-color: var(--primary);
    background-color: rgba(187, 134, 252, 0.1);
  }
  
  .style-card img {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
  }
  
  .style-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }
  
  .style-card p {
    font-size: 0.9rem;
    opacity: 0.8;
    margin: 0;
  }
</style>