/**
 * Vellore Travels - Premium SPA Application Logic
 */

// --- DATA DEFINITIONS ---

const TOURIST_SPOTS = [
  {
    id: "vellore-fort",
    title: "Vellore Fort",
    short: "A grand 16th-century granite fort surrounded by a massive moat, renowned for its formidable defenses and rich heritage.",
    desc: `Constructed in the 16th century under the Vijayanagara Empire by chieftain Sinna Bommi Nayak, Vellore Fort is a testament to the region's enduring military architecture. The fort is built with massive granite blocks and features one of the most formidable moats in South India, which historically teemed with thousands of crocodiles to deter invaders.<br><br>
    Over the centuries, the fort became a strategic stronghold, changing hands from the Vijayanagara kings to the Bijapur Sultans, then to the Marathas, the Nawabs of the Carnatic, and finally the British. It famously housed the family of Tipu Sultan after the fall of Srirangapatna and was the epicenter of the Sepoy Mutiny of 1806—the first major uprising against British rule.<br><br>
    <strong>2026 Update:</strong> The Archaeological Survey of India (ASI) recently completed a major conservation project, carefully removing vegetation from the 3-km-long granite parapet walls to preserve the structure. It remains a shining symbol of religious harmony, housing the Jalakanteshwara Temple, St. John's Church, and a historic mosque.`,
    image: "images/vellore_fort.png",
    location: "Vellore Fort Area, Vellore",
    timing: "08:00 AM - 06:00 PM",
    fee: "Free Entry",
    mapLink: "https://maps.google.com/?q=Vellore+Fort+Vellore"
  },
  {
    id: "golden-temple",
    title: "Sripuram Golden Temple",
    short: "A spectacular spiritual park featuring a stunning temple coated with over 1.5 tonnes of pure gold.",
    desc: `Located at the foothills of Malaikodi in southern Vellore, the Sripuram Golden Temple is a mesmerizing spiritual destination. The centerpiece is the Sri Lakshmi Narayani Temple, whose entire Vimanam and Ardha Mandapam are meticulously coated with over 1.5 tonnes of pure gold, making it the largest golden temple in the world.<br><br>
    Inaugurated in 2007 by Sri Sakthi Amma, the temple's intricate gold work was entirely handcrafted by skilled artisans who mounted layers of gold foil onto intricately etched copper plates. Visitors approach the temple via a unique star-shaped pathway (Sri Chakra) stretching nearly 1.8 kilometers through incredibly lush, landscaped gardens.<br><br>
    <strong>2026 Update:</strong> The temple is open daily from 8:00 AM to 8:00 PM. A special 'Divya Darshan Seva' has been recently structured for weekends (Friday-Sunday) at a nominal donation of ₹100 for quicker access. Electronic devices remain strictly prohibited to preserve the tranquility.`,
    image: "images/golden_temple.png",
    location: "Thirumalaikodi, Vellore",
    timing: "08:00 AM - 08:00 PM",
    fee: "Free (Divya Darshan Seva ₹100 on weekends)",
    mapLink: "https://maps.google.com/?q=Sripuram+Golden+Temple+Vellore"
  },
  {
    id: "govt-museum",
    title: "Government Museum",
    short: "A treasure trove of ancient artifacts, Pallava sculptures, and historical relics housed within Vellore Fort.",
    desc: `Nestled within the historic walls of Vellore Fort, the State Government Museum is a custodian of the region's diverse cultural, historical, and biological heritage. Established in 1985, it offers an expansive collection ranging from anthropology and archaeology to botany and zoology.<br><br>
    History enthusiasts will be fascinated by the museum's rare artifacts, including double-antenna bronze swords from 400 BC, exquisite stone sculptures from the late Pallava and Vijayanagara eras, and an intricate ivory chessboard once used by the last Kandyan King of Sri Lanka.<br><br>
    <strong>2026 Update:</strong> Recent curation efforts have expanded the numismatic collections, showcasing newly discovered ancient coins from the Chola dynasty. The museum provides a deep, updated dive into the warfare and lifestyles of South India's bygone empires.`,
    image: "images/govt_museum.png",
    location: "Inside Vellore Fort, Vellore",
    timing: "09:00 AM - 12:30 PM, 02:00 PM - 05:00 PM (Closed Fridays)",
    fee: "INR 5 for Indians, INR 100 for Foreigners",
    mapLink: "https://maps.google.com/?q=Government+Museum+Inside+Vellore+Fort"
  },
  {
    id: "kavalur-observatory",
    title: "Vainu Bappu Observatory",
    short: "One of Asia's premier astronomical observatories, hidden amidst the pristine Javadu Hills.",
    desc: `Situated in the serene environment of Kavalur within the Javadu Hills, the Vainu Bappu Observatory is an astronomical marvel operated by the Indian Institute of Astrophysics. Surrounded by a 100-acre lush tropical forest, it offers exceptionally clear night skies away from urban light pollution.<br><br>
    Named after the renowned astronomer M.K. Vainu Bappu, the facility is strategically located close to the Earth's equator. It is home to the impressive 2.3-meter Vainu Bappu Telescope, one of the largest in Asia, which has contributed to massive discoveries including the atmosphere on Ganymede.<br><br>
    <strong>2026 Update:</strong> The observatory has implemented stricter light-pollution guidelines for the surrounding hill zones to preserve the sky's pristine darkness. Prior permissions are mandatory for public viewing on Saturday evenings.`,
    image: "images/observatory.png",
    location: "Kavalur, Javadu Hills, Vellore",
    timing: "Saturdays Evenings (Subject to clear skies & permissions)",
    fee: "Free (Prior permission mandatory)",
    mapLink: "https://maps.google.com/?q=Vainu+Bappu+Observatory+Kavalur"
  },
  {
    id: "yelagiri-hills",
    title: "Yelagiri Hills",
    short: "A tranquil and unpolluted hill station, offering breathtaking landscapes, boating, and scenic treks.",
    desc: `Known affectionately as the 'Mini Ooty' of Vellore, Yelagiri is a pristine hill station standing majestically at 920 meters above sea level. Surrounded by sweeping valleys and four towering mountains, it boasts a salubrious climate year-round, originally settled by tribal communities centuries ago.<br><br>
    Unlike hyper-commercialized tourist spots, Yelagiri retains its remote charm. It is home to 14 tribal villages where locals engage in traditional agriculture. Visitors can explore the serene Punganur Lake for boating and hike the Swamimalai Hill trek.<br><br>
    <strong>2026 Update:</strong> Yelagiri is fast becoming an adventure tourism hub. The Yelagiri Adventure Sports Association (YASA) now offers paragliding, rock climbing, and zorbing. Family attractions like Fundera Park have also been newly introduced, featuring exotic birds and petting farms.`,
    image: "images/yelagiri_hills.png",
    location: "Yelagiri, Vellore District",
    timing: "Open 24 hours",
    fee: "Free Entry",
    mapLink: "https://maps.google.com/?q=Yelagiri+Hills+Vellore"
  },
  {
    id: "amirthi-forest",
    title: "Amirthi Forest & Zoo",
    short: "A captivating wildlife sanctuary and picnic spot featuring rich biodiversity and cascading waterfalls.",
    desc: `Tucked beneath the picturesque Javadu Hills, about 25 kilometers from Vellore, lies the Amirthi Zoological Park and Forest. Covering 25 hectares, this beautiful sanctuary was established in 1967 and is evenly divided between a protected wildlife habitat and a tourist-friendly recreational zone.<br><br>
    The sanctuary is a haven for nature lovers, populated with diverse flora, herbal plants, and an array of wildlife including spotted deer, monkeys, wild boars, and exotic birds. The terrain features meandering pathways cut into rocky steps that lead to a charming waterfall.<br><br>
    <strong>2026 Update:</strong> The forest department has recently upgraded the trekking trails and installed sustainable eco-friendly amenities for visitors. It remains a top weekend retreat, especially vibrant post-monsoon.`,
    image: "images/amirthi_zoo.png",
    location: "Amirthi, 25km from Vellore",
    timing: "08:00 AM - 05:00 PM (Closed on Tuesdays)",
    fee: "INR 10 for Adults, INR 5 for Kids",
    mapLink: "https://maps.google.com/?q=Amirthi+Zoological+Park+Vellore"
  },
  {
    id: "jalagamparai-falls",
    title: "Jalagamparai Waterfalls",
    short: "A spectacular waterfall cascading from 15 meters, accessible via a thrilling trek through the Yelagiri hills.",
    desc: `Created by the Attaru river cascading through the rugged terrains of the Yelagiri hills, the Jalagamparai Waterfalls is one of the district's most awe-inspiring natural attractions. Flowing down from a dramatic height of 15 meters, the falls create a misty, enchanting atmosphere.<br><br>
    Reaching the falls is an adventure in itself, typically involving a scenic 5-kilometer trek from Nilavoor, offering breathtaking views of the valley. The surrounding forests are steeped in local folklore, believed to house medicinal herbs.<br><br>
    <strong>2026 Update:</strong> The trail paths have been moderately reinforced for safety following recent monsoons. The area is most vibrant just after the rainy season (November-January). An adjacent Murugan temple shaped like a Lingam adds a touch of spirituality to the trek.`,
    image: "images/jalagamparai_waterfalls.png",
    location: "Yelagiri Hills, Vellore",
    timing: "06:00 AM - 05:00 PM",
    fee: "Free Entry",
    mapLink: "https://maps.google.com/?q=Jalagamparai+Waterfalls+Yelagiri"
  },
  {
    id: "ratnagiri-temple",
    title: "Ratnagiri Murugan Temple",
    short: "An ancient 14th-century temple perched atop a hill, dedicated to Lord Murugan.",
    desc: `Perched beautifully on a small hillock about 13 kilometers from Vellore on the Chennai-Vellore highway, the Ratnagiri Murugan Temple is a prominent spiritual landmark. The original structure dates back to the 14th century, built by the illustrious Chola kings.<br><br>
    Over the years, the temple was remarkably renovated and expanded under the guidance of Swami Balamurugan Adimai, transforming it from a simple sand shrine into a majestic architectural marvel. The ascent to the temple via a flight of steps offers a breezy and uplifting experience.<br><br>
    <strong>2026 Update:</strong> The temple continues to attract thousands of devotees. Recent expansions to the parking and visitor facilities have made the temple more accessible during major festivals like Krithigai and Skanda Sashti.`,
    image: "images/ratnagiri_temple.png",
    location: "Ratnagiri, Vellore",
    timing: "06:00 AM - 01:00 PM, 04:00 PM - 08:00 PM",
    fee: "Free Entry",
    mapLink: "https://maps.google.com/?q=Ratnagiri+Murugan+Temple+Vellore"
  },
  {
    id: "palamathi-hills",
    title: "Palamathi Hills",
    short: "A secluded and serene hillock featuring the Balamurugan temple and lush green landscapes.",
    desc: `Palamathi Hills, a part of the Eastern Ghats, is a lesser-known yet incredibly serene destination located on the outskirts of Vellore. Atop the hill sits the beautifully constructed Palamathi Balamurugan Temple, a place of deep tranquility and spiritual solace.<br><br>
    The drive or trek up the winding ghat roads offers stunning, unobstructed views of Vellore city and the surrounding rugged landscapes. Historically a quiet retreat for hermits, the climate here is remarkably cooler than the plains, making it an ideal spot for early morning hikes.<br><br>
    <strong>2026 Update:</strong> The route to Palamathi has seen recent road improvements, making the drive smoother for tourists. It remains a highly recommended spot for nature walks, photography, and experiencing a breathtaking, uncrowded sunrise.`,
    image: "images/palamathi_hills.png",
    location: "Palamathi, Vellore",
    timing: "06:00 AM - 07:00 PM",
    fee: "Free Entry",
    mapLink: "https://maps.google.com/?q=Palamathi+Hills+Vellore"
  }
];

