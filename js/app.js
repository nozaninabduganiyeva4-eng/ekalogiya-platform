// EcoSphere App Core Logic

// State
let appState = {
  user: null,
  devices: [],
  substances: [],
  articles: [],
  deviceFilter: 'all',
  deviceSearch: '',
  substanceFilter: 'all',
  substanceSearch: '',
  activeDevice: null
};

// Fallback initial data in case of network latency
const FALLBACK_ARTICLES = [
  {
    id: 'art-1',
    title: 'Atmosfera ifloslanishi va PM2.5 mikro-zarrachalari: Shahar havosini tozalash strategiyasi',
    category: 'Havo tozaligi',
    summary: 'PM2.5 zarrachalarining inson salomatligiga ta\'siri, Toshkent va sanoat shaharlaridagi smog sabablari hamda muhandislik yechimlari.',
    content: 'PM2.5 zarrachalari diametri 2.5 mikrometrdan kichik bo\'lgan qattiq va suyuq mikro-zarrachalar bo\'lib, o\'pka alveolalari orqali to\'g\'ridan-to\'g\'ri qon oqimiga o\'tadi. Asosiy manbalar: transport vositalari chiqindi gazlari, ko\'mir va mazut yoqilishi, qurilish changlari hamda shamol ko\'taradigan tuproq eroziyasi.',
    read_time: '4 daqiqa',
    impact_badge: 'Yuqori ustuvorlik',
    icon_type: 'wind'
  },
  {
    id: 'art-2',
    title: 'Orolbo\'yi hududini reabilitatsiya qilish: Saksovulzorlar va nano-biopolimerlar',
    category: 'Orol va tuproq',
    summary: 'Qurigan Orol dengizi tubidan ko\'tarilayotgan millionlab tonna tuzli changlarga qarshi biologik va texnologik to\'siqlar.',
    content: 'Orol dengizining qurigan tubidan har yili 100 million tonnadan ortiq qum, tuz va chang zarrachalari havoga ko\'tariladi. Bunga qarshi eng samarali tabiiy usul – saksovul, qandim va cherkash kabi sho\'rga chidamli o\'simliklarni ekishdir.',
    read_time: '6 daqiqa',
    impact_badge: 'Strategik',
    icon_type: 'mountain'
  },
  {
    id: 'art-3',
    title: 'Suv resurslarini asrash: Oqova suvlarni yopiq siklda qayta tozalash texnologiyalari',
    category: 'Suv resurslari',
    summary: 'Markaziy Osiyoda chuchuk suv zaxiralari kamayishi sharoitida sanoat va maishiy oqova suvlarni 98% qayta ishlatish mexanizmlari.',
    content: 'Chuchuk suv taqchilligi davrida korxonalar oqova suvlarni to\'g\'ridan-to\'g\'ri daryolarga oqizmasdan, ko\'p bosqichli membranali filtrlash va biologik reaktorlar orqali tozalab, yana texnologik jarayonga qaytarishi zarur.',
    read_time: '5 daqiqa',
    impact_badge: 'Muhim',
    icon_type: 'droplet'
  }
];

