<script>
  export let style = {};
  export let selected = false;
  
  function handleSelect() {
    dispatch('select', style.id);
  }
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div 
  class="style-card" 
  class:selected
  on:click={handleSelect}
  tabindex="0"
  on:keydown={e => e.key === 'Enter' && handleSelect()}
>
  <img src={style.icon} alt={style.name} />
  <h3>{style.name}</h3>
  <p>{style.description}</p>
</div>

<style>
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