const DIRECTORY_ITEMS = [
  // Hotels
  { category: "hotels", name: "Fortune Park", address: "8th East Main Road, Gandhi Nagar, Vellore-632006", phone: "0416-2244000", website: "https://www.fortunehotels.in", mapLink: "https://maps.google.com/?q=Fortune+Park+Vellore" },
  { category: "hotels", name: "Regency Sameera by GRT", address: "145, Green Circle, New By-Pass Road, Vellore-632004", phone: "0416-2206466", website: "https://grthotels.com", mapLink: "https://maps.google.com/?q=Regency+Sameera+by+GRT+Vellore" },
  { category: "hotels", name: "Benzz Park", address: "No. 4, Dharmaraja Koil St, Thottapalayam, Vellore-632004", phone: "0416-2228899", website: "https://www.benzzpark.com", mapLink: "https://maps.google.com/?q=Benzz+Park+Vellore" },
  { category: "hotels", name: "Hotel Darling", address: "11/8, Officers Line, Vellore-632001", phone: "0416-2213002", website: "https://www.darlingresidency.com", mapLink: "https://maps.google.com/?q=Hotel+Darling+Vellore" },
  { category: "hotels", name: "Park Avenue Hotel", address: "3, 1st Main Road, Anna Nagar, Vellore-632001", phone: "0416-2220767", website: "http://www.parkavenuehotel.in", mapLink: "https://maps.google.com/?q=Park+Avenue+Hotel+Vellore" },
  { category: "hotels", name: "Hotel Sams", address: "Katpadi Road, Thiru Nagar, Vellore-632006", phone: "0416-2245327", mapLink: "https://maps.google.com/?q=Hotel+Sams+Vellore" },
  { category: "hotels", name: "Gokul Hotel", address: "Opp. CMC Hospital, Ida Scudder Road, Vellore", phone: "0416-2224095", mapLink: "https://maps.google.com/?q=Gokul+Hotel+Vellore" },
  { category: "hotels", name: "Hotel Aruvi", address: "Athanavoor, Yelagiri Hills, Tirupattur", phone: "04179-245246", website: "https://hotelaruvi.com", mapLink: "https://maps.google.com/?q=Hotel+Aruvi+Yelagiri" },

  // ATMs
  { category: "atms", name: "ICICI Bank - ATM", address: "62, Ground Floor, Bangalore Road, Vellore-632004", phone: "1800 1080", mapLink: "https://maps.google.com/?q=ICICI+Bank+ATM+Bangalore+Road+Vellore" },
  { category: "atms", name: "State Bank of India - ATM", address: "Bagayam, CMC Campus, Thorappadi, Vellore-632002", phone: "1800 11 2211", mapLink: "https://maps.google.com/?q=State+Bank+of+India+ATM+CMC+Campus+Vellore" },
  { category: "atms", name: "Indian Bank ATM", address: "RTO Road, Sathuvachari, Vellore-632009", phone: "1800 425 00 000", mapLink: "https://maps.google.com/?q=Indian+Bank+ATM+Sathuvachari+Vellore" },
  { category: "atms", name: "Karur Vysya Bank ATM", address: "Arcot Road, Vellore-632004", phone: "1860 266 4454", mapLink: "https://maps.google.com/?q=Karur+Vysya+Bank+ATM+Arcot+Road+Vellore" },

  // Banks
  { category: "banks", name: "Indian Bank", address: "36, 3rd Main Road, Phase-I, Sathuvachari, Vellore-632009", phone: "0416-6541355", mapLink: "https://maps.google.com/?q=Indian+Bank+Sathuvachari+Vellore" },
  { category: "banks", name: "Indian Overseas Bank", address: "59, Bangalore Road, Vellore-632009", phone: "0416-2220836", mapLink: "https://maps.google.com/?q=Indian+Overseas+Bank+Bangalore+Road+Vellore" },
  { category: "banks", name: "Axis Bank", address: "30-15/2, Officers Line, Vellore-632001", phone: "0416-2226842", mapLink: "https://maps.google.com/?q=Axis+Bank+Officers+Line+Vellore" },
  { category: "banks", name: "HDFC Bank", address: "131/A, Stuartpet, Arakkonam, Vellore-631001", phone: "04177-230243", mapLink: "https://maps.google.com/?q=HDFC+Bank+Arakkonam+Vellore" },
  { category: "banks", name: "Canara Bank", address: "1/18, Bazaar Street, Anaikkattu, Vellore-632101", phone: "0416-2276223", mapLink: "https://maps.google.com/?q=Canara+Bank+Anaikkattu+Vellore" },

  // Taxi Services
  { category: "taxis", name: "BSR Travels", address: "53/17, Avalkara Street, Kosapet, Vellore-632001", phone: "0416-2223051", website: "https://www.google.com/search?q=BSR+Travels+Vellore", mapLink: "https://maps.google.com/?q=BSR+Travels+Kosapet+Vellore" },
  { category: "taxis", name: "Latha Tourist And Taxies", address: "171, Gandhi Road, Vellore-632004", phone: "0416-2222759", website: "https://www.google.com/search?q=Latha+Tourist+And+Taxies+Vellore", mapLink: "https://maps.google.com/?q=Latha+Tourist+And+Taxies+Vellore" },
  { category: "taxis", name: "Dorai Raj Travels", address: "61, Old Bus Stand, Bangalore Road, Vellore-632004", phone: "0416-2221757", website: "https://www.google.com/search?q=Dorai+Raj+Travels+Vellore", mapLink: "https://maps.google.com/?q=Dorai+Raj+Travels+Bangalore+Road+Vellore" },
  { category: "taxis", name: "SVS Travels", address: "515-F, RTO Office Road, Sathuvachari, Vellore-632001", phone: "0416-2256603", website: "https://www.google.com/search?q=SVS+Travels+Vellore", mapLink: "https://maps.google.com/?q=SVS+Travels+Sathuvachari+Vellore" },
  { category: "taxis", name: "ABBA CABS VELLORE", address: "8, Garden Colony, Bernicepuram, Katpadi, Vellore-632007", phone: "8344757476", website: "https://www.abbacabs.com", mapLink: "https://maps.google.com/?q=ABBA+CABS+Katpadi+Vellore" },

  // Tour Operators
  { category: "operators", name: "Time Travels & Tours", address: "9, Katpadi Road, Mundy Street, Vellore-632004", phone: "0416-2225404", website: "https://www.google.com/search?q=Time+Travels+Tours+Vellore", mapLink: "https://maps.google.com/?q=Time+Travels+Tours+Mundy+Street+Vellore" },
  { category: "operators", name: "MKM Tours And Travels", address: "9/3, Kangeyanallur, Vellore-632004", phone: "0416-2220739", website: "https://www.google.com/search?q=MKM+Tours+And+Travels+Vellore", mapLink: "https://maps.google.com/?q=MKM+Tours+And+Travels+Kangeyanallur+Vellore" },
  { category: "operators", name: "Mahalakshmi Travels", address: "17, MBT Road, Navalpur, Ranipet, Vellore-632401", phone: "04172-270879", website: "https://www.google.com/search?q=Mahalakshmi+Travels+Ranipet", mapLink: "https://maps.google.com/?q=Mahalakshmi+Travels+Ranipet+Vellore" },
  { category: "operators", name: "Durga Travels", address: "81, Chittoor Road, Katpadi, Vellore-632007", phone: "0416-2296102", website: "https://www.google.com/search?q=Durga+Travels+Katpadi", mapLink: "https://maps.google.com/?q=Durga+Travels+Katpadi+Vellore" }
];