const FALLBACK_SUBSTANCES = [
  {
    id: 'sub-1',
    name: 'PM2.5 Dispers Zarrachalar',
    chemical_formula: 'C, Metallar, Sulfat',
    type: 'pollutant',
    danger_level: 'Oʻta zaharli',
    source: 'Avtomobil chiqindi gazlari, ko\'mir yonishi, sanoat tutuni, sement changi',
    environmental_impact: 'O\'pka alveolalariga va qon tomirlariga chuqur kirib, yurak va nafas yo\'llari kasalliklarini keltirib chiqaradi.',
    neutralization_method: 'Elektrostatik filtrlar (Precipitators), HEPA H14 tozalagichlar, daraxtzor himoya belbog\'lari.',
    mac_norm: 'Sutkalik: 35 mkg/m³'
  },
  {
    id: 'sub-2',
    name: 'Is gazi (Uglerod oksidi)',
    chemical_formula: 'CO',
    type: 'pollutant',
    danger_level: 'Yuqori xavfli',
    source: 'Yoqilg\'ilarning chala yonishi (dvigatellar, nosoz qozonxonalar)',
    environmental_impact: 'Qondagi gemoglobin bilan birikib karboksigemoglobin hosil qiladi, kislorod yetishmasligini chaqiradi.',
    neutralization_method: 'Platina-palladiy neytralizatorlari orqali CO ni CO2 ga oksidlash.',
    mac_norm: 'Maksimal bir martalik: 5.0 mg/m³'
  },
  {
    id: 'sub-3',
    name: 'Oltingugurt dioksidi',
    chemical_formula: 'SO2',
    type: 'pollutant',
    danger_level: 'Yuqori xavfli',
    source: 'Ko\'mir, mazut va oltingugurtli yoqilg\'ilar, metallurgiya zavodlari',
    environmental_impact: 'Suv bug\'lari bilan birikib kislotali yomg\'irlarni hosil qiladi, tuproqni nordonlashtiradi.',
    neutralization_method: 'Ohaktosh (CaCO3) bilan skrubberlarda reaksiyaga kirishtirib gipsga aylantirish.',
    mac_norm: 'Sutkalik: 0.05 mg/m³'
  },
  {
    id: 'sub-4',
    name: 'Titan dioksidi (Fotokatalizator)',
    chemical_formula: 'TiO2 (Anataz)',
    type: 'eco_catalyst',
    danger_level: 'Xavfsiz',
    source: 'Tabiiy titan rudalari (ilmenit, rutil)',
    environmental_impact: 'Quyosh ultrabinafsha nuri ostida barcha organik zaharli gazlarni CO2 va H2O ga parchalaydi.',
    neutralization_method: 'Fasad bo\'yoqlari, yo\'l qoplamalari va havo tozalash minoralarida o\'z-o\'zini tozalovchi qatlam.',
    mac_norm: 'Zararsiz inert katalizator'
  },
  {
    id: 'sub-5',
    name: 'Aktivlashtirilgan Uglerod (Ko\'mir)',
    chemical_formula: 'C (Mikrog\'ovakli)',
    type: 'absorbent_cleaner',
    danger_level: 'Xavfsiz',
    source: 'Yong\'oq pochoqlari yoki o\'tinni 800-900°C da faollashtirish',
    environmental_impact: '1 gramm faol ko\'mirning ichki yuzasi 1000-1500 m² ga yetadi. Zaharli gaz va hidlarni yutadi.',
    neutralization_method: 'Zaharli gazlar, xlor va og\'ir organik ifloslantiruvchilarni adsorbsiya orqali ushlaydi.',
    mac_norm: 'Zararsiz tabiiy yutuvchi'
  },
  {
    id: 'sub-6',
    name: 'Zeolit (Klinoptilolit)',
    chemical_formula: 'Klinoptilolit minerali',
    type: 'absorbent_cleaner',
    danger_level: 'Xavfsiz',
    source: 'Vulkanik tog\' jinslari va mineral konlar',
    environmental_impact: 'Suv va tuproqdagi og\'ir metallar (qo\'rg\'oshin, simob) hamda zaharli radionuklidlarni yutadi.',
    neutralization_method: 'Oqova suvlarni filtrlash, sho\'rlangan tuproqlarni unumdor qilish.',
    mac_norm: 'Tabiiy ekologik sorbent'
  }
];

