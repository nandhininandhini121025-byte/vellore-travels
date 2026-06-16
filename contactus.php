<?php require_once 'includes/spa_header.php'; ?>
<main class="main-content animated-fade-in" id="app-root">
<div class="app-container" style="padding-top: 120px; padding-bottom: 80px;">
  <h2 class="section-title" style="margin-bottom: 24px;">Contact <span>Us</span></h2>

  <div class="home-layout">
    
    <!-- Left: Form -->
    <div class="glass-panel">
      <h3 style="font-size:20px; margin-bottom:16px;">Send us a message</h3>
      <form id="direct-contact-form" onsubmit="event.preventDefault(); alert('Thank you for contacting Vellore Travels. Our support desk has logged your request and will reach out to you within 24 hours!'); this.reset();">
        <div class="booking-form-grid">
          <div class="form-group">
            <label class="form-label" for="ct-name">Name *</label>
            <input type="text" class="form-control" id="ct-name" placeholder="Name" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="ct-phone">Mobile No *</label>
            <input type="tel" class="form-control" id="ct-phone" placeholder="Contact number" required>
          </div>
          <div class="form-group full-width">
            <label class="form-label" for="ct-email">Email ID *</label>
            <input type="email" class="form-control" id="ct-email" placeholder="Email Address" required>
          </div>
          <div class="form-group full-width">
            <label class="form-label" for="ct-msg">Message Details *</label>
            <textarea class="form-control" id="ct-msg" rows="5" placeholder="Detail enquiry description..." required></textarea>
          </div>
        </div>
        <button type="submit" class="btn-primary" style="margin-top:16px; width:auto; padding:12px 36px;">Submit Form</button>
      </form>
    </div>

    <!-- Right: Address & Information Panel -->
    <div class="side-widget">
      
      <div class="widget-panel">
        <h3 class="widget-title" style="font-size:16px;">Vellore Travels Head Office</h3>
        <p style="font-size:14px; color:var(--text-secondary); margin-bottom:12px;">
          <strong>📍 Address:</strong><br>
          11/8, Officers Line,<br>
          Opp. to Lakshmi Hall,<br>
          Vellore - 632001,<br>
          Tamil Nadu, India
        </p>
        <p style="font-size:14px; color:var(--text-secondary); margin-bottom:12px;">
          <strong>📞 Call Desk:</strong><br>
          0416-2223051<br>
          +91 94437 24486
        </p>
        <p style="font-size:14px; color:var(--text-secondary);">
          <strong>✉️ Inbox:</strong><br>
          support@velloretravels.in<br>
          bookings@velloretravels.in
        </p>
      </div>

      <!-- Placeholder map panel -->
      <div class="widget-panel" style="padding: 10px; background: rgba(0,0,0,0.3); text-align:center;">
        <div style="height:180px; border-radius:6px; background: rgba(255,255,255,0.02); display:flex; flex-direction:column; justify-content:center; align-items:center; border: 1px dashed var(--border-glass);">
          <span style="font-size:32px; margin-bottom:8px;">🗺️</span>
          <strong style="font-size:14px; color:var(--text-primary);">Interactive Maps</strong>
          <span style="font-size:11px; color:var(--text-muted); max-width:160px; margin-top:4px;">
            Officers Line location pinned on Google Maps
          </span>
        </div>
      </div>

    </div>

  </div>
</div>
</main>
<?php require_once 'includes/spa_footer.php'; ?>