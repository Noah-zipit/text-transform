<script>
  import '../app.css';
</script>

<div class="app">
  <header class="header">
    <div class="container">
      <h1>Style Transformer</h1>
    </div>
  </header>
  
  <main class="container">
    <slot />
  </main>
  
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Style Transformer</p>
    </div>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .header {
    background-color: var(--surface);
    padding: 1rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  .header h1 {
    margin: 0;
    color: var(--primary);
  }
  
  main {
    flex: 1;
    padding: 2rem 1rem;
  }
  
  .footer {
    background-color: var(--surface);
    padding: 1rem 0;
    text-align: center;
  }
</style>