const FALLBACK_DEVICES = [
  {
    id: 'dev-1',
    title: 'AeroShield-3000: Shahar Smog Yutgich Minorasi',
    category: 'Havo tozalagich',
    stage: 'Eskiz & Konsept',
    short_desc: 'Shahar markazlari va tirband chorrahalar uchun 7 metrli avtonom elektrostatik havo tozalash minorasi.',
    working_principle: 'Pastdan havoni so\'rib, ionizator yordamida zarrachalarni zaryadlaydi, musbat/manfiy elektrostatik plastinkalar orqali PM2.5/PM10 changlarini 99.2% ga yutadi va yuqoridan tozalangan havoni chiqaradi.',
    materials: ['AISI 304 po\'lat', 'TiO2 fotokatalitik panellar', '15kV ion generatori', 'HEPA H14 kassetalar', '800W quyosh paneli'],
    estimated_efficiency: '99.2% PM2.5 tozalash, 30,000 m³/soat',
    estimated_cost: '$2,800 - $3,500',
    specifications: { 'Balandligi': '7.2 metr', 'Qamrov': '200 metr radius', 'Quvvat': '450 Vt (Avtonom)' },
    blueprint_schema: 'aeroshield-blueprint'
  },
  {
    id: 'dev-2',
    title: 'AquaCleanse Pro: Quyoshli Daryo va Suv Tozalash Mini-Stansiyasi',
    category: 'Suv filtrlash',
    stage: 'Ishlab chiqarishga tayyor',
    short_desc: 'Qishloq xo\'jaligi va daryo bo\'ylarida ifloslangan loyqa suvlarni ichimlik va tomchilatib sug\'orish standartiga yetkazuvchi mobil stansiya.',
    working_principle: 'Gravitatsion cho\'kindi kamerasidan so\'ng ko\'p qatlamli kvars qumi, zeolit, faol uglerod va UV-C ultrabinafsha nurlari orqali 99.9% tozalaydi.',
    materials: ['HDPE polietilen korpus', 'Kvars qum tanki', 'Zeolit & kokos faol uglerodi', 'UV-C kolba 55W', '150W quyosh paneli'],
    estimated_efficiency: '99.9% bakteriyalardan tozalash, 0.3 NTU',
    estimated_cost: '$850 - $1,150',
    specifications: { 'Unumdorlik': '1,500 L/soat', 'Og\'irligi': '52 kg', 'Suv bosimi': '3 bar' },
    blueprint_schema: 'aquacleanse-blueprint'
  },
  {
    id: 'dev-3',
    title: 'BioPyrolyzer-X: Chiqindilardan Bioko\'mir va Gaz Reaktori',
    category: 'Chiqindi pirolizi',
    stage: 'Sinov prototipi',
    short_desc: 'Barg, shox-shabba va qattiq organik chiqindilarni kislorodsiz termik qayta ishlab, tuproqni boyituvchi Biochar olish agregati.',
    working_principle: 'Organik chiqindi 500-550°C haroratda kislorodsiz termik parchalanadi. Sintez-gaz yopiq siklda qayta yonadi, atmosferaga tutun chiqarmaydi.',
    materials: ['Qotishma po\'lat 09G2S', 'Bazalt izolyatsiya 100mm', 'Siklon filtr', 'K-tipi harorat datchigi'],
    estimated_efficiency: '100 kg chiqindidan 35 kg Biochar',
    estimated_cost: '$1,400 - $1,800',
    specifications: { 'Hajmi': '250 litr', 'Maksimal harorat': '650°C', 'Emissiya': '0% tutun' },
    blueprint_schema: 'biopyrolyzer-blueprint'
  },
  {
    id: 'dev-4',
    title: 'AlgaeTree Bio-Column: Mikrosuvo\'tli Kislorod Minorasi',
    category: 'Bio-reaktor',
    stage: 'Eskiz & Konsept',
    short_desc: 'Shahar xiyobonlari va maktab maydonlari uchun 150 ta daraxt o\'rnini bosuvchi vertikal fotobioreaktor.',
    working_principle: 'Shaffof spiral quvurlar ichida Chlorella mikrosuvo\'tlari aylanadi. Shahar havosi pufakchalab o\'tkaziladi, mikroblar CO2 yutib O2 ajratadi.',
    materials: ['Borosilikat shisha spiral', 'Kompressor 45W', 'Spektral LED fitolampalar', 'Mikroiqlim platasi'],
    estimated_efficiency: 'Kuniga 12 kg CO2 yutish, 9 kg O2 ajratish',
    estimated_cost: '$1,200 - $1,600',
    specifications: { 'Balandligi': '3.2 metr', 'Sig\'imi': '220 litr', 'Quvvati': '65 Vt' },
    blueprint_schema: 'algaetree-blueprint'
  },
  {
    id: 'dev-5',
    title: 'AquaDrone TrashHunter: Chiqindi Yig\'uvchi Quyosh Katamarani',
    category: 'Avtonom robototexnika',
    stage: 'Sinov prototipi',
    short_desc: 'Daryo, kanal va ko\'llardagi suzuvchi plastik va chiqindilarni avtomatik tozalovchi robot-qayiq.',
    working_principle: 'Katamaran oldidagi to\'rli konveyer suv yuzasidagi chiqindilarni 120 litrli savatga uzatadi. GPS va quyosh panellari bilan avtonom ishlaydi.',
    materials: ['Alyuminiy korpus', '300W quyosh paneli', '2x IP68 motor', 'ESP32 / GPS moduli', 'LiFePO4 batareya'],
    estimated_efficiency: '25 kg/soat chiqindi yig\'ish, 8 soat avtonom',
    estimated_cost: '$950 - $1,350',
    specifications: { 'Savat sig\'imi': '120 litr', 'Tezligi': '5 km/soat', 'Boshqaruv': 'Avtonom + WiFi' },
    blueprint_schema: 'aquadrone-blueprint'
  }
];

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', async () => {
  initUserSession();
  setupFilterListeners();
  setupSearchListeners();
  updateFootprint();

  await loadData();
  renderAll();
  lucide.createIcons();
});

