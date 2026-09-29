# EcoSphere Uzbekistan — Ekologik Texnologiyalar va Muhandislik Portali

EcoSphere — O‘zbekiston va Markaziy Osiyo atrof-muhitini asrash, havoni, suvni ifloslantiruvchi hamda tozalovchi moddalar tahlili, shuningdek amaliyotga tatbiq etilishi mumkin bo‘lgan yangi ekologik qurilmalar CAD eskizlari va muhandislik loyihalarini o‘z ichiga olgan zamonaviy veb-platforma.

## Asosiy Imkoniyatlar

1. **Email Orqali Shaxsni Tasdiqlash (Supabase Auth & Database)**:
   - Foydalanuvchi elektron pochta manzilini kiritishi bilan tizim shaxsni tasdiqlaydi.
   - Barcha muhandislik chizmalari, komponentlar xarajatlari, formulalar va ixtiro taklif qilish imkoniyatlari ochiladi.
   - Ma'lumotlar Supabase `verified_users` jadvalida xavfsiz saqlanadi.

2. **Ishlab Chiqarish Mumkin Bo‘lgan Qurilmalar Eskizlari (Engineering Blueprints)**:
   - **AeroShield-3000**: 7.2 metrli shahar ionlashtiruvchi smog yutgich minorasi (15kV elektrostatik filtr, TiO2 fotokataliz, quyosh panellari).
   - **AquaCleanse Pro**: 1,500 L/soat quyosh energiyali ko‘p bosqichli daryo va oqova suv tozalash mini-stansiyasi.
   - **BioPyrolyzer-X**: Organik chiqindilardan bioko‘mir (Biochar) va toza gaz olish yopiq siklli reaktori.
   - **AlgaeTree Bio-Column**: 150 ta daraxt o‘rnini bosuvchi Chlorella mikrosuvo‘tli fotobioreaktor.
   - **AquaDrone TrashHunter**: Suv yuzasidagi plastik chiqindilarni avtomatik yig‘uvchi quyosh katamarani.
   - Har bir qurilma uchun interaktiv vektorli CAD eskiz, raqamlangan hotspotlar (qismlar tushuntirishi), xomashyolar ro‘yxati va texnik spetsifikatsiyalar.

3. **Ekologik Moddalar Katalogi**:
   - PM2.5 zarrachalar, Is gazi (CO), Oltingugurt dioksidi (SO2), Azot dioksidi (NO2), Titan dioksidi (TiO2), Aktivlashtirilgan uglerod, Zeolit minerallari va h.k.
   - Xavflilik darajasi, ruxsat etilgan me'yorlar (PDK/MPC) va ularni neytrallash usullari.

4. **Shaxsiy Uglerod Izi (Carbon Footprint) Kalkulyatori**:
   - Transport, elektr, oziq-ovqat va chiqindi ko‘rsatkichlari bo‘yicha yillik CO2 yuklamasini va ekilishi lozim bo‘lgan daraxtlar sonini interaktiv hisoblash.

5. **Yangi Ixtiro va Qurilma Taklif Qilish**:
   - Tasdiqlangan foydalanuvchilar o‘z loyihalarini to‘g‘ridan-to‘g‘ri Supabase bazasiga jo‘nata oladi.

## Texnologiyalar & Integratsiyalar
- **Frontend**: HTML5, Vanilla CSS3 (Custom Design System, Night Emerald & Cyber Cyan), JavaScript (ES Modules).
- **Backend & DB**: Supabase (PostgreSQL, Row Level Security, Realtime).
- **Kodni Saqlash**: GitHub (`nozaninabduganiyeva4-eng/ekalogiya-platform`).
- **Deploy**: Vercel Cloud Hosting.
