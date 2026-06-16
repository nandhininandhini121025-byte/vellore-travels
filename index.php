<?php require_once 'includes/spa_header.php'; ?>

  <!-- Client-side Router Container -->
  <main class="main-content animated-fade-in" id="app-root">
    <div class="home-hero-full animated-fade-in">
      <div class="app-container hero-inner-container">
        <div class="hero-content-wrapper">
          <h1 class="hero-main-title">Explore<br>your amazing city<br><span class="hero-vellore-text">Vellore</span></h1>
          <p class="hero-sub-title">Find great places to stay, eat, shop, or visit from local experts</p>
          
          <div class="complex-search-bar">
            <div class="search-input-group">
              <input type="text" placeholder="Ex: food, service, hotel" id="search-what">
            </div>
            <div class="search-divider"></div>
            <div class="search-input-group">
              <select id="search-where">
                <option value="">Where</option>
                <option value="vellore">Vellore</option>
                <option value="yelagiri">Yelagiri</option>
              </select>
            </div>
            <button class="search-submit-btn" id="home-search-btn" onclick="window.location.href='tourist-places.php'">Search</button>
          </div>

          <div class="highlights-text">Or browse the highlights</div>
          <div class="highlights-pills">
            <button class="pill-btn" onclick="window.location.href='vellore-hotels.php'">🍴 Restaurant</button>
            <button class="pill-btn" onclick="window.location.href='vellore-hotels.php'">🏨 Hotel</button>
            <button class="pill-btn" onclick="window.location.href='tourist-places.php'">🗺️ Places</button>
            <button class="pill-btn" onclick="window.location.href='tourist-places.php'">🛍️ Shopping</button>
          </div>
        </div>
      </div>
      
      <div class="feature-cards-container">
        <div class="app-container">
          <div class="feature-cards-grid">
            <div class="feat-card">
              <div class="feat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v12M9 9h6M9 15h6"></path><path d="M9 12h3"></path></svg>
              </div>
              <h4>Best Price<br>Guarantee</h4>
              <p>We offer the most competitive rates for cabs, hotels, and customized tour packages in Vellore.</p>
            </div>
            <div class="feat-card">
              <div class="feat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h4>Travellers<br>Love Us</h4>
              <p>Thousands of happy customers have rated us highly for our reliable service and friendly guides.</p>
            </div>
            <div class="feat-card">
              <div class="feat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h4>Best Travel<br>Agent</h4>
              <p>Recognized as Vellore's premier travel operator since 2008, ensuring safe and memorable journeys.</p>
            </div>
            <div class="feat-card">
              <div class="feat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
              </div>
              <h4>Our Dedicated<br>Support</h4>
              <p>Our customer support team is available 24/7 to assist you with your bookings and travel needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

<?php require_once 'includes/spa_footer.php'; ?>