// User Session Management
function initUserSession() {
  appState.user = window.EcoSupabase.getVerifiedUser();
  updateUserUI();
}

function updateUserUI() {
  const navPill = document.getElementById('nav-user-pill');
  const navText = document.getElementById('nav-user-text');
  const footerUser = document.getElementById('footer-user-email');
  const heroAuthBox = document.getElementById('hero-auth-box');

  if (appState.user && appState.user.email) {
    navText.textContent = appState.user.full_name || appState.user.email.split('@')[0];
    navPill.title = `Tasdiqlangan: ${appState.user.email} (Chiqish uchun bosing)`;
    footerUser.textContent = `Tasdiqlangan (${appState.user.email})`;

    if (heroAuthBox) {
      heroAuthBox.innerHTML = `
        <div class="auth-card-title">
          <i data-lucide="badge-check" style="color: var(--emerald-neon);"></i>
          <span>Shaxsingiz Tasdiqlangan</span>
        </div>
        <p class="auth-card-sub" style="color: #a7f3d0;">
          Xush kelibsiz, <strong>${appState.user.full_name || appState.user.email}</strong>! Barcha CAD eskizlari va muhandislik hisob-kitoblari siz uchun ochiq.
        </p>
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--border-eco); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
          <div style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 6px;">Elektron pochta:</div>
          <div style="font-family: var(--font-mono); color: var(--cyan-neon); font-size: 0.95rem;">${appState.user.email}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">Sinxronlangan: Supabase Cloud DB</div>
        </div>
        <div style="display: flex; gap: 10px;">
          <a href="#devices" class="btn btn-cyan" style="flex: 1;">
            <i data-lucide="layers"></i> Eskizlarni Ochish
          </a>
          <button onclick="handleLogout()" class="btn btn-outline" style="font-size: 0.85rem;">
            Chiqish
          </button>
        </div>
      `;
    }
  } else {
    navText.textContent = 'Shaxsni Tasdiqlash';
    footerUser.textContent = 'Tasdiqlanmagan';
  }
  lucide.createIcons();
}

