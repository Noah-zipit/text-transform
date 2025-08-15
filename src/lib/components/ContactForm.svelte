<script>
  let name = '';
  let email = '';
  let message = '';
  let isSubmitting = false;
  let submitted = false;
  
  async function handleSubmit() {
    isSubmitting = true;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    submitted = true;
    isSubmitting = false;
  }
</script>

<section class="contact-section">
  <div class="card contact-card">
    <h2>Get In Touch</h2>
    
    {#if submitted}
      <div class="success-message">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3>Message Sent!</h3>
        <p>Thanks for reaching out. I'll get back to you soon.</p>
        <button on:click={() => submitted = false}>Send Another Message</button>
      </div>
    {:else}
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <label for="name">NOAH</label>
          <input id="name" type="text" bind:value={name} required />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" bind:value={email} required />
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" bind:value={message} rows="5" required></textarea>
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    {/if}
    
    <div class="contact-alternatives">
      <h3>Other Ways to Connect</h3>
      <div class="social-links">
        <a href="https://github.com/noah-zipit" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          GitHub
        <a href="mailto:noahext994@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Email
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-section {
    margin: 3rem 0;
  }
  
  .contact-card {
    background-color: var(--surface);
    border-radius: 12px;
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: var(--primary);
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    color: var(--on-surface);
    transition: all 0.3s ease;
  }
  
  input:focus, textarea:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 2px rgba(187, 134, 252, 0.2);
  }
  
  button {
    background-color: var(--primary);
    color: var(--on-primary);
    border: none;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
  }
  
  button:hover {
    background-color: var(--primary-variant);
    transform: translateY(-2px);
  }
  
  button:disabled {
    background-color: rgba(187, 134, 252, 0.5);
    cursor: not-allowed;
    transform: none;
  }
  
  .success-message {
    text-align: center;
    padding: 2rem 0;
  }
  
  .success-message svg {
    color: var(--secondary);
    margin-bottom: 1rem;
  }
  
  .contact-alternatives {
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .social-links a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--on-background);
    text-decoration: none;
    transition: all 0.3s ease;
    opacity: 0.8;
  }
  
  .social-links a:hover {
    color: var(--primary);
    opacity: 1;
    transform: translateY(-3px);
  }
  
  .social-links svg {
    margin-bottom: 0.5rem;
  }
</style>