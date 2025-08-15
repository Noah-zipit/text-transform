<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { theme } from '$lib/stores/themeStore';
</script>

<div class="app" class:dark={$theme === 'dark'} class:light={$theme === 'light'}>
  <Header />
  
  <div class="container">
    <slot />
  </div>
  
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .container {
    flex: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  .dark {
    --primary: #bb86fc;
    --primary-variant: #3700b3;
    --secondary: #03dac6;
    --background: #121212;
    --surface: #1e1e1e;
    --error: #cf6679;
    --on-primary: #000;
    --on-secondary: #000;
    --on-background: #fff;
    --on-surface: #fff;
    --on-error: #000;
  }
  
  .light {
    --primary: #6200ee;
    --primary-variant: #3700b3;
    --secondary: #03dac6;
    --background: #ffffff;
    --surface: #f5f5f5;
    --error: #b00020;
    --on-primary: #fff;
    --on-secondary: #000;
    --on-background: #000;
    --on-surface: #000;
    --on-error: #fff;
  }
</style>