async function handleHeroAuth(event) {
  event.preventDefault();
  const name = document.getElementById('hero-user-name').value;
  const email = document.getElementById('hero-user-email').value;

  try {
    const user = await window.EcoSupabase.verifyUserEmail(email, name);
    appState.user = user;
    updateUserUI();
    showToast(`Muvaffaqiyatli tasdiqlandi: ${user.email}`, 'success');
  } catch (err) {
    showToast(err.message, 'error');
  }
}

async function handleModalAuth(event) {
  event.preventDefault();
  const name = document.getElementById('modal-user-name').value;
  const email = document.getElementById('modal-user-email').value;

  try {
    const user = await window.EcoSupabase.verifyUserEmail(email, name);
    appState.user = user;
    updateUserUI();
    closeAuthModal();
    showToast(`Shaxsingiz tasdiqlandi: ${user.email}`, 'success');
  } catch (err) {
    showToast(err.message, 'error');
  }
}

function handleLogout() {
  window.EcoSupabase.clearUserSession();
  appState.user = null;
  location.reload();
}

function openAuthModal() {
  if (appState.user) {
    if (confirm(`Siz ${appState.user.email} sifatida kirdingiz. Tizimdan chiqmoqchimisiz?`)) {
      handleLogout();
    }
    return;
  }
  document.getElementById('auth-modal').classList.add('active');
  lucide.createIcons();
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('active');
}

// Data Fetching
async function loadData() {
  try {
    const [remoteArticles, remoteSubstances, remoteDevices] = await Promise.all([
      window.EcoSupabase.fetchEcoArticles(),
      window.EcoSupabase.fetchEcoSubstances(),
      window.EcoSupabase.fetchEcoDevices()
    ]);

    appState.articles = (remoteArticles && remoteArticles.length > 0) ? remoteArticles : FALLBACK_ARTICLES;
    appState.substances = (remoteSubstances && remoteSubstances.length > 0) ? remoteSubstances : FALLBACK_SUBSTANCES;
    appState.devices = (remoteDevices && remoteDevices.length > 0) ? remoteDevices : FALLBACK_DEVICES;
  } catch (e) {
    console.warn('Using fallback local data:', e);
    appState.articles = FALLBACK_ARTICLES;
    appState.substances = FALLBACK_SUBSTANCES;
    appState.devices = FALLBACK_DEVICES;
  }
}

// Renderers
function renderAll() {
  renderDevices();
  renderSubstances();
  renderArticles();
  lucide.createIcons();
}