const INITIAL_TESTIMONIALS = [
  { name: "Shrine Properties", comment: "The marketing consultants of flats and plots dealing with real estate. Highly satisfied with Vellore Travels' cab logistics.", rating: 5, date: "June 2026" },
  { name: "Vellore Tech Park", comment: "Excellent corporate travel packages. Reliable drivers, punctual timings, and premium glass-clean cabs.", rating: 5, date: "May 2026" },
  { name: "R. Krishnan", comment: "Our family tour to Yelagiri was fantastic. The driver knew the hills very well. Highly recommended!", rating: 4, date: "April 2026" }
];

// Load local storage states
if (!localStorage.getItem('testimonials')) {
  localStorage.setItem('testimonials', JSON.stringify(INITIAL_TESTIMONIALS));
}

// --- STATE MANAGEMENT ---
const AppState = {
  currentRoute: "home",
  searchQuery: "",
  activeDirectoryTab: "hotels"
};

// --- DOM ELEMENT REFERENCES ---
const appRoot = document.getElementById("app-root");
const menuToggle = document.getElementById("menu-hamburger");
const navMenu = document.getElementById("navigation-menu");
const globalSearch = document.getElementById("global-portal-search");
const attractionModal = document.getElementById("attraction-details-modal");
const closeAttractionBtn = document.getElementById("close-attraction-modal");

