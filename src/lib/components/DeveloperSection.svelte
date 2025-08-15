<script>
  // Developer information
  const developer = {
    name: "NOAH",
    role: "Full Stack Developer",
    bio: "Passionate developer creating innovative web applications with modern technologies.",
    skills: ["Svelte", "JavaScript", "CSS", "AI Integration", "UX Design"],
    image: "/images/profile.jpg"
  };
</script>

<section class="developer-section">
  <div class="card developer-card">
    <div class="developer-header">
      <img src={developer.image} alt={developer.name} class="profile-image" />
      <div class="developer-info">
        <h2>{developer.name}</h2>
        <h3>{developer.role}</h3>
      </div>
    </div>
    
    <div class="developer-bio">
      <p>{developer.bio}</p>
    </div>
    
    <div class="skills">
      <h4>Skills</h4>
      <div class="skill-tags">
        {#each developer.skills as skill}
          <span class="skill-tag">{skill}</span>
        {/each}
      </div>
    </div>
    
    <div class="project-info">
      <h4>About This Project</h4>
      <p>Style Transformer uses AI to convert ordinary text into various stylistic forms, from pirate speak to Victorian prose. Built with SvelteKit and modern web technologies, it demonstrates the creative potential of AI text transformation.</p>
    </div>
  </div>
</section>

<style>
  .developer-section {
    margin: 4rem 0;
  }
  
  .developer-card {
    background-color: var(--surface);
    border-radius: 12px;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .developer-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--primary);
  }
  
  .developer-info {
    margin-left: 1.5rem;
  }
  
  .developer-info h2 {
    margin: 0;
    color: var(--primary);
  }
  
  .developer-info h3 {
    margin: 0.5rem 0 0 0;
    opacity: 0.8;
    font-weight: 400;
  }
  
  .skills {
    margin: 1.5rem 0;
  }
  
  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .skill-tag {
    background-color: rgba(187, 134, 252, 0.2);
    color: var(--primary);
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }
  
  .project-info {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
  }
</style>