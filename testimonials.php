<?php require_once 'includes/spa_header.php'; ?>
<main class="main-content animated-fade-in" id="app-root">
<div class="app-container" style="padding-top: 120px; padding-bottom: 80px;">
  <div class="section-header">
    <h2 class="section-title">Client <span>Testimonials</span></h2>
  </div>

  <div class="home-layout">
    
    <!-- Left: Testimonials List -->
    <div>
      <div class="reviews-grid" id="reviews-grid-list">
        
        <div class="review-card animated-fade-in">
          <p class="review-text">"The marketing consultants of flats and plots dealing with real estate. Highly satisfied with Vellore Travels' cab logistics."</p>
          <div class="review-author">
            <div class="author-avatar">SH</div>
            <div class="author-info">
              <h4>Shrine Properties</h4>
              <div style="display:flex; gap:2px; margin-top:2px; color: var(--accent-gold);">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>

        <div class="review-card animated-fade-in">
          <p class="review-text">"Excellent corporate travel packages. Reliable drivers, punctual timings, and premium glass-clean cabs."</p>
          <div class="review-author">
            <div class="author-avatar">VE</div>
            <div class="author-info">
              <h4>Vellore Tech Park</h4>
              <div style="display:flex; gap:2px; margin-top:2px; color: var(--accent-gold);">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>

        <div class="review-card animated-fade-in">
          <p class="review-text">"Our family tour to Yelagiri was fantastic. The driver knew the hills very well. Highly recommended!"</p>
          <div class="review-author">
            <div class="author-avatar">R.</div>
            <div class="author-info">
              <h4>R. Krishnan</h4>
              <div style="display:flex; gap:2px; margin-top:2px; color: var(--accent-gold);">⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Right: Submit Form -->
    <div class="glass-panel" style="align-self: start;">
      <h3 style="font-size:20px; margin-bottom:16px;">Leave a Review</h3>
      <form id="add-review-form" onsubmit="event.preventDefault(); alert('Thank you! Your feedback has been submitted.'); this.reset();">
        <div class="form-group">
          <label class="form-label" for="rev-name">Your Name</label>
          <input type="text" class="form-control" id="rev-name" placeholder="Full name / Company" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="rev-rating">Rating</label>
          <select class="form-control" id="rev-rating">
            <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
            <option value="4">⭐⭐⭐⭐ (4/5)</option>
            <option value="3">⭐⭐⭐ (3/5)</option>
            <option value="2">⭐⭐ (2/5)</option>
            <option value="1">⭐ (1/5)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="rev-comment">Review Content</label>
          <textarea class="form-control" id="rev-comment" rows="4" placeholder="Share your experience with us..." required></textarea>
        </div>
        <button type="submit" class="btn-primary">Submit Review</button>
      </form>
    </div>

  </div>
</div>
</main>
<?php require_once 'includes/spa_footer.php'; ?>