// --- HELPER SVGS ---
const ICONS = {
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  mapPin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  calendar: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  star: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" style="color: var(--accent-gold);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
};

// --- ROUTER & VIEW ENGINE ---

const routes = {
  home: renderHome,
  places: renderPlaces,
  directory: renderDirectory,
  testimonials: renderTestimonials,
  contact: renderContact
};

function initApp() {
  // Setup Router listeners
  window.addEventListener("hashchange", handleRouting);
  
  // Header Navigation listeners
  document.querySelectorAll("[data-route]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const targetRoute = el.getAttribute("data-route");
      window.location.hash = targetRoute;
    });
  });

  // Mobile menu hamburger toggle
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close nav menu on click on mobile
  navMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      navMenu.classList.remove("active");
    }
  });

  // Global search tool listener
  if (globalSearch) {
    globalSearch.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value.toLowerCase();
      triggerSearchFilter();
    });
  }

  // Modals close triggers
  closeAttractionBtn.addEventListener("click", closeModal);
  
  // Set default route
  handleRouting();
}

function handleRouting() {
  const hash = window.location.hash.substring(1) || "home";
  
  // Match route
  if (routes[hash]) {
    AppState.currentRoute = hash;
    
    // Smooth transition
    appRoot.classList.add("loading");
    
    setTimeout(() => {
      // Clear root & render
      appRoot.innerHTML = "";
      routes[hash]();
      
      // Update nav active state
      document.querySelectorAll(".nav-item").forEach(item => {
        if (item.getAttribute("data-route") === hash) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      // Toggle body class for transparent header
      if (hash === "home") {
        document.body.classList.add("home-active");
      } else {
        document.body.classList.remove("home-active");
      }
      
      appRoot.classList.remove("loading");
      triggerSearchFilter(); // Re-apply current search if typed
    }, 150);
  }
}

// Global portal search filters items on the active views
function triggerSearchFilter() {
  const query = AppState.searchQuery;
  
  if (AppState.currentRoute === "directory") {
    // Filter directory cards
    const cards = document.querySelectorAll(".directory-card");
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  } else if (AppState.currentRoute === "places") {
    // Filter tourist cards
    const cards = document.querySelectorAll(".place-card");
    cards.forEach(card => {
      const title = card.querySelector(".place-card-title").textContent.toLowerCase();
      const desc = card.querySelector(".place-card-desc").textContent.toLowerCase();
      if (title.includes(query) || desc.includes(query)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }
}

function closeModal() {
  attractionModal.classList.remove("active");
}

function openAttractionDetail(spotId) {
  const spot = TOURIST_SPOTS.find(s => s.id === spotId);
  if (spot) {
    document.getElementById("modal-banner-image").src = spot.image;
    document.getElementById("modal-banner-image").alt = spot.title;
    document.getElementById("modal-attraction-title").textContent = spot.title;
    document.getElementById("modal-attraction-body").innerHTML = `
      <div style="display:flex; flex-wrap:wrap; gap:16px; margin-bottom: 20px; font-size:14px; background:rgba(255,255,255,0.03); padding:16px; border-radius:8px; border:1px solid var(--border-glass);">
        <div><strong>📍 Location:</strong> ${spot.location}</div>
        <div><strong>⏰ Timings:</strong> ${spot.timing}</div>
        <div><strong>🎟️ Entry Fee:</strong> ${spot.fee}</div>
        ${spot.mapLink ? `<div style="flex-basis:100%;"><a href="${spot.mapLink}" target="_blank" style="display:inline-block; margin-top:4px; color:#3b82f6; font-weight:600; text-decoration:none;">📍 View exact location on Google Maps →</a></div>` : ''}
      </div>
      <p style="margin-bottom:16px;">${spot.desc}</p>
    `;
    attractionModal.classList.add("active");
  }
}

// --- RENDER FUNCTIONS ---

// 1. Home View Render
function renderHome() {
  const homeHTML = `
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
            <button class="search-submit-btn" id="home-search-btn">Search</button>
          </div>

          <div class="highlights-text">Or browse the highlights</div>
          <div class="highlights-pills">
            <button class="pill-btn">🍴 Restaurant</button>
            <button class="pill-btn">🏨 Hotel</button>
            <button class="pill-btn">🗺️ Places</button>
            <button class="pill-btn">🛍️ Shopping</button>
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
  `;
  appRoot.innerHTML = homeHTML;

  // Search Logic
  const searchBtn = document.getElementById("home-search-btn");
  const searchInput = document.getElementById("search-what");
  const searchWhere = document.getElementById("search-where");
  const pills = document.querySelectorAll(".pill-btn");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.toLowerCase().trim();
      const where = searchWhere.value;
      
      // Save search state
      AppState.searchQuery = query;
      
      // Decide route based on keywords or just go to places
      if (query.includes("hotel") || query.includes("bank") || query.includes("taxi")) {
        window.location.hash = "directory";
      } else {
        window.location.hash = "places";
      }
    });

    // Enter key support
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchBtn.click();
      }
    });
  }

  // Pill buttons quick search
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const text = pill.textContent.replace(/[^a-zA-Z]/g, '').trim().toLowerCase();
      searchInput.value = text;
      searchBtn.click();
    });
  });
}

