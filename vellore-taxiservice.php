<?php require_once 'includes/spa_header.php'; ?>
<main class="main-content animated-fade-in" id="app-root">
<div class="app-container" style="padding-top: 120px; padding-bottom: 80px;">
<div style="background:#fff; padding:40px; border-radius:20px; box-shadow:0 20px 40px rgba(0,0,0,0.08);">
<div class="contents">
<h1>Taxi <span> </span></h1>
<p>&nbsp;</p>
<style>
.directory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 20px;
}
.directory-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.04);
  position: relative;
  overflow: hidden;
}
.directory-card:before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 4px; height: 100%;
  background: var(--accent-primary, #d97706);
}
.directory-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}
.directory-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.directory-card-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
}
.card-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #f3f4f6;
}
.card-btn {
  flex: 1;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-map {
  background: #fef3c7;
  color: #b45309;
}
.btn-map:hover {
  background: #fde68a;
}
.btn-web {
  background: #e0f2fe;
  color: #0369a1;
}
.btn-web:hover {
  background: #bae6fd;
}
</style>

<div class="directory-grid">
  <!-- BSR Travels -->
  <div class="directory-card">
    <div class="directory-card-title">BSR Travels</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>53/17, Avalkara Street, Kosapet,<br>Vellore - 632001</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162223051" style="color: #4b5563; text-decoration: none;">0416-2223051</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=BSR+Travels+Kosapet+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="#" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- Latha Tourist And Taxies -->
  <div class="directory-card">
    <div class="directory-card-title">Latha Tourist And Taxies</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>171, Gandhi Road,<br>Vellore - 632004</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162222759" style="color: #4b5563; text-decoration: none;">0416-2222759</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Latha+Tourist+And+Taxies+Gandhi+Road+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="#" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- Dorai Raj Travels -->
  <div class="directory-card">
    <div class="directory-card-title">Dorai Raj Travels</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>61, Old Bus Stand, Bangalore Road,<br>Vellore - 632004</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162221757" style="color: #4b5563; text-decoration: none;">0416-2221757 / 2224992</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Dorai+Raj+Travels+Bangalore+Road+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="#" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- SVS Travels -->
  <div class="directory-card">
    <div class="directory-card-title">SVS Travels</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>515-F, RTO Office Road, Sathuvachari,<br>Vellore - 632001</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162256603" style="color: #4b5563; text-decoration: none;">0416-2256603</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=SVS+Travels+Sathuvachari+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="#" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- ABBA CABS VELLORE -->
  <div class="directory-card">
    <div class="directory-card-title">ABBA CABS VELLORE</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>8, Garden Colony, Bernicepuram, Katpadi,<br>Vellore - 632007</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:8344757476" style="color: #4b5563; text-decoration: none;">8344757476 / 9566557892</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=ABBA+CABS+VELLORE+Katpadi+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="https://www.abbacabs.com/" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>
</div>
</div>
 </div>
</div>
</div>
</main>
<?php require_once 'includes/spa_footer.php'; ?>