function renderDevices() {
  const container = document.getElementById('devices-container');
  if (!container) return;

  const filtered = appState.devices.filter(d => {
    const matchesFilter = (appState.deviceFilter === 'all' || d.category === appState.deviceFilter);
    const matchesSearch = !appState.deviceSearch || 
      d.title.toLowerCase().includes(appState.deviceSearch.toLowerCase()) ||
      d.short_desc.toLowerCase().includes(appState.deviceSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i data-lucide="inbox" style="width: 48px; height: 48px; margin-bottom: 12px; color: var(--text-faint);"></i>
        <p>Mos keladigan qurilma eskizlari topilmadi.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(device => {
    let stageClass = 'stage-concept';
    if (device.stage === 'Ishlab chiqarishga tayyor') stageClass = 'stage-ready';
    if (device.stage === 'Sinov prototipi') stageClass = 'stage-prototype';

    const bp = window.BLUEPRINTS[device.blueprint_schema] || null;

    return `
      <div class="device-card">
        <div class="device-preview" onclick="openBlueprint('${device.id}')" style="cursor: pointer;">
          <div class="blueprint-grid-preview">
            <i data-lucide="compass" style="width: 64px; height: 64px; color: rgba(0, 240, 255, 0.4);"></i>
          </div>
          <span class="blueprint-stage-pill ${stageClass}">${device.stage}</span>
        </div>

        <div class="device-body">
          <div class="device-category">${device.category}</div>
          <h3 class="device-title">${device.title}</h3>
          <p class="device-desc">${device.short_desc}</p>

          <div class="device-specs-compact">
            <div class="spec-row">
              <span class="spec-label">Samaradorlik:</span>
              <span class="spec-value highlight-green">${device.estimated_efficiency}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Taxminiy tannarx:</span>
              <span class="spec-value highlight-cyan">${device.estimated_cost}</span>
            </div>
          </div>

          <div class="device-footer">
            <button class="btn btn-cyan" style="flex: 1;" onclick="openBlueprint('${device.id}')">
              <i data-lucide="eye"></i>
              CAD Eskizni Ko‘rish
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderSubstances() {
  const container = document.getElementById('substances-container');
  if (!container) return;

  const filtered = appState.substances.filter(s => {
    const matchesFilter = (appState.substanceFilter === 'all' || s.type === appState.substanceFilter);
    const matchesSearch = !appState.substanceSearch || 
      s.name.toLowerCase().includes(appState.substanceSearch.toLowerCase()) ||
      s.chemical_formula.toLowerCase().includes(appState.substanceSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>Mos moddalar topilmadi.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(s => {
    let dangerClass = 'danger-medium';
    if (s.danger_level.includes('Oʻta') || s.danger_level.includes('Yuqori')) dangerClass = 'danger-high';
    if (s.danger_level.includes('Xavfsiz')) dangerClass = 'danger-safe';

    return `
      <div class="substance-card">
        <div class="substance-header">
          <span class="substance-formula">${s.chemical_formula}</span>
          <span class="danger-badge ${dangerClass}">${s.danger_level}</span>
        </div>
        <h3 class="substance-name">${s.name}</h3>

        <div class="substance-info-item">
          <div class="info-label">Manbasi / Kelib chiqishi:</div>
          <div class="info-content">${s.source}</div>
        </div>

        <div class="substance-info-item">
          <div class="info-label">Atrof-muhitga ta'siri:</div>
          <div class="info-content">${s.environmental_impact}</div>
        </div>

        <div class="substance-cleaner-box">
          <div style="font-weight: 600; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="shield" style="width: 14px; height: 14px; color: var(--emerald-neon);"></i>
            Zararsizlantirish / Tozalash mexanizmi:
          </div>
          <div>${s.neutralization_method}</div>
        </div>
      </div>
    `;
  }).join('');
}

function renderArticles() {
  const container = document.getElementById('articles-container');
  if (!container) return;

  container.innerHTML = appState.articles.map(art => {
    return `
      <div class="device-card">
        <div class="device-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="device-category">${art.category}</span>
            <span class="mat-tag" style="background: rgba(0, 240, 255, 0.1); border-color: rgba(0, 240, 255, 0.3); color: var(--cyan-neon);">${art.read_time}</span>
          </div>
          <h3 class="device-title" style="font-size: 1.15rem;">${art.title}</h3>
          <p class="device-desc" style="font-size: 0.88rem;">${art.summary}</p>
          <div style="background: rgba(5, 14, 18, 0.7); border-radius: var(--radius-md); padding: 14px; margin-top: 10px; font-size: 0.84rem; color: #cbd5e1; line-height: 1.6;">
            ${art.content}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Blueprint Modal Controller
function openBlueprint(deviceId) {
  // If user is not verified, require verification
  if (!appState.user) {
    showToast("Iltimos, CAD eskizini to'liq ko'rish uchun avval emailingizni kiriting!", "error");
    openAuthModal();
    return;
  }

  const device = appState.devices.find(d => d.id === deviceId);
  if (!device) return;

  appState.activeDevice = device;
  const blueprintData = window.BLUEPRINTS[device.blueprint_schema];

  document.getElementById('modal-device-title').textContent = device.title;
  document.getElementById('modal-device-subtitle').textContent = `${device.category} • ${device.stage}`;
  document.getElementById('modal-working-principle').textContent = device.working_principle;

  // Materials
  const matContainer = document.getElementById('modal-materials-list');
  matContainer.innerHTML = (device.materials || []).map(m => `<span class="mat-tag">${m}</span>`).join('');

  // Specs
  const specsContainer = document.getElementById('modal-specs-list');
  const specs = device.specifications || {};
  specsContainer.innerHTML = Object.entries(specs).map(([k, v]) => `
    <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed rgba(255,255,255,0.08); padding-bottom: 4px;">
      <span style="color: var(--text-muted);">${k}:</span>
      <span style="font-weight: 600; color: #f1f5f9;">${v}</span>
    </div>
  `).join('');

  // Canvas Wrapper with SVG & Hotspots
  const canvasWrapper = document.getElementById('blueprint-canvas-wrapper');
  if (blueprintData) {
    let hotspotsHtml = '';
    (blueprintData.hotspots || []).forEach((spot, idx) => {
      hotspotsHtml += `
        <div class="hotspot-pin" style="left: ${spot.x}; top: ${spot.y};" onclick="inspectHotspot('${spot.id}')" title="${spot.title}">
          ${idx + 1}
        </div>
      `;
    });

    canvasWrapper.innerHTML = `
      ${blueprintData.svg}
      ${hotspotsHtml}
    `;

    // Reset inspector block
    document.getElementById('hotspot-info-title').textContent = "Eskiz Qismlari Nazorati";
    document.getElementById('hotspot-info-desc').textContent = "Eskiz ustidagi qiziquvchi qismlarga (raqamlangan tugmachalarga) bosing va ushbu qismning vazifasini o'rganing.";
  } else {
    canvasWrapper.innerHTML = `<div style="padding: 40px; text-align: center; color: var(--text-muted);">Eskiz diagrammasi tayyorlanmoqda...</div>`;
  }

  document.getElementById('blueprint-modal').classList.add('active');
  lucide.createIcons();
}

function inspectHotspot(spotId) {
  if (!appState.activeDevice) return;
  const blueprintData = window.BLUEPRINTS[appState.activeDevice.blueprint_schema];
  if (!blueprintData) return;

  const spot = blueprintData.hotspots.find(h => h.id === spotId);
  if (!spot) return;

  const inspector = document.getElementById('hotspot-inspector');
  inspector.classList.remove('fadeIn');
  void inspector.offsetWidth; // trigger reflow
  inspector.classList.add('fadeIn');

  document.getElementById('hotspot-info-title').textContent = spot.title;
  document.getElementById('hotspot-info-desc').textContent = spot.desc;
}

function closeBlueprintModal() {
  document.getElementById('blueprint-modal').classList.remove('active');
  appState.activeDevice = null;
}

// Filter and Search Listeners
function setupFilterListeners() {
  // Device filters
  document.querySelectorAll('#device-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#device-filters .filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      appState.deviceFilter = e.target.dataset.filter;
      renderDevices();
      lucide.createIcons();
    });
  });

  // Substance filters
  document.querySelectorAll('#substance-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#substance-filters .filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      appState.substanceFilter = e.target.dataset.subfilter;
      renderSubstances();
      lucide.createIcons();
    });
  });
}

