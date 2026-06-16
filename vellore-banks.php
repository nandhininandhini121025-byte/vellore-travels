<?php require_once 'includes/spa_header.php'; ?>
<main class="main-content animated-fade-in" id="app-root">
<div class="app-container" style="padding-top: 120px; padding-bottom: 80px;">
<div style="background:#fff; padding:40px; border-radius:20px; box-shadow:0 20px 40px rgba(0,0,0,0.08);">
<div class="contents">
<h1>Banks <span> </span></h1>
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
  <!-- Indian Bank -->
  <div class="directory-card">
    <div class="directory-card-title">Indian Bank</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>36, 3rd Main Road, Phase-I, Sathuvachari,<br>Vellore - 632009</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04166541355" style="color: #4b5563; text-decoration: none;">0416-6541355 / 2253114</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Indian+Bank+Sathuvachari+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="https://indianbank.in/" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- Indian Overseas Bank -->
  <div class="directory-card">
    <div class="directory-card-title">Indian Overseas Bank</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>59, Bangalore Road,<br>Vellore - 632009</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162220836" style="color: #4b5563; text-decoration: none;">0416-2220836</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Indian+Overseas+Bank+Bangalore+Road+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="https://www.iob.in/" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- Axis Bank -->
  <div class="directory-card">
    <div class="directory-card-title">Axis Bank</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>30-15/2, Officers Line,<br>Vellore - 632001</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162226842" style="color: #4b5563; text-decoration: none;">0416-2226842 / 2226841</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Axis+Bank+Officers+Line+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="https://www.axisbank.com/" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- HDFC Bank -->
  <div class="directory-card">
    <div class="directory-card-title">HDFC Bank</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>131/A, Stuartpet, Arakkonam,<br>Vellore - 631001</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04177230243" style="color: #4b5563; text-decoration: none;">04177-230243</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=HDFC+Bank+Arakkonam+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="https://www.hdfcbank.com/" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- Canara Bank -->
  <div class="directory-card">
    <div class="directory-card-title">Canara Bank</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>1/18, Bazaar Street, Anaikkattu,<br>Vellore - 632101</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162276223" style="color: #4b5563; text-decoration: none;">0416-2276223</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Canara+Bank+Anaikkattu+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="https://canarabank.com/" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>
</div>
</div>
 </div>
</div>
</div>
</main>
<?php require_once 'includes/spa_footer.php'; ?>