// 2. Tourist Places Grid Render
function renderPlaces() {
  const placesHTML = `
    <div class="app-container animated-fade-in" style="padding-top: 40px;">
      <div class="section-header">
        <h2 class="section-title">Tourist <span>Attractions</span></h2>
        <span style="font-size:14px; color:var(--text-secondary);">${TOURIST_SPOTS.length} Locations found</span>
      </div>
      <div class="places-scroller" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
        ${TOURIST_SPOTS.map(spot => `
          <div class="place-card" style="height: 400px;" onclick="openAttractionDetail('${spot.id}')">
            <img src="${spot.image}" alt="${spot.title}" class="place-card-img" style="height:220px;">
            <div class="place-card-content">
              <div>
                <h3 class="place-card-title">${spot.title}</h3>
                <p class="place-card-desc">${spot.short}</p>
              </div>
              <div class="place-card-footer">
                <span style="font-size:13px; color:var(--text-muted); display:flex; align-items:center; gap:4px;">
                  ${ICONS.mapPin} ${spot.location.split(',')[0]}
                </span>
                <span class="place-card-btn">Explore Info ${ICONS.arrowRight}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  appRoot.innerHTML = placesHTML;
}

// 3. Local Directory Listings Render
function renderDirectory() {
  const tabs = [
    { id: "hotels", label: "Hotels to Stay" },
    { id: "atms", label: "ATMs" },
    { id: "banks", label: "Banks" },
    { id: "taxis", label: "Taxi Services" },
    { id: "operators", label: "Tour Operators" }
  ];

  const directoryHTML = `
    <div class="app-container animated-fade-in" style="padding-top: 40px;">
      <div class="section-header">
        <h2 class="section-title">City <span>Directory</span></h2>
      </div>

      <!-- Tabs navigation wrapper -->
      <div class="directory-tabs">
        ${tabs.map(t => `
          <button class="dir-tab-btn ${AppState.activeDirectoryTab === t.id ? 'active' : ''}" data-tab="${t.id}" id="tab-btn-${t.id}">
            ${t.label}
          </button>
        `).join('')}
      </div>

      <!-- Listing display grid -->
      <div class="directory-grid" id="directory-grid-container">
        <!-- Rendered lists by JS -->
      </div>
    </div>
  `;
  appRoot.innerHTML = directoryHTML;

  // Add click events to tab switcher buttons
  document.querySelectorAll(".dir-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".dir-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.activeDirectoryTab = btn.getAttribute("data-tab");
      renderDirectoryGrid();
    });
  });

  // Initial grid loading
  renderDirectoryGrid();
}