function setupSearchListeners() {
  const devSearch = document.getElementById('device-search');
  if (devSearch) {
    devSearch.addEventListener('input', (e) => {
      appState.deviceSearch = e.target.value;
      renderDevices();
      lucide.createIcons();
    });
  }

  const subSearch = document.getElementById('substance-search');
  if (subSearch) {
    subSearch.addEventListener('input', (e) => {
      appState.substanceSearch = e.target.value;
      renderSubstances();
      lucide.createIcons();
    });
  }
}

// Carbon Footprint Calculator Logic
function updateFootprint() {
  const carKm = parseFloat(document.getElementById('car-slider').value);
  const elecKwh = parseFloat(document.getElementById('elec-slider').value);
  const foodTier = parseInt(document.getElementById('food-slider').value);
  const recycleTier = parseInt(document.getElementById('recycle-slider').value);

  // Update text labels
  document.getElementById('car-val').textContent = `${carKm} km`;
  document.getElementById('elec-val').textContent = `${elecKwh} kWh`;

  const foodLabels = { 1: 'Kam go\'sht / Ko\'p sabzavot', 2: 'O\'rtacha aralash', 3: 'Ko\'p go\'shtli' };
  document.getElementById('food-val').textContent = foodLabels[foodTier] || 'O\'rtacha';

  const recycleLabels = { 0: 'Saralanmaydi', 1: 'Qisman saralanadi', 2: 'To\'liq qayta ishlanadi' };
  document.getElementById('recycle-val').textContent = recycleLabels[recycleTier] || 'Qisman';

  // CO2 calculation in metric tons per year
  // Car: avg 140g CO2/km
  const carCo2 = (carKm * 365 * 0.14) / 1000;
  // Electricity: in Uzbekistan ~0.55 kg CO2/kWh
  const elecCo2 = (elecKwh * 12 * 0.55) / 1000;
  // Food base: 1.2 to 2.4 tons
  const foodCo2 = foodTier * 0.7;
  // Recycling offset
  const recycleOffset = recycleTier * 0.35;

  let totalCo2 = carCo2 + elecCo2 + foodCo2 - recycleOffset;
  if (totalCo2 < 0.5) totalCo2 = 0.5;

  document.getElementById('calc-co2-number').textContent = totalCo2.toFixed(1);

  // Trees needed (1 mature tree absorbs ~22kg CO2/year)
  const treesNeeded = Math.ceil((totalCo2 * 1000) / 22);
  document.getElementById('trees-count').textContent = `${treesNeeded} ta daraxt`;

  const verdictEl = document.getElementById('calc-verdict');
  if (totalCo2 < 2.0) {
    verdictEl.textContent = "A'lo darajada ekologik turmush tarzi!";
    verdictEl.style.color = "var(--emerald-neon)";
  } else if (totalCo2 < 4.5) {
    verdictEl.textContent = "O'rtacha me'yordagi yuklama";
    verdictEl.style.color = "var(--cyan-neon)";
  } else {
    verdictEl.textContent = "Yuqori uglerod yuklamasi — Qisqartirish zarur";
    verdictEl.style.color = "var(--amber-warning)";
  }
}

