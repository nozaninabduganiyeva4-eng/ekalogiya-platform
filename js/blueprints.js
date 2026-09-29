// Engineering Blueprint SVGs & Interactive Hotspot Definitions

const BLUEPRINTS = {
  'aeroshield-blueprint': {
    title: 'AeroShield-3000 Texnik Eskizi (CAD Qirqimi)',
    subtitle: '7.2m Shahar Ionlashtiruvchi Smog Yutgich Minorasi',
    hotspots: [
      {
        id: 'solar',
        title: '800W Monokristall Quyosh Paneli',
        desc: 'Minoraning yuqori qismida joylashgan aylanma panel. Tizimni kunduzi to\'liq avtonom energiya bilan ta\'minlaydi va batareyalarni quvvatlaydi.',
        x: '50%',
        y: '10%'
      },
      {
        id: 'exhaust',
        title: '360° Tozalangan Havo Chiqarish Diffuzori',
        desc: 'Aerodinamik yo\'naltiruvchi qanotlar orqali tozalangan va ionlashgan kislorodga boy havo 360 daraja radiusda atrofga tarqatiladi.',
        x: '50%',
        y: '26%'
      },
      {
        id: 'catalyst',
        title: 'TiO2 Fotokatalitik Neytralizator Qatlami',
        desc: 'Ultrabinafsha LED va quyosh nuri ta\'sirida havodagi uchuvchi organik birikmalar, formaldegid va NO2 gazlarini suv va karbonat angidridga parchalaydi.',
        x: '50%',
        y: '45%'
      },
      {
        id: 'electrostatic',
        title: '15kV Yuqori Voltli Elektrostatik Cho\'ktirgich (ESP)',
        desc: 'PM2.5 va PM10 mikro-zarrachalarini korona razryadi orqali zaryadlab, musbat zaryadli yuviladigan metall plastinkalarga 99.2% samaradorlik bilan yopishtiradi.',
        x: '50%',
        y: '63%'
      },
      {
        id: 'intake',
        title: 'Pastki Havo Qabul Qilish va Yirik Filtr To\'ri',
        desc: 'Zamin sathidagi ifloslangan og\'ir chang va smog havosini shovqinsiz 450W turbinalar yordamida minora ichiga tortib oladi.',
        x: '50%',
        y: '85%'
      }
    ],
    svg: `
      <svg viewBox="0 0 600 700" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 240, 255, 0.08)" stroke-width="1"/>
          </pattern>
          <linearGradient id="towerGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#0e3a40"/>
            <stop offset="50%" stop-color="#14535c"/>
            <stop offset="100%" stop-color="#0a2a2e"/>
          </linearGradient>
          <linearGradient id="neonGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#00f2fe"/>
            <stop offset="100%" stop-color="#4facfe"/>
          </linearGradient>
        </defs>

        <!-- Blueprint Background & Coordinate Grid -->
        <rect width="600" height="700" fill="#061217"/>
        <rect width="600" height="700" fill="url(#bp-grid)"/>

        <!-- Blueprint Technical Frame -->
        <rect x="20" y="20" width="560" height="660" fill="none" stroke="rgba(0, 240, 255, 0.3)" stroke-width="1.5" stroke-dasharray="8 4"/>
        <text x="35" y="45" fill="#00f0ff" font-family="monospace" font-size="11" letter-spacing="2">DWG NO: ECO-TWR-3000-REV2 | SCALE: 1:25 | PROJECT: SMOG SHIELD</text>

        <!-- Measurement Guides -->
        <line x1="120" y1="90" x2="120" y2="610" stroke="#00f0ff" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>
        <text x="75" y="360" fill="#00f0ff" font-family="monospace" font-size="12" transform="rotate(-90 75 360)">H = 7,200 mm</text>
        <line x1="110" y1="90" x2="130" y2="90" stroke="#00f0ff" stroke-width="1.5"/>
        <line x1="110" y1="610" x2="130" y2="610" stroke="#00f0ff" stroke-width="1.5"/>

        <!-- Central Axis line -->
        <line x1="300" y1="60" x2="300" y2="640" stroke="#ff0055" stroke-width="1" stroke-dasharray="10 3 2 3" opacity="0.5"/>

        <!-- Solar Canopy (Top) -->
        <polygon points="200,95 400,95 380,75 220,75" fill="#1b4965" stroke="#00f0ff" stroke-width="2"/>
        <line x1="240" y1="75" x2="230" y2="95" stroke="#00f0ff" stroke-width="1"/>
        <line x1="270" y1="75" x2="265" y2="95" stroke="#00f0ff" stroke-width="1"/>
        <line x1="300" y1="75" x2="300" y2="95" stroke="#00f0ff" stroke-width="1"/>
        <line x1="330" y1="75" x2="335" y2="95" stroke="#00f0ff" stroke-width="1"/>
        <line x1="360" y1="75" x2="370" y2="95" stroke="#00f0ff" stroke-width="1"/>

        <!-- Clean Air Diffuser Section -->
        <polygon points="240,95 360,95 350,180 250,180" fill="url(#towerGrad)" stroke="#00f0ff" stroke-width="1.5"/>
        <!-- Air exhaust arrows (Up/Out) -->
        <path d="M 230 140 Q 210 130 190 120" stroke="#00ffcc" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
        <path d="M 370 140 Q 390 130 410 120" stroke="#00ffcc" stroke-width="2" fill="none"/>
        <text x="145" y="115" fill="#00ffcc" font-family="monospace" font-size="10">TOZA HAVO (O2)</text>
        <text x="415" y="115" fill="#00ffcc" font-family="monospace" font-size="10">TOZA HAVO (O2)</text>

        <!-- TiO2 Catalyst Section -->
        <rect x="230" y="180" width="140" height="90" fill="#0b2830" stroke="#00f0ff" stroke-width="1.5"/>
        <pattern id="mesh1" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 0 0 L 8 8 M 8 0 L 0 8" stroke="#10b981" stroke-width="0.8"/>
        </pattern>
        <rect x="236" y="186" width="128" height="78" fill="url(#mesh1)" opacity="0.6"/>
        <text x="300" y="230" fill="#a7f3d0" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">TiO2 FOTOKATALIZ</text>

        <!-- Electrostatic Precipitator Plates -->
        <rect x="220" y="270" width="160" height="150" fill="#061d24" stroke="#00f0ff" stroke-width="1.5"/>
        <line x1="240" y1="285" x2="240" y2="405" stroke="#f59e0b" stroke-width="3"/>
        <line x1="260" y1="285" x2="260" y2="405" stroke="#00f0ff" stroke-width="3"/>
        <line x1="280" y1="285" x2="280" y2="405" stroke="#f59e0b" stroke-width="3"/>
        <line x1="300" y1="285" x2="300" y2="405" stroke="#00f0ff" stroke-width="3"/>
        <line x1="320" y1="285" x2="320" y2="405" stroke="#f59e0b" stroke-width="3"/>
        <line x1="340" y1="285" x2="340" y2="405" stroke="#00f0ff" stroke-width="3"/>
        <line x1="360" y1="285" x2="360" y2="405" stroke="#f59e0b" stroke-width="3"/>
        <text x="300" y="350" fill="#fde68a" font-family="monospace" font-size="10" text-anchor="middle" background="#000">15kV ION MAYDONI</text>

        <!-- Lower Turbine & Fan Chamber -->
        <rect x="210" y="420" width="180" height="110" fill="url(#towerGrad)" stroke="#00f0ff" stroke-width="1.5"/>
        <circle cx="300" cy="475" r="40" fill="#072228" stroke="#00f0ff" stroke-width="2"/>
        <path d="M 300 445 L 300 505 M 270 475 L 330 475 M 279 454 L 321 496 M 279 496 L 321 454" stroke="#38bdf8" stroke-width="2"/>
        <text x="300" y="520" fill="#38bdf8" font-family="monospace" font-size="9" text-anchor="middle">450W AERODINAMIK TURBINA</text>

        <!-- Base Foundation & Air Intake Louvers -->
        <polygon points="210,530 170,610 430,610 390,530" fill="#082026" stroke="#00f0ff" stroke-width="2"/>
        <line x1="190" y1="550" x2="410" y2="550" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4 2"/>
        <line x1="180" y1="570" x2="420" y2="570" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4 2"/>
        <line x1="175" y1="590" x2="425" y2="590" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4 2"/>

        <!-- Inflow arrows (Smog entering) -->
        <path d="M 140 580 L 175 580" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
        <polygon points="175,576 185,580 175,584" fill="#ef4444"/>
        <path d="M 460 580 L 425 580" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
        <polygon points="425,576 415,580 425,584" fill="#ef4444"/>
        <text x="120" y="605" fill="#f87171" font-family="monospace" font-size="10">SMOG / PM2.5</text>
        <text x="425" y="605" fill="#f87171" font-family="monospace" font-size="10">SMOG / PM2.5</text>

        <!-- Concrete Anchor Foundation -->
        <rect x="150" y="610" width="300" height="25" fill="#132e35" stroke="#00f0ff" stroke-width="1.5"/>
        <text x="300" y="627" fill="#64748b" font-family="monospace" font-size="10" text-anchor="middle">TEMIR-BETON ANKER POYDEVORI</text>
      </svg>
    `
  },

  'aquacleanse-blueprint': {
    title: 'AquaCleanse Pro Texnik Eskizi (Gidravlik Sxema)',
    subtitle: '1500L/soat Mobil Quyoshli Ko\'p Bosqichli Suv Tozalash Mini-Stansiyasi',
    hotspots: [
      {
        id: 'intake-pump',
        title: '24V Quyoshli Suv Nasosi',
        desc: 'Daryo yoki hovuzdan iflos suvni 4 bargacha bosim bilan birlamchi cho\'kindi kamerasiga uzatadi.',
        x: '15%',
        y: '75%'
      },
      {
        id: 'settling',
        title: 'Birlamchi Cho\'kindi va Kvars Qumi Filtri',
        desc: 'Yirik qum, loy va suvo\'t qoldiqlarini 95% ga ushlab qoluvchi 3 qatlamli kvars qumi kamerasi.',
        x: '32%',
        y: '45%'
      },
      {
        id: 'zeolite-carbon',
        title: 'Zeolit va Faol Uglerod Patronlari',
        desc: 'Klinoptilolit zeolit og\'ir metallarni yutadi, kokos aktiv uglerodi esa zaharli ximikatlar, pestitsid va yoqimsiz hidlarni yo\'qotadi.',
        x: '52%',
        y: '45%'
      },
      {
        id: 'uv-sterilizer',
        title: '55W UV-C Ultrabinafsha Sterilizator',
        desc: '254nm to\'lqin uzunligidagi UV-C nurlari suv tarkibidagi bakteriya, amyoba va viruslarning DNKsini parchalab zararsizlantiradi.',
        x: '75%',
        y: '45%'
      },
      {
        id: 'solar-battery',
        title: '150W Quyosh Paneli & LiFePO4 Akkumulyator',
        desc: 'Dala sharoitida elektr tarmog\'isiz 24/7 uzluksiz tozalashni ta\'minlaydigan avtonom quvvat bloki.',
        x: '50%',
        y: '15%'
      }
    ],
    svg: `
      <svg viewBox="0 0 700 500" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bp-grid-2" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 240, 255, 0.08)" stroke-width="1"/>
          </pattern>
        </defs>

        <rect width="700" height="500" fill="#05131a"/>
        <rect width="700" height="500" fill="url(#bp-grid-2)"/>
        <rect x="20" y="20" width="660" height="460" fill="none" stroke="rgba(0, 240, 255, 0.3)" stroke-width="1.5" stroke-dasharray="8 4"/>
        <text x="35" y="45" fill="#00f0ff" font-family="monospace" font-size="11" letter-spacing="2">DWG NO: ECO-WTR-1500-FLOW | SCALE: HYDRAULIC SCHEMATIC</text>

        <!-- Top Solar Panel Array -->
        <polygon points="260,60 440,60 420,95 280,95" fill="#1b4965" stroke="#00f0ff" stroke-width="2"/>
        <line x1="310" y1="60" x2="315" y2="95" stroke="#00f0ff" stroke-width="1"/>
        <line x1="350" y1="60" x2="350" y2="95" stroke="#00f0ff" stroke-width="1"/>
        <line x1="390" y1="60" x2="385" y2="95" stroke="#00f0ff" stroke-width="1"/>
        <text x="350" y="85" fill="#67e8f9" font-family="sans-serif" font-size="9" text-anchor="middle">150W SOLAR PANEL</text>

        <!-- Raw Water Inlet Pipe -->
        <path d="M 40 370 L 110 370 L 110 310" fill="none" stroke="#92400e" stroke-width="8" stroke-linecap="round"/>
        <text x="45" y="395" fill="#f59e0b" font-family="monospace" font-size="10">LOYQA DARYO SUVI INLET</text>

        <!-- Pump Unit -->
        <rect x="85" y="270" width="55" height="55" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <circle cx="112" cy="297" r="16" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5"/>
        <text x="112" y="301" fill="#38bdf8" font-family="monospace" font-size="8" text-anchor="middle">PUMP</text>

        <!-- Connecting Pipe 1 -->
        <path d="M 140 297 L 190 297 L 190 220 L 220 220" fill="none" stroke="#0284c7" stroke-width="6"/>

        <!-- Chamber 1: Sand/Sediment Filter -->
        <rect x="220" y="160" width="80" height="220" rx="10" fill="#082b35" stroke="#00f0ff" stroke-width="2"/>
        <rect x="226" y="240" width="68" height="80" fill="#d97706" opacity="0.6"/>
        <rect x="226" y="320" width="68" height="50" fill="#78350f" opacity="0.8"/>
        <text x="260" y="195" fill="#7dd3fc" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">1-BOSQICH</text>
        <text x="260" y="280" fill="#fef3c7" font-family="monospace" font-size="8" text-anchor="middle">KVARTS QUMI</text>
        <text x="260" y="350" fill="#fde68a" font-family="monospace" font-size="8" text-anchor="middle">GRAVIY</text>

        <!-- Connecting Pipe 2 -->
        <path d="M 300 270 L 350 270" fill="none" stroke="#0284c7" stroke-width="6"/>

        <!-- Chamber 2: Zeolite + Active Carbon -->
        <rect x="350" y="160" width="85" height="220" rx="10" fill="#082b35" stroke="#00f0ff" stroke-width="2"/>
        <rect x="356" y="200" width="73" height="80" fill="#0284c7" opacity="0.5"/>
        <rect x="356" y="280" width="73" height="90" fill="#18181b" opacity="0.9"/>
        <text x="392" y="190" fill="#7dd3fc" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">2-BOSQICH</text>
        <text x="392" y="240" fill="#bae6fd" font-family="monospace" font-size="8" text-anchor="middle">ZEOLIT QATLAMI</text>
        <text x="392" y="330" fill="#e2e8f0" font-family="monospace" font-size="8" text-anchor="middle">FAOL KO'MIR (C)</text>

        <!-- Connecting Pipe 3 -->
        <path d="M 435 270 L 485 270" fill="none" stroke="#38bdf8" stroke-width="6"/>

        <!-- Chamber 3: UV-C Chamber -->
        <rect x="485" y="190" width="110" height="160" rx="12" fill="#111827" stroke="#a855f7" stroke-width="2.5"/>
        <rect x="525" y="210" width="30" height="120" rx="4" fill="#c084fc" opacity="0.8"/>
        <!-- UV Radiation Rays -->
        <line x1="500" y1="230" x2="520" y2="230" stroke="#e879f9" stroke-width="1.5" stroke-dasharray="2 2"/>
        <line x1="560" y1="230" x2="580" y2="230" stroke="#e879f9" stroke-width="1.5" stroke-dasharray="2 2"/>
        <line x1="500" y1="270" x2="520" y2="270" stroke="#e879f9" stroke-width="1.5" stroke-dasharray="2 2"/>
        <line x1="560" y1="270" x2="580" y2="270" stroke="#e879f9" stroke-width="1.5" stroke-dasharray="2 2"/>
        <text x="540" y="365" fill="#e879f9" font-family="monospace" font-size="9" text-anchor="middle">UV-C 254nm STERIL</text>

        <!-- Pure Water Outflow Pipe -->
        <path d="M 595 270 L 660 270" fill="none" stroke="#22d3ee" stroke-width="8" stroke-linecap="round"/>
        <polygon points="655,263 670,270 655,277" fill="#22d3ee"/>
        <text x="575" y="305" fill="#22d3ee" font-family="sans-serif" font-weight="bold" font-size="11">TOZA ICHIMLIK SUVI</text>
        <text x="615" y="325" fill="#a5f3fc" font-family="monospace" font-size="9">0.3 NTU / 99.9% STERIL</text>

        <!-- Wheels / Chassis Mobile Frame -->
        <rect x="180" y="395" width="440" height="16" rx="4" fill="#334155" stroke="#94a3b8" stroke-width="1"/>
        <circle cx="230" cy="425" r="22" fill="#0f172a" stroke="#64748b" stroke-width="4"/>
        <circle cx="230" cy="425" r="8" fill="#cbd5e1"/>
        <circle cx="570" cy="425" r="22" fill="#0f172a" stroke="#64748b" stroke-width="4"/>
        <circle cx="570" cy="425" r="8" fill="#cbd5e1"/>
      </svg>
    `
  },

  'biopyrolyzer-blueprint': {
    title: 'BioPyrolyzer-X Muhandislik Sxemasi (Termik Kamera)',
    subtitle: 'Organik Chiqindilardan Bioko\'mir (Biochar) va Gaz Olish Reaktori',
    hotspots: [
      {
        id: 'hopper',
        title: 'Germetik Yuklash Lyuki & Havo Qulfi',
        desc: 'Organik xomashyo (barg, somon, shox-shabba) kislorod kirmaydigan germetik shlyuz orqali asosiy kameraga kiritiladi.',
        x: '25%',
        y: '22%'
      },
      {
        id: 'retort',
        title: '550°C Issiqqa Bardoshli Piroliz Retortasi (09G2S Po\'lat)',
        desc: 'Kislorodsiz muhitda organik moddalar termik parchalanadi. Tutunsiz yonish natijasida tuproqqa mineral boyituvchi Biochar hosil bo\'ladi.',
        x: '38%',
        y: '52%'
      },
      {
        id: 'insulation',
        title: '100mm Bazalt Issiqlik Izolyatsiyasi',
        desc: 'Reaktor tashqi devorlarini sovuq ushlab, ichki haroratni 600°C darajasida maksimal energiya tejamkorlik bilan saqlaydi.',
        x: '15%',
        y: '55%'
      },
      {
        id: 'cyclone',
        title: 'Siklon Gaz Tozalagich & Separator',
        desc: 'Ajralayotgan sintez-gaz tarkibidagi uchuvchi qatron va yog\'ochni ajratib, toza yondiruvchi gaz hosil qiladi.',
        x: '68%',
        y: '42%'
      },
      {
        id: 'biochar-out',
        title: 'Sovutgichli Biochar Tushirish Bunkeri',
        desc: 'Tayyor bioko\'mir (uglerod fiksatori) havoga chiqmasdan sovutilib, qoplarga qadoqlanadi. Tuproqni 300% hosildor qiladi.',
        x: '38%',
        y: '85%'
      }
    ],
    svg: `
      <svg viewBox="0 0 650 520" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bp-grid-3" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 240, 255, 0.08)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="650" height="520" fill="#081014"/>
        <rect width="650" height="520" fill="url(#bp-grid-3)"/>
        <rect x="20" y="20" width="610" height="480" fill="none" stroke="rgba(0, 240, 255, 0.3)" stroke-width="1.5" stroke-dasharray="8 4"/>
        <text x="35" y="45" fill="#00f0ff" font-family="monospace" font-size="11" letter-spacing="2">DWG NO: ECO-PYRO-X-THERMAL | THERMAL ZONE DESTRUCTION</text>

        <!-- Feed Hopper Top -->
        <polygon points="120,80 200,80 180,140 140,140" fill="#334155" stroke="#00f0ff" stroke-width="2"/>
        <text x="160" y="105" fill="#e2e8f0" font-family="monospace" font-size="9" text-anchor="middle">ORGANIK CHIQINDI</text>

        <!-- Outer Insulation Jacket -->
        <rect x="90" y="140" width="240" height="240" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
        <rect x="110" y="155" width="200" height="210" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 2"/>
        <text x="210" y="170" fill="#f59e0b" font-family="monospace" font-size="8" text-anchor="middle">BAZALT IZOLYATSIYA (100mm)</text>

        <!-- Inner Pyrolysis Chamber -->
        <rect x="130" y="180" width="160" height="160" rx="4" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
        <!-- Glow / Fire effect inside -->
        <circle cx="210" cy="270" r="45" fill="#b91c1c" opacity="0.6"/>
        <circle cx="210" cy="270" r="25" fill="#f59e0b" opacity="0.7"/>
        <circle cx="210" cy="270" r="12" fill="#fef08a" opacity="0.9"/>
        <text x="210" y="225" fill="#fecaca" font-family="sans-serif" font-weight="bold" font-size="12" text-anchor="middle">500°C - 550°C</text>
        <text x="210" y="240" fill="#fca5a5" font-family="monospace" font-size="9" text-anchor="middle">KISLORODSIZ PIROLIZ</text>

        <!-- Biochar lower exit cone -->
        <polygon points="150,380 270,380 240,440 180,440" fill="#18181b" stroke="#00f0ff" stroke-width="2"/>
        <text x="210" y="415" fill="#a1a1aa" font-family="monospace" font-size="8" text-anchor="middle">BIOCHAR SOVUTISH</text>
        <rect x="170" y="440" width="80" height="30" fill="#09090b" stroke="#22c55e" stroke-width="1.5"/>
        <text x="210" y="460" fill="#4ade80" font-family="sans-serif" font-weight="bold" font-size="9" text-anchor="middle">TAYYOR BIO-O'G'IT</text>

        <!-- Gas Outlet Tube -->
        <path d="M 290 200 L 400 200 L 400 240" fill="none" stroke="#fbbf24" stroke-width="6"/>
        <text x="350" y="190" fill="#fbbf24" font-family="monospace" font-size="9">SINTEZ GAZ</text>

        <!-- Cyclone Gas Separator Unit -->
        <polygon points="370,240 430,240 415,340 385,340" fill="#082f49" stroke="#38bdf8" stroke-width="2"/>
        <rect x="370" y="225" width="60" height="20" fill="#0369a1" stroke="#38bdf8" stroke-width="1.5"/>
        <!-- Cyclone Vortex Arrow -->
        <path d="M 390 260 Q 410 270 395 290 Q 405 310 398 325" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3 2"/>
        <text x="460" y="280" fill="#7dd3fc" font-family="monospace" font-size="9">SIKLON FILTR</text>

        <!-- Clean Recirculated Gas to Burner -->
        <path d="M 400 340 L 400 390 L 320 390 L 320 320 L 290 320" fill="none" stroke="#22c55e" stroke-width="4" stroke-dasharray="5 3"/>
        <polygon points="295,316 285,320 295,324" fill="#22c55e"/>
        <text x="380" y="415" fill="#4ade80" font-family="monospace" font-size="8">YOPIQ SIKL QAYTISHI (0 TUTUN)</text>
      </svg>
    `
  },

  'algaetree-blueprint': {
    title: 'AlgaeTree Bio-Column Sxemasi (Fotobioreaktor)',
    subtitle: 'Mikrosuvo\'tlar (Chlorella) Asosidagi Shahar Kislorod Minorasi',
    hotspots: [
      {
        id: 'acrylic-spirals',
        title: 'Borosilikat Shisha Spirallangan Naychalar',
        desc: '220 litrli shaffof spiral korpus. Mikrosuvo\'tlar quyosh nuri va sun\'iy fitospektr yordamida tezkor fotosintez qiladi.',
        x: '50%',
        y: '40%'
      },
      {
        id: 'aeration-base',
        title: 'Mikroaeratsiya Kompressori & Diffuzor',
        desc: 'Iflos shahar havosi mayda mikro-pufakchalar ko\'rinishida pastdan yuboriladi. Mikrosuvo\'tlar CO2 ni yutadi.',
        x: '50%',
        y: '80%'
      },
      {
        id: 'spectral-led',
        title: 'Fotosintez LED Fitolampalari (660nm)',
        desc: 'Kechasi yoki bulutli kunlarda fotosintez jarayoni to\'xtamasligi uchun maxsus qizil-ko\'k spektrdagi tejamkor diodlar.',
        x: '30%',
        y: '50%'
      },
      {
        id: 'oxygen-release',
        title: 'Yuqori Toza Kislorod Chiqarish Klapani',
        desc: 'Kuniga 9 kg toza O2 atmosferaga chiqariladi. Bu 150 ta katta yoshdagi daraxt ishlab chiqaradigan kislorodga teng!',
        x: '50%',
        y: '16%'
      }
    ],
    svg: `
      <svg viewBox="0 0 600 620" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bp-grid-4" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 240, 255, 0.08)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="600" height="620" fill="#04120f"/>
        <rect width="600" height="620" fill="url(#bp-grid-4)"/>
        <rect x="20" y="20" width="560" height="580" fill="none" stroke="rgba(0, 240, 255, 0.3)" stroke-width="1.5" stroke-dasharray="8 4"/>
        <text x="35" y="45" fill="#10b981" font-family="monospace" font-size="11" letter-spacing="2">DWG NO: ECO-BIO-ALGAE-150 | CHLORELLA PHOTOBIOREACTOR</text>

        <!-- Top Oxygen Vent -->
        <polygon points="270,70 330,70 340,110 260,110" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
        <circle cx="300" cy="90" r="14" fill="#022c22" stroke="#34d399" stroke-width="1.5"/>
        <text x="300" y="60" fill="#34d399" font-family="monospace" font-size="10" text-anchor="middle">SOF KISLOROD (O2) CHIQISHI</text>

        <!-- Central Bioreactor Cylinder -->
        <rect x="240" y="110" width="120" height="380" rx="20" fill="#022c22" stroke="#10b981" stroke-width="2.5"/>
        <!-- Green Algae Liquid inside -->
        <rect x="248" y="125" width="104" height="350" rx="14" fill="#047857" opacity="0.75"/>

        <!-- Spiral Glass Tubes Effect -->
        <path d="M 248 150 Q 300 170 352 150 Q 300 200 248 210 Q 300 230 352 210 Q 300 260 248 270 Q 300 290 352 270 Q 300 320 248 330 Q 300 350 352 330 Q 300 380 248 390 Q 300 410 352 390 Q 300 440 248 450" fill="none" stroke="#6ee7b7" stroke-width="4" opacity="0.85"/>

        <!-- Micro-bubbles rising -->
        <circle cx="270" cy="420" r="4" fill="#a7f3d0" opacity="0.8"/>
        <circle cx="290" cy="380" r="6" fill="#a7f3d0" opacity="0.8"/>
        <circle cx="320" cy="320" r="5" fill="#a7f3d0" opacity="0.8"/>
        <circle cx="280" cy="250" r="7" fill="#a7f3d0" opacity="0.8"/>
        <circle cx="310" cy="190" r="5" fill="#a7f3d0" opacity="0.8"/>

        <!-- External LED Grow Lights Vertical Bars -->
        <rect x="215" y="160" width="12" height="280" rx="4" fill="#be185d" stroke="#f472b6" stroke-width="1.5"/>
        <rect x="373" y="160" width="12" height="280" rx="4" fill="#be185d" stroke="#f472b6" stroke-width="1.5"/>
        <text x="145" y="300" fill="#f472b6" font-family="monospace" font-size="9">FITOLAMPA (660nm)</text>

        <!-- Base Compressor Station -->
        <rect x="200" y="490" width="200" height="70" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
        <circle cx="300" cy="525" r="20" fill="#022c22" stroke="#10b981" stroke-width="1.5"/>
        <text x="300" y="530" fill="#6ee7b7" font-family="monospace" font-size="9" text-anchor="middle">AERATSIYA</text>
        <text x="300" y="585" fill="#93c5fd" font-family="monospace" font-size="10" text-anchor="middle">SHAHAR HAVOSI (CO2) KIRISHI</text>
      </svg>
    `
  },

  'aquadrone-blueprint': {
    title: 'AquaDrone TrashHunter Robot-Qayiq Eskizi',
    subtitle: 'Suv Yuzasidagi Chiqindi va Plastik Yig\'uvchi Quyosh Katamarani',
    hotspots: [
      {
        id: 'catamaran-hulls',
        title: 'Egizak Katamaran Korpuslari (Twin Hydro Hulls)',
        desc: 'Yengil alyuminiy va uglerod tolasidan yasalgan qulay gidrodinamik suzgichlar. Sayoz suvlarda ham oson harakatlanadi.',
        x: '20%',
        y: '50%'
      },
      {
        id: 'conveyor-belt',
        title: 'Tishli To\'r-Konveyer Lenta',
        desc: 'Suv yuzasidagi plastik shishalar, paketlar va organik qoldiqlarni tishlari bilan ushlab, ichki 120 litrli savatga olib chiqadi.',
        x: '50%',
        y: '45%'
      },
      {
        id: 'solar-deck',
        title: '300W Yuqori Samarali Quyosh Batareyasi',
        desc: 'Katamaran ustki qismiga joylashtirilgan bo\'lib, 2 ta cho\'tkasiz elektro-motorlarni va LiFePO4 batareyani uzluksiz to\'yintiradi.',
        x: '65%',
        y: '22%'
      },
      {
        id: 'nav-sensors',
        title: 'GPS & Lidar Avtopilot Boshqaruv Bloki',
        desc: 'Belgilangan koordinatalar bo\'yicha daryo va ko\'llarni avtonom tozalaydi, qirg\'oq va kemalarni o\'zi aylanib o\'tadi.',
        x: '80%',
        y: '45%'
      }
    ],
    svg: `
      <svg viewBox="0 0 700 480" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bp-grid-5" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 240, 255, 0.08)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="700" height="480" fill="#031622"/>
        <rect width="700" height="480" fill="url(#bp-grid-5)"/>
        <rect x="20" y="20" width="660" height="440" fill="none" stroke="rgba(0, 240, 255, 0.3)" stroke-width="1.5" stroke-dasharray="8 4"/>
        <text x="35" y="45" fill="#38bdf8" font-family="monospace" font-size="11" letter-spacing="2">DWG NO: ECO-BOT-DRONE-AQUA | AUTONOMOUS SURFACE CATAMARAN</text>

        <!-- Water level line -->
        <line x1="40" y1="310" x2="660" y2="310" stroke="#0284c7" stroke-width="2" stroke-dasharray="8 4"/>
        <text x="60" y="300" fill="#38bdf8" font-family="monospace" font-size="9">SUV SATHI (WATER LINE)</text>

        <!-- Left Catamaran Pontoon -->
        <path d="M 120 280 L 160 360 L 520 360 L 580 280 Z" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="340" y="345" fill="#bae6fd" font-family="monospace" font-size="10" text-anchor="middle">ALUMINIUM KATAMARAN KORPUSI</text>

        <!-- Front Intake funnels / Angled conveyor -->
        <polygon points="120,280 250,220 250,300 130,340" fill="#0369a1" stroke="#00f0ff" stroke-width="2"/>
        <!-- Conveyor teeth -->
        <line x1="140" y1="310" x2="150" y2="295" stroke="#f59e0b" stroke-width="3"/>
        <line x1="170" y1="290" x2="180" y2="275" stroke="#f59e0b" stroke-width="3"/>
        <line x1="200" y1="270" x2="210" y2="255" stroke="#f59e0b" stroke-width="3"/>
        <line x1="230" y1="250" x2="240" y2="235" stroke="#f59e0b" stroke-width="3"/>

        <!-- Floating trash items entering -->
        <rect x="70" y="295" width="25" height="12" rx="2" fill="#ef4444" stroke="#fecaca"/>
        <circle cx="105" cy="302" r="7" fill="#10b981"/>
        <text x="50" y="275" fill="#f87171" font-family="monospace" font-size="9">CHIQINDILAR</text>

        <!-- Storage Basket -->
        <rect x="250" y="210" width="140" height="80" rx="4" fill="#075985" stroke="#00f0ff" stroke-width="2" stroke-dasharray="4 2"/>
        <text x="320" y="255" fill="#bae6fd" font-family="monospace" font-size="9" text-anchor="middle">120L CHIQINDI SAVATI</text>

        <!-- Solar Canopy Deck -->
        <polygon points="360,140 560,140 530,190 390,190" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
        <text x="460" y="170" fill="#93c5fd" font-family="sans-serif" font-weight="bold" font-size="9" text-anchor="middle">300W QUYOSH MODULI</text>

        <!-- Rear Thruster Motor / Propeller -->
        <rect x="560" y="320" width="45" height="30" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <ellipse cx="610" cy="335" rx="6" ry="16" fill="#38bdf8"/>
        <text x="582" y="380" fill="#7dd3fc" font-family="monospace" font-size="8">IP68 MOTOR</text>

        <!-- Navigation Mast & Antenna / Lidar Dome -->
        <line x1="470" y1="140" x2="470" y2="85" stroke="#38bdf8" stroke-width="2"/>
        <circle cx="470" cy="80" r="10" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
        <path d="M 455 70 Q 470 60 485 70" fill="none" stroke="#22d3ee" stroke-width="1.5"/>
        <text x="470" y="55" fill="#22d3ee" font-family="monospace" font-size="9" text-anchor="middle">GPS / 4G / LIDAR</text>
      </svg>
    `
  }
};

window.BLUEPRINTS = BLUEPRINTS;
