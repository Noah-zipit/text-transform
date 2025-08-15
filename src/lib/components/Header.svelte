<script>
  import { theme, toggleTheme } from '$lib/stores/themeStore';
</script>

<header>
  <div class="container header-container">
    <div class="logo">
      <a href="/">
        <img src="/images/Logo.png" alt="Style Transformer" />
        <span>Style Transformer</span>
      </a>
    </div>
    
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    
    <button class="theme-toggle" on:click={toggleTheme}>
      {#if $theme === 'dark'}
        <span>☀️</span>
      {:else}
        <span>🌙</span>
      {/if}
    </button>
  </div>
</header>

<style>
  header {
    padding: 1rem 0;
    background-color: var(--surface);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--on-surface);
    font-weight: 700;
    font-size: 1.25rem;
  }
  
  .logo img {
    height: 32px;
    margin-right: 0.5rem;
  }
  
  nav ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav a {
    color: var(--on-surface);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  nav a:hover {
    color: var(--primary);
  }
  
  .theme-toggle {
    background: transparent;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 50%;
  }
  
  .theme-toggle:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: none;
  }
</style>