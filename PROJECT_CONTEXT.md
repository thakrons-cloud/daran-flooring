# Daran Flooring — Project Context (ส่งไฟล์นี้ให้ AI ทุกครั้งที่เปิด Conversation ใหม่)

## 📁 Project Path
/Users/thakronsuttipat/.gemini/antigravity-ide/scratch/bebuilder

## 🗂️ File Structure
- `index.html` — หน้าหลัก (hero, about, services bento grid, contact)
- `style.css` — CSS ทั้งหมด (1,600+ บรรทัด)
- `app.js` — ข้อมูลบริการ + logic popup + SVG icons (420+ บรรทัด)
- `portfolio.html` + `portfolio.js` + `portfolio.css` — หน้าผลงาน
- Server: python3 -m http.server 8082

## 🎯 Key HTML IDs (ใช้บ่อย)
- `#service-modal` — popup modal บริการ (2 คอลัมน์)
- `#s-modal-image` — รูปภาพฝั่งซ้าย modal
- `#s-modal-tag`, `#s-modal-title`, `#s-modal-desc` — ข้อมูลบริการ
- `#s-steps-timeline` — รายการขั้นตอนการทำงาน
- `#nav-services-btn` — ปุ่มเมนูบริการ Desktop
- `#mobile-drawer` — เมนู Mobile

## 🎨 Key CSS Classes (ใช้บ่อย)
- `.s-step-icon` — กล่องไอคอน SVG (44x44px, สีส้ม)
- `.s-step-item` — แต่ละขั้นตอน (flex row)
- `.s-modal-layout-grid` — grid 2 คอลัมน์ของ modal
- `.bento-grid` — grid การ์ดบริการหน้าหลัก

## 🔑 Services Keys (ใน app.js → servicesData)
```
epoxy-coating, epoxy-self-leveling, pu-coating, pu-concrete,
waterproof, pu-sport, crystal-polished, liquid-hardener
```

## 🎨 Brand Colors
- `--accent: #F37021` (ส้ม Daran)
- `--brand-blue: #1a3c5e` (น้ำเงิน)
- `--text-dark: #1a1a2e`
- `--text-muted: #6b7280`

## 📐 Icon Keys (ใน getStepIconHtml)
`barrier` | `clean` | `primer` | `putty` | `topcoat` | `lines` | `sparkles`

## ✅ งานที่ทำเสร็จแล้ว
- [x] เมนู navbar + mobile drawer ครบ 8 บริการ
- [x] หน้าหลัก: เกี่ยวกับเรา, วิสัยทัศน์, พันธกิจ (ข้อมูลจริงจาก CMS)
- [x] Bento Grid 8 บริการ
- [x] Service Modal 2 คอลัมน์ (รูปซ้าย + ขั้นตอนขวา)
- [x] SVG Icons ประจำแต่ละขั้นตอน (สไตล์เว็บเดิม)
- [x] หน้าผลงาน portfolio.html (ดึงข้อมูลจริงจาก CMS)
- [x] URL Parameter เปิด modal จากหน้าอื่น

## 🚧 งานที่ยังไม่ได้ทำ / ทำต่อ
- [ ] (เพิ่มเติมหากมี)
