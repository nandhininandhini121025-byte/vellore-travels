<?php require_once 'includes/spa_header.php'; ?>
<main class="main-content animated-fade-in" id="app-root">
<div class="app-container" style="padding-top: 120px; padding-bottom: 80px;">
<div style="background:#fff; padding:40px; border-radius:20px; box-shadow:0 20px 40px rgba(0,0,0,0.08);">
<div class="contents">
<h1>Hotels <span>to Stay </span></h1>
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
  <!-- Hotel Darling -->
  <div class="directory-card">
    <div class="directory-card-title">Hotel Darling</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>11/8, Officers Line,<br>Vellore - 632001</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162213002" style="color: #4b5563; text-decoration: none;">0416-2213002</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Hotel+Darling+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="http://www.hoteldarling.in" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- Park Avenue Hotel -->
  <div class="directory-card">
    <div class="directory-card-title">Park Avenue Hotel</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>3, 1st Main Road, Anna Nagar,<br>Vellore - 632001</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162220767" style="color: #4b5563; text-decoration: none;">0416-2220767</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Park+Avenue+Hotel+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="#" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- Hotel Sams -->
  <div class="directory-card">
    <div class="directory-card-title">Hotel Sams</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>Katpadi Road, Thiru Nagar,<br>Vellore - 632006</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162245327" style="color: #4b5563; text-decoration: none;">0416-2245327</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Hotel+Sams+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="#" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- Gokul Hotel -->
  <div class="directory-card">
    <div class="directory-card-title">Gokul Hotel</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>67-A, Arcot Road, Thottapalayam,<br>Vellore - 632004</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04162222454" style="color: #4b5563; text-decoration: none;">0416-2222454</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Gokul+Hotel+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="#" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>

  <!-- Hotel Aruvi -->
  <div class="directory-card">
    <div class="directory-card-title">Hotel Aruvi</div>
    <div class="directory-card-item">
      <span>📍</span>
      <span>17, Vaniyambadi Road, Tirupattur,<br>Vellore - 635601</span>
    </div>
    <div class="directory-card-item">
      <span>📞</span>
      <a href="tel:04179222555" style="color: #4b5563; text-decoration: none;">04179-222555</a>
    </div>
    <div class="card-actions">
      <a href="https://www.google.com/maps/search/?api=1&query=Hotel+Aruvi+Vellore" target="_blank" class="card-btn btn-map">📍 Map</a>
      <a href="#" target="_blank" class="card-btn btn-web">🌐 Website</a>
    </div>
  </div>
</div>
</div>
 </div>
</div>
</div>
</main>
<?php require_once 'includes/spa_footer.php'; ?>