function renderDirectoryGrid() {
  const container = document.getElementById("directory-grid-container");
  if (!container) return;

  const currentTab = AppState.activeDirectoryTab;
  const items = DIRECTORY_ITEMS.filter(item => item.category === currentTab);

  if (items.length === 0) {
    container.innerHTML = `<p style="color:var(--text-secondary); text-align:center; grid-column: 1/-1; padding:40px;">No listings found in this category.</p>`;
    return;
  }

  // Draw items
  container.innerHTML = items.map(item => `
    <div class="directory-card animated-fade-in">
      ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">` : ''}
      <div class="directory-card-title">
        ${item.name}
        <span style="font-size: 11px; padding: 4px 8px; border-radius: 99px; background: rgba(217, 119, 6, 0.15); color: var(--accent-primary); font-weight:600; text-transform:uppercase;">
          ${currentTab}
        </span>
      </div>
      <div class="directory-card-item">
        ${ICONS.mapPin}
        <span>${item.address}</span>
      </div>
      <div class="directory-card-item">
        ${ICONS.phone}
        <a href="tel:${item.phone}" style="color: var(--text-primary); font-weight:500; text-decoration:none;">
          ${item.phone}
        </a>
      </div>
      ${item.website ? `<div class="directory-card-item" style="margin-top:6px;">
        🌐 <a href="${item.website}" target="_blank" style="color: var(--accent-primary); font-weight:500; text-decoration:none;">Official Website</a>
      </div>` : ''}
      ${item.mapLink ? `<div class="directory-card-item" style="margin-top:2px;">
        📍 <a href="${item.mapLink}" target="_blank" style="color: #2563eb; font-weight:500; text-decoration:none;">View on Map</a>
      </div>` : ''}
    </div>
  `).join('');

  // Re-trigger filtering in case search filter was active
  triggerSearchFilter();
}



// 5. Testimonials Render
function renderTestimonials() {
  const testimonials = JSON.parse(localStorage.getItem('testimonials')) || INITIAL_TESTIMONIALS;

  const testimonialsHTML = `
    <div class="app-container animated-fade-in" style="padding-top: 40px;">
      <div class="section-header">
        <h2 class="section-title">Client <span>Testimonials</span></h2>
      </div>

      <div class="home-layout">
        
        <!-- Left: Testimonials List -->
        <div>
          <div class="reviews-grid" id="reviews-grid-list">
            ${testimonials.map(t => `
              <div class="review-card animated-fade-in">
                <p class="review-text">"${t.comment}"</p>
                <div class="review-author">
                  <div class="author-avatar">${t.name.substring(0,2).toUpperCase()}</div>
                  <div class="author-info">
                    <h4>${t.name}</h4>
                    <div style="display:flex; gap:2px; margin-top:2px;">
                      ${Array(t.rating).fill(ICONS.star).join('')}
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right: Submit Form -->
        <div class="glass-panel" style="align-self: start;">
          <h3 style="font-size:20px; margin-bottom:16px;">Leave a Review</h3>
          <form id="add-review-form">
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
  `;
  appRoot.innerHTML = testimonialsHTML;

  // Add testimonial submission handler
  document.getElementById("add-review-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("rev-name").value;
    const rating = parseInt(document.getElementById("rev-rating").value);
    const comment = document.getElementById("rev-comment").value;

    const newRev = {
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString()
    };

    const saved = JSON.parse(localStorage.getItem('testimonials')) || [];
    saved.unshift(newRev);
    localStorage.setItem('testimonials', JSON.stringify(saved));

    alert("Thank you for your feedback! Your review has been added.");
    e.target.reset();
    
    // Refresh testimonials listing view
    renderTestimonials();
  });
}

// 6. Contact Us Page Render
function renderContact() {
  const contactHTML = `
    <div class="app-container animated-fade-in" style="padding-top: 40px;">
      <h2 class="section-title" style="margin-bottom: 24px;">Contact <span>Us</span></h2>

      <div class="home-layout">
        
        <!-- Left: Form -->
        <div class="glass-panel">
          <h3 style="font-size:20px; margin-bottom:16px;">Send us a message</h3>
          <form id="direct-contact-form">
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
  `;
  appRoot.innerHTML = contactHTML;

  // Contact form submission event listener
  document.getElementById("direct-contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting Vellore Travels. Our support desk has logged your request and will reach out to you within 24 hours!");
    e.target.reset();
  });
}

// Initialize Application once loaded
document.addEventListener("DOMContentLoaded", initApp);
// If script is already loaded after DOMContentLoaded, fire immediately
if (document.readyState === "interactive" || document.readyState === "complete") {
  initApp();
}
