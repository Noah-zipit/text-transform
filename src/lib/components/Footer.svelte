<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="/images/logo.svg" alt="Style Transformer" />
        <h3>Style Transformer</h3>
        <p>Transform ordinary text into extraordinary styles</p>
      </div>
      
      <div class="footer-links">
        <div class="link-group">
          <h4>Pages</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div class="link-group">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="mailto:contact@example.com">Email</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="copyright">
      <p>&copy; {new Date().getFullYear()} Style Transformer. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--surface);
    padding: 3rem 0 1.5rem;
    margin-top: 4rem;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .footer-logo {
    flex: 1;
    min-width: 200px;
  }
  
  .footer-logo img {
    height: 40px;
    margin-bottom: 1rem;
  }
  
  .footer-logo h3 {
    margin: 0 0 0.5rem 0;
    color: var(--primary);
  }
  
  .footer-logo p {
    opacity: 0.8;
    margin: 0;
  }
  
  .footer-links {
    display: flex;
    gap: 3rem;
  }
  
  .link-group h4 {
    margin: 0 0 1rem 0;
    color: var(--primary);
  }
  
  .link-group ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .link-group li {
    margin-bottom: 0.5rem;
  }
  
  .link-group a {
    color: var(--on-surface);
    text-decoration: none;
    opacity: 0.8;
    transition: all 0.3s ease;
  }
  
  .link-group a:hover {
    color: var(--primary);
    opacity: 1;
  }
  
  .copyright {
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
  }
  
  .copyright p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
  }
</style>