<?php require_once 'includes/spa_header.php'; ?>
<main class="main-content animated-fade-in" id="app-root">
<div class="app-container" style="padding-top: 120px; padding-bottom: 80px;">
<div style="background:#fff; padding:40px; border-radius:20px; box-shadow:0 20px 40px rgba(0,0,0,0.08);">
<div class="contents">
<h1> Tourist  <span>Places </span></h1>
<p> </p>
<style>
.tour-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
}
.tour-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.04);
}
.tour-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.12);
}
.tour-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 3px solid #d97706;
}
.tour-content {
  padding: 24px;
}
.tour-content h2 {
  margin: 0 0 12px 0;
  font-size: 1.5rem;
  color: #1f2937;
}
.tour-content p {
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 16px;
  line-height: 1.6;
}
.tour-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
}
.tour-meta span {
  font-size: 0.9rem;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 8px;
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

<div class="tour-grid">
  <!-- Sripuram Golden Temple -->
  <div class="tour-card" style="cursor:pointer;" onclick="window.location.href='golden-temple.php'">
    <img src="images/new_golden_temple.png" alt="Sripuram Golden Temple" class="tour-image" />
    <div class="tour-content">
      <h2>Sripuram Golden Temple</h2>
      <p>A breathtaking spiritual park at the foot of a small range of green hills, covered in genuine gold foil.</p>
      <div class="tour-meta">
        <span>🕒 <strong>Timings:</strong> 8:00 AM - 8:00 PM (Daily)</span>
        <span>💰 <strong>Entry Fee:</strong> Free (Special Darshan ₹250)</span>
      </div>
      <div class="card-actions">
        <a href="https://www.google.com/maps/search/?api=1&query=Sripuram+Golden+Temple+Vellore" target="_blank" class="card-btn btn-map" onclick="event.stopPropagation()">📍 Map</a>
        <a href="https://sripuram.org" target="_blank" class="card-btn btn-web" onclick="event.stopPropagation()">🌐 Website</a>
      </div>
    </div>
  </div>

  <!-- Vellore Fort -->
  <div class="tour-card" style="cursor:pointer;" onclick="window.location.href='vellore-fort.php'">
    <img src="images/new_vellore_fort.png" alt="Vellore Fort" class="tour-image" />
    <div class="tour-content">
      <h2>Vellore Fort</h2>
      <p>Built in the 16th century, this grand fort features massive stone ramparts and a wide, crocodile-infested moat.</p>
      <div class="tour-meta">
        <span>🕒 <strong>Timings:</strong> 8:00 AM - 6:00 PM (Daily)</span>
        <span>💰 <strong>Entry Fee:</strong> Free</span>
      </div>
      <div class="card-actions">
        <a href="https://www.google.com/maps/search/?api=1&query=Vellore+Fort+Vellore" target="_blank" class="card-btn btn-map" onclick="event.stopPropagation()">📍 Map</a>
        <a href="#" class="card-btn btn-web" onclick="event.stopPropagation()">🌐 Website</a>
      </div>
    </div>
  </div>

  <!-- Jalakandeswarar Temple -->
  <div class="tour-card">
    <img src="images/new_jalakandeswarar.png" alt="Jalakandeswarar Temple" class="tour-image" />
    <div class="tour-content">
      <h2>Jalakandeswarar Temple</h2>
      <p>An exquisite example of Dravidian architecture famous for its detailed stone carvings inside the Vellore Fort.</p>
      <div class="tour-meta">
        <span>🕒 <strong>Timings:</strong> 6:30 AM - 1 PM & 5 PM - 8:30 PM</span>
        <span>💰 <strong>Entry Fee:</strong> Free</span>
      </div>
      <div class="card-actions">
        <a href="https://www.google.com/maps/search/?api=1&query=Jalakandeswarar+Temple+Vellore" target="_blank" class="card-btn btn-map" onclick="event.stopPropagation()">📍 Map</a>
        <a href="#" class="card-btn btn-web" onclick="event.stopPropagation()">🌐 Website</a>
      </div>
    </div>
  </div>

  <!-- Amirthi Forest -->
  <div class="tour-card" style="cursor:pointer;" onclick="window.location.href='amrithi-forest.php'">
    <img src="images/new_amirthi_forest.jpg" alt="Amirthi Zoological Park" class="tour-image" />
    <div class="tour-content">
      <h2>Amirthi Forest & Waterfalls</h2>
      <p>Established in 1967, this 25-hectare park offers lush green forests, vibrant wildlife, and cascading waterfalls.</p>
      <div class="tour-meta">
        <span>🕒 <strong>Timings:</strong> 8:00 AM - 5:00 PM (Closed Tuesdays)</span>
        <span>💰 <strong>Entry Fee:</strong> ₹10 (Adults), ₹5 (Children)</span>
      </div>
      <div class="card-actions">
        <a href="https://www.google.com/maps/search/?api=1&query=Amirthi+Zoological+Park+Vellore" target="_blank" class="card-btn btn-map" onclick="event.stopPropagation()">📍 Map</a>
        <a href="#" class="card-btn btn-web" onclick="event.stopPropagation()">🌐 Website</a>
      </div>
    </div>
  </div>

  <!-- Govt Museum -->
  <div class="tour-card" style="cursor:pointer;" onclick="window.location.href='govt-museum.php'">
    <img src="images/new_govt_museum.png" alt="Government Museum" class="tour-image" />
    <div class="tour-content">
      <h2>Government Museum</h2>
      <p>A heritage building showcasing rich South Indian history, anthropology, art, and ancient archaeology artifacts.</p>
      <div class="tour-meta">
        <span>🕒 <strong>Timings:</strong> 9:30 AM - 5:00 PM (Closed Fridays)</span>
        <span>💰 <strong>Entry Fee:</strong> ₹5 (Indians), ₹100 (Foreigners)</span>
      </div>
      <div class="card-actions">
        <a href="https://www.google.com/maps/search/?api=1&query=Government+Museum+Vellore" target="_blank" class="card-btn btn-map" onclick="event.stopPropagation()">📍 Map</a>
        <a href="https://www.tnarch.gov.in/vellore-museum" target="_blank" class="card-btn btn-web" onclick="event.stopPropagation()">🌐 Website</a>
      </div>
    </div>
  </div>

  <!-- Fundera Park -->
  <div class="tour-card" style="cursor:pointer;" onclick="window.location.href='fundera-park.php'">
    <img src="images/fundera_park.jpg" alt="Fundera Park" class="tour-image" />
    <div class="tour-content">
      <h2>Fundera Park</h2>
      <p>An amazing exotic bird park and petting zoo where you can interact directly with beautiful, cage-free birds.</p>
      <div class="tour-meta">
        <span>🕒 <strong>Timings:</strong> 9:30 AM - 6:30 PM (Daily)</span>
        <span>💰 <strong>Entry Fee:</strong> ₹250</span>
      </div>
      <div class="card-actions">
        <a href="https://www.google.com/maps/search/?api=1&query=Fundera+Park+Yelagiri" target="_blank" class="card-btn btn-map" onclick="event.stopPropagation()">📍 Map</a>
        <a href="https://funderapark.com" target="_blank" class="card-btn btn-web" onclick="event.stopPropagation()">🌐 Website</a>
      </div>
    </div>
  </div>

</div>

</div>
</div>
</div>
</main>
<?php require_once 'includes/spa_footer.php'; ?>