// Proposal Form Submission
async function handleProposalSubmit(event) {
  event.preventDefault();
  if (!appState.user) {
    showToast("Taklif yuborish uchun emailingiz orqali shaxsingizni tasdiqlang!", "error");
    openAuthModal();
    return;
  }

  const title = document.getElementById('prop-title').value;
  const category = document.getElementById('prop-category').value;
  const description = document.getElementById('prop-desc').value;
  const materials = document.getElementById('prop-materials').value;

  try {
    await window.EcoSupabase.submitProposal({
      user_email: appState.user.email,
      title,
      category,
      description,
      materials
    });

    showToast("Qurilma g'oyangiz Supabase bazasiga muvaffaqiyatli qabul qilindi!", "success");
    document.getElementById('proposal-form').reset();
  } catch (err) {
    showToast(`Xatolik: ${err.message}`, "error");
  }
}

// Toast Notifications Helper
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : ''}`;
  
  const iconName = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : 'info';
  toast.innerHTML = `
    <i data-lucide="${iconName}" style="width: 18px; height: 18px;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Expose modal functions to window
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.openBlueprint = openBlueprint;
window.closeBlueprintModal = closeBlueprintModal;
window.inspectHotspot = inspectHotspot;
window.handleHeroAuth = handleHeroAuth;
window.handleModalAuth = handleModalAuth;
window.handleLogout = handleLogout;
window.handleProposalSubmit = handleProposalSubmit;
window.updateFootprint = updateFootprint;
