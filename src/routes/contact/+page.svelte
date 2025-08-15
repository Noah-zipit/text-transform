<script>
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
  <title>Contact - Text Style Transformer</title>
</svelte:head>

<div class="contact-page">
  <h1>Contact Us</h1>
  
  <p class="contact-intro">
    Have questions or feedback about Style Transformer? We'd love to hear from you! Fill out the form below to get in touch.
  </p>
  
  <ContactForm />
</div>

<style>
  .contact-page {
    max-width: 800px;
    margin: 0 auto;
  }
  
  h1 {
    color: var(--primary);
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .contact-intro {
    text-align: center;
    margin-bottom: 2rem;
    opacity: 0.8;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>