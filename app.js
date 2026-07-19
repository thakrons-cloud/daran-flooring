document.addEventListener('DOMContentLoaded', () => {
    // --- Services Database ---
    const servicesData = {
        "epoxy-coating": {
            tag: "EPOXY SYSTEM",
            title: "Epoxy Coating",
            image: "https://itp1.itopfile.com/ImageServer/z_itp_11002024na30/0/0/รับทำอีพ็อกซี่-พียู)(2)z-z494261568474.webp",
            desc: "EPOXY COATING เป็นระบบสี 2 ส่วนผสม ชนิดมีตัวทำละลายฟิล์มที่ให้ความเงางาม ความหนา 100-200 ไมครอน หลังเซ็ทตัว ยึดเกาะพื้นได้ดีทั้งระบบกลิ้งและสเปรย์ ทำให้ทำความสะอาดพื้นผิวได้ง่าย เหมาะกับโรงงานอุตสาหกรรม พื้นที่ส่วนผลิต ทางเดินโรงงาน ลานจอดรถ โชว์รูมและอาคารสำนักงานต่าง ๆ",
            steps: [
                { text: "ปิดกั้นพื้นที่บริเวณที่ทำงานเพื่อความปลอดภัย", icon: "barrier" },
                { text: "ขัดเตรียมพื้นปูนเดิมเพื่อเปิดรูขุมขน และซ่อมแซมพื้นที่ที่เสียหายให้เรียบเนียน", icon: "clean" },
                { text: "ลงสีรองพื้น Epoxy Primer เพื่อเพิ่มแรงยึดเกาะ", icon: "primer" },
                { text: "ลงน้ำยาปรับพื้นเรียบและลดฟองอากาศด้วยน้ำยา Epoxy Putty เก็บความละเอียดผิว", icon: "putty" },
                { text: "ลงสีทับหน้า Top coat ด้วยสี Epoxy Coating เกรดพรีเมียมให้ฟิล์มสีสวยงาม", icon: "topcoat" },
                { text: "ตีเส้นสัญลักษณ์ตามแบบ เก็บรายละเอียดหน้างาน และส่งมอบงาน", icon: "sparkles" }
            ]
        },
        "epoxy-self-leveling": {
            tag: "EPOXY SYSTEM",
            title: "Epoxy Self-Leveling",
            image: "https://itp1.itopfile.com/ImageServer/z_itp_11002024na30/0/0/รับทำอีพ็อกซี่-พียู(2)z-z454708919614.webp",
            desc: "EPOXY SELF-LEVELING เป็นสีที่ปรับระดับได้ด้วยตัวเอง แบบ 2 ส่วนผสม ปราศจากตัวทำละลายมีความเงาสูงใช้สำหรับงานภายใน ทนทานต่อสารเคมี มีแรงยึดเกาะที่ดีและไม่เป็นแหล่งสะสมของแบคทีเรีย ดูแลรักษาง่ายไม่เกิดฝุ่น เหมาะสำหรับพื้นที่สัมผัสสารเคมี โรงงานอุตสาหกรรมทั่วไปและอุตสาหกรรมอาหารและยา งานโชว์รูม เป็นต้น",
            steps: [
                { text: "ปิดกั้นพื้นที่บริเวณที่ทำงานเพื่อความปลอดภัย", icon: "barrier" },
                { text: "ขัดเตรียมผิวคอนกรีตเดิมเพื่อเปิดหน้าปูน และเก็บรอยร้าวหลุมบ่อต่าง ๆ", icon: "clean" },
                { text: "ลงสีรองพื้น Epoxy Primer ปิดกั้นฟองอากาศและเสริมแกร่งการยึดเกาะ", icon: "primer" },
                { text: "ลงน้ำยาปรับพื้นเรียบและลดฟองอากาศด้วยน้ำยา Epoxy Putty", icon: "putty" },
                { text: "ลงสี Top coat ชั้นคุณภาพสูงด้วยสี Epoxy Self-Leveling ปล่อยสีปรับระดับเอง", icon: "topcoat" },
                { text: "ตีเส้นสัญลักษณ์ตามแบบ เก็บรายละเอียดหน้างาน และส่งมอบงาน", icon: "sparkles" }
            ]
        },
        "pu-coating": {
            tag: "POLYURETHANE SYSTEM",
            title: "PU Coating",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
            desc: "PU COATING ระบบงานโพลียูรีเทน แบบ 2 ส่วนผสม ปราศจากตัวทำละลายมีความเงาสูง ใช้สำหรับงานพื้นและงานผนัง ทนทานต่อรังสียูวี เหมาะสำหรับงานภายนอก หรืองานผนัง เกิดการซีดจางได้ยาก มีแรงยึดเกาะที่ดีเยี่ยม และดูแลรักษาง่าย มีทั้งชนิดเงา ด้าน และกึ่งเงากึ่งด้าน เหมาะสำหรับพื้นที่โรงงานอุตสาหกรรมทั่วไป โชว์รูม พื้นที่ที่มีการสัมผัสเคมีเป็นต้น",
            steps: [
                { text: "ปิดกั้นพื้นที่บริเวณที่ทำงานเพื่อความปลอดภัย", icon: "barrier" },
                { text: "ขัดเตรียมพื้นปูนเดิมเพื่อเปิดรูขุมขน และซ่อมแซมพื้นที่ที่เสียหายให้เรียบเนียน", icon: "clean" },
                { text: "ตัดกรุ๊ปแนวรับรอบขอบเพื่อเสริมการยึดเกาะป้องกันปูนหลุดร่อน", icon: "lines" },
                { text: "ลงสีรองพื้นโพลียูรีเทน PU Primer", icon: "primer" },
                { text: "ลงสีทับหน้า Top coat ด้วยสี PU Coating ทนต่อสภาพอากาศและแสงยูวี", icon: "topcoat" },
                { text: "ตีเส้นสัญลักษณ์ตามแบบ เก็บรายละเอียดหน้างาน และส่งมอบงาน", icon: "sparkles" }
            ]
        },
        "pu-concrete": {
            tag: "POLYURETHANE SYSTEM",
            title: "PU Concrete",
            image: "https://itp1.itopfile.com/ImageServer/z_itp_11002024na30/0/0/รับทำอีพ็อกซี่-พียู(1)z-z485104102339.webp",
            desc: "PU CONCRETE เป็นระบบงานที่มีคุณสมบัติทนต่อแรงกระแทก รับน้ำหนักได้ดี และมีสารป้องกันเชื้อราและแบคทีเรีย เหมาะสำหรับงานโรงงานฝ่ายผลิต มาตรฐาน อย. Haccp ห้องควบคุมอุณหภูมิถึง -20 องศา เช่น โรงงานผลิตเครื่องสำอาง โรงงานผลิตอาหาร หรือระบบครัวกลาง",
            steps: [
                { text: "ปิดกั้นพื้นที่บริเวณที่ทำงานเพื่อความปลอดภัย", icon: "barrier" },
                { text: "ขัดเตรียมพื้นเดิมและสกัดร่องรับน้ำหนักรอบขอบรอยต่อโครงสร้าง", icon: "clean" },
                { text: "ตัดกรุ๊ปร่องน้ำทิ้งเพื่อรองรับการไหลตัวและการทำความสะอาดง่าย", icon: "lines" },
                { text: "ลงสีรองพื้นชนิดพิเศษ PU Concrete Primer", icon: "primer" },
                { text: "ปาดเคลือบผิวระบบทับหน้าด้วยน้ำยา PU Concrete ปรับระดับและเกลี่ยผิว", icon: "putty" },
                { text: "เก็บรายละเอียดงานเคลือบขอบบัวมุมผนัง และส่งมอบระบบพื้นหนาทนทราฟฟิกสูง", icon: "sparkles" }
            ]
        },
        "waterproof": {
            tag: "WATERPROOFING SYSTEM",
            title: "Waterproof System",
            image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
            desc: "WATERPROOF ระบบกันซึมเป็นระบบเคลือบพื้นกันซึมโดยใช้โพลียูริเทนกันซึมคุณภาพสูง เคลือบบนพื้นผิวคอนกรีต มีทั้งวัสดุอะคริลิก และงานโพลิยูรีเทน เป็นงานเคลือบผิวกันซึมที่มีคุณภาพสูง ติดตั้งพร้อม fiber glass",
            steps: [
                { text: "ปิดกั้นพื้นที่บริเวณที่ทำงานเพื่อความปลอดภัย", icon: "barrier" },
                { text: "ขัดปรับระดับ ขจัดคราบฝุ่น ไขมัน สิ่งสกปรกเดิมออกจนหมดจด", icon: "clean" },
                { text: "ลงสีรองพื้น Primer สำหรับงานกันซึมโดยเฉพาะ", icon: "primer" },
                { text: "ติดตั้งแผ่นใยแก้วไฟเบอร์กลาส (Fiber Glass Mesh) เพื่อรองรับแรงดึงและรอยแตกร้าว", icon: "putty" },
                { text: "ทาเคลือบกันซึมโพลียูรีเทนทับหน้าระบบ 2-3 ชั้นเพื่อฟิล์มหนาพิเศษ", icon: "topcoat" },
                { text: "ตรวจสอบระดับการขังน้ำ (Flood Test) เก็บงานให้สวยงามพร้อมส่งมอบ", icon: "sparkles" }
            ]
        },
        "pu-sport": {
            tag: "SPORTS FLOOR SYSTEM",
            title: "PU Sport Floor",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
            desc: "PU SPORT เป็นระบบงานโพลียูรีเทนที่มีความยืดหยุ่นสูง สามารถทำความหนาเริ่มต้น 4 มิลลิเมตร ทนต่อแสงยูวี แรงขัดถู ใช้ได้ทั้งภายนอก และภายใน เหมาะสมสำหรับงานสนามกีฬา สนามเทนนิส indoor- outdoor หรือสนามกีฬาดาดฟ้า เพื่อเป็นกันซึมได้ในตัว",
            steps: [
                { text: "ปิดกั้นพื้นที่บริเวณที่ทำงานเพื่อความปลอดภัย", icon: "barrier" },
                { text: "ขัดเจียรผิวหน้าคอนกรีตเดิมเพื่อเปิดผิวหน้าปูน และซ่อมรอยแตกร้าวปูน", icon: "clean" },
                { text: "ลงสีรองพื้นระบบยืดหยุ่นสูง (Flexible Primer) เพื่อผนึกพื้นปูน", icon: "primer" },
                { text: "ปูชั้นยางและลงน้ำยาเนื้อยางโพลียูรีเทนยืดหยุ่นสูงหนา 4-8 มม. เพื่อซับแรงกระแทก", icon: "putty" },
                { text: "ลงสีทับหน้าระบบเคลือบผิวป้องกันแสงยูวีสำหรับสนามกีฬา (UV Resistant Coat)", icon: "topcoat" },
                { text: "ตีเส้นสนามตามมาตรฐานสากลเก็บขอบ และส่งมอบงาน", icon: "lines" }
            ]
        },
        "crystal-polished": {
            tag: "POLISHED CONCRETE",
            title: "Crystal Polished Concrete",
            image: "https://itp1.itopfile.com/ImageServer/z_itp_11002024na30/0/0/รับทำอีพ็อกซี่-พียู(1)z-z398075493110.webp",
            desc: "CRYSTAL POLISHED CONCRETE ระบบพื้นคอนกรีตขัดเงา \"CRYSTAL POLISHED CONCRETE\" คือ นวัตกรรมระบบการขัดพื้นคอนกรีตให้เกิดความเงางามอย่างถาวร โดยใช้ระบบการขัดพื้นด้วยใบขัดประเภทเหล็ก และเรซิน พร้อมการติดตั้งน้ำยา LIQUID HARDENER ประเภท LITHIUM SILICATE DENSIFIERS เพื่อปรับสภาพและฟื้นฟูผิวคอนกรีต ทำให้ผิวคอนกรีตแข็งแรง ทนต่อการขูดขีด ทนสารเคมีดีเยี่ยม ปลอดภัยไร้ฝุ่นปูน เหมาะกับโรงงาน โกดัง และศูนย์บริการรถยนต์",
            steps: [
                { text: "ปิดกั้นพื้นที่บริเวณที่ทำงานเพื่อความปลอดภัย", icon: "barrier" },
                { text: "ขัดเจียรผิวหน้าคอนกรีตเดิมด้วยใบขัดประเภทเหล็กเพื่อเปิดผิวหน้าปูนและลอกชั้นฝุ่นเดิม", icon: "clean" },
                { text: "ซ่อมแซมรอยแตก รอยหลุมบนคอนกรีตด้วยกาวปูนอีพ็อกซี่สูตรแกร่งพิเศษ", icon: "clean" },
                { text: "พ่นลงน้ำยา Liquid Hardener (Lithium Silicate) ทิ้งให้ซึมทำปฏิกิริยากับผลึกคอนกรีต", icon: "primer" },
                { text: "ขัดเงาผิวหน้าไล่ระดับความละเอียดด้วยใบขัด Diamond Resin ตั้งแต่เบอร์ 50-3000", icon: "putty" },
                { text: "ลงน้ำยาเคลือบเงาผิวหน้า (Sealer) และขัดปั่นเงาความเร็วสูงด้วยเครื่อง High-speed Burnisher ส่งมอบผิวคริสตัล", icon: "sparkles" }
            ]
        },
        "liquid-hardener": {
            tag: "FLOOR HARDENER SYSTEM",
            title: "Liquid Hardener",
            image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
            desc: "LIQUID HARDENER (LITHIUM SILICATE) คือ นวัตกรรม FLOOR HARDENER ชนิดน้ำที่ให้ผลในการเปลี่ยนฝุ่นคอนกรีต (CALCIUM HYDROXYL) ให้เป็นผลึก CALCIUM SILICATE เพื่อให้ผลต่อผิวและชั้นคอนกรีตทำให้คอนกรีตมีลักษณะพื้นผิวแข็งแรงและทนทานต่อการขูดขีดจากการใช้งาน ลดการเกิดฝุ่นปูนคอนกรีตถาวร",
            steps: [
                { text: "ปิดกั้นพื้นที่บริเวณที่ทำงานเพื่อความปลอดภัย", icon: "barrier" },
                { text: "ขัดเจียรผิวหน้าคอนกรีตและขจัดคราบสิ่งสกปรก ฝุ่นละอองเดิมออกจนหมด", icon: "clean" },
                { text: "ทำความสะอาดพื้นผิวปูนด้วยน้ำสะอาด รีดน้ำออกและทิ้งไว้ให้แห้งสนิท", icon: "clean" },
                { text: "พ่นหรือราดลงน้ำยา Liquid Floor Hardener (Lithium Silicate) ปล่อยให้แทรกซึมทำปฏิกิริยาเคมี", icon: "primer" },
                { text: "ปั่นขัดพื้นผิวเพื่อสลัดเศษผลึกส่วนเกิน ทำความสะอาดขัดดันฝุ่น", icon: "clean" },
                { text: "ตีเส้นสัญลักษณ์แนวช่องทางจราจร เก็บรายละเอียด และส่งมอบงานแกร่งไร้ฝุ่นถาวร", icon: "lines" }
            ]
        }
    };

    // Helper to get SVG vector markup for step icons (matching original CMS website line-art style)
    function getStepIconHtml(iconName) {
        const icons = {
            // ปิดกั้นพื้นที่: วงกลมขีดฆ่า + มือ (no-entry / no-hand)
            "barrier": `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="40" r="34"/><line x1="16.4" y1="16.4" x2="63.6" y2="63.6"/><path d="M35 48V31a4 4 0 0 1 8 0v17M27 48V37a4 4 0 0 1 8 0v11M43 48V34a4 4 0 0 1 8 0v14M51 48V40a4 4 0 0 1 8 0v8M27 48c0 8 5 13 13 13s13-5 13-13"/></svg>`,
            // ขัดเตรียมพื้น + ซ่อมแซม: ถัง + ไม้กวาด (bucket + broom)
            "clean": `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 30h28l-4 30H18L14 30z"/><path d="M14 30a14 14 0 0 1 28 0"/><line x1="22" y1="42" x2="34" y2="42"/><line x1="56" y1="8" x2="56" y2="50"/><path d="M44 50h24l-4 18H48L44 50z"/></svg>`,
            // ลงสีรองพื้น Primer: กระป๋องสี + แปรงทา
            "primer": `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="28" width="32" height="38" rx="4"/><path d="M12 28a16 16 0 0 1 32 0"/><line x1="12" y1="40" x2="44" y2="40"/><line x1="22" y1="54" x2="34" y2="54"/><path d="M44 36l18-18a5 5 0 0 1 7 7L51 43"/><path d="M42 38l6-6 8 8-6 6z"/></svg>`,
            // ลงน้ำยาปรับพื้น Putty: กระป๋อง+ประกาย (sparkle bucket)
            "primer2": `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 30h30l-4 34H14L10 30z"/><path d="M10 30a15 15 0 0 1 30 0"/><path d="M58 16l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/><path d="M64 44l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></svg>`,
            // ลงน้ำยาปรับพื้น Epoxy Putty: ไม้พายปาด + ประกาย
            "putty": `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 72h64"/><path d="M14 58l44-44 6 6-44 44z"/><path d="M50 22l8 8"/><path d="M57 14l2 4 4 2-4 2-2 4-2-4-4-2 4-2z"/><path d="M68 26l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z"/><path d="M46 9l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z"/></svg>`,
            // ลงสี Topcoat: กระป๋องสีมีฝา + หยดสี
            "topcoat": `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 26h48l-6 46H22L16 26z"/><path d="M16 26a24 24 0 0 1 48 0"/><path d="M10 26h60"/><path d="M28 26v12c0 4 4 6 6 3l2-3M40 26v18c0 5 4 7 6 4l3-4M52 26v10c0 4 4 6 6 3l2-3"/></svg>`,
            // ตีเส้นตามแบบ: พื้น perspective + ขอบตั้ง (floor grid)
            "lines": `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="16" x2="8" y2="70"/><line x1="72" y1="16" x2="72" y2="70"/><line x1="8" y1="70" x2="72" y2="70"/><line x1="16" y1="52" x2="64" y2="52"/><line x1="26" y1="36" x2="54" y2="36"/><line x1="8" y1="70" x2="30" y2="28"/><line x1="40" y1="70" x2="40" y2="28"/><line x1="72" y1="70" x2="50" y2="28"/></svg>`,
            // เก็บงาน + ส่งมอบ: พื้นเงาพร้อมประกาย (shiny floor + sparkles)
            "sparkles": `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="70" x2="72" y2="70"/><line x1="14" y1="54" x2="66" y2="54"/><line x1="22" y1="40" x2="58" y2="40"/><line x1="8" y1="70" x2="28" y2="32"/><line x1="40" y1="70" x2="40" y2="32"/><line x1="72" y1="70" x2="52" y2="32"/><path d="M22 22l2.5 7 7 2.5-7 2.5-2.5 7-2.5-7-7-2.5 7-2.5z"/><path d="M50 10l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z"/><line x1="62" y1="20" x2="62" y2="28"/><line x1="58" y1="24" x2="66" y2="24"/></svg>`
        };
        return icons[iconName] || icons["sparkles"];
    }

    // --- Service Modal Handling Logic ---
    const serviceModal = document.getElementById('service-modal');
    const serviceModalImage = document.getElementById('s-modal-image');
    const serviceModalTag = document.getElementById('s-modal-tag');
    const serviceModalTitle = document.getElementById('s-modal-title');
    const serviceModalDesc = document.getElementById('s-modal-desc');
    const serviceModalTimeline = document.getElementById('s-steps-timeline');

    // Request Form Handling (Redirect to LINE OA with Auto-Filled Message)
    const contactForm = document.getElementById('contact-lead-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const interest = document.getElementById('interest').options[document.getElementById('interest').selectedIndex].text;
            const note = document.getElementById('note').value || 'ไม่มีรายละเอียดเพิ่มเติม';

            // Format message template
            const messageTemplate = `[ สนใจขอใบเสนอราคา / ประเมินหน้างานฟรี ]\nชื่อผู้ติดต่อ: ${name}\nเบอร์โทรศัพท์: ${phone}\nบริการที่สนใจ: ${interest}\nรายละเอียดเพิ่มเติม: ${note}`;

            // URL Encode the message for safe browser redirect
            const encodedMessage = encodeURIComponent(messageTemplate);

            // Device Detection
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            let lineUrl;
            if (isMobile) {
                // For Mobile: Use direct message with text pre-fill (encode '@' as '%40')
                lineUrl = `https://line.me/R/oaMessage/%40210ngugq/?${encodedMessage}`;
            } else {
                // For Desktop: Fallback to standard URL scheme that works on PC browsers
                lineUrl = `https://line.me/ti/p/%40210ngugq`;
            }

            // Enforce location redirect
            window.location.href = lineUrl;
            contactForm.reset();
        });
    }

    window.openServiceModal = function(serviceId) {
        const service = servicesData[serviceId];
        if (!service) return;

        if (serviceModalImage) {
            serviceModalImage.src = service.image;
            serviceModalImage.alt = service.title;
        }
        if (serviceModalTag) serviceModalTag.innerText = service.tag;
        if (serviceModalTitle) serviceModalTitle.innerText = service.title;
        if (serviceModalDesc) serviceModalDesc.innerText = service.desc;

        // Render Steps Timeline with icons
        if (serviceModalTimeline) {
            serviceModalTimeline.innerHTML = '';
            service.steps.forEach((step) => {
                const stepItem = document.createElement('div');
                stepItem.className = 's-step-item';
                
                const stepIcon = document.createElement('div');
                stepIcon.className = 's-step-icon';
                stepIcon.innerHTML = getStepIconHtml(step.icon);
                
                const stepText = document.createElement('div');
                stepText.className = 's-step-text';
                stepText.innerText = step.text;
                
                stepItem.appendChild(stepIcon);
                stepItem.appendChild(stepText);
                serviceModalTimeline.appendChild(stepItem);
            });
        }

        if (serviceModal) serviceModal.classList.add('active');
        document.body.classList.add('modal-open');
    };

    window.closeServiceModal = function() {
        if (serviceModal) serviceModal.classList.remove('active');
        document.body.classList.remove('modal-open');
    };

    // Attach click events to all Bento Service Cards
    const serviceCards = document.querySelectorAll('.bento-service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.getAttribute('data-service-id');
            if (serviceId) {
                openServiceModal(serviceId);
            }
        });
    });

    // Attach click events to all Header/Mobile Dropdown Items
    const dropdownServiceItems = document.querySelectorAll('[data-service-id]');
    dropdownServiceItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.classList.contains('dropdown-item') || item.classList.contains('drawer-dropdown-item')) {
                const serviceId = item.getAttribute('data-service-id');
                if (serviceId && serviceModal) {
                    // Close side drawer if open
                    const sideDrawer = document.querySelector('.side-drawer');
                    const burgerBtn = document.querySelector('.menu-burger');
                    if (sideDrawer) {
                        sideDrawer.classList.remove('active');
                        const spans = burgerBtn ? burgerBtn.querySelectorAll('span') : [];
                        if (spans.length) {
                            spans[0].style.transform = 'none';
                            spans[1].style.transform = 'none';
                        }
                    }
                    
                    // Delay slightly to allow scroll if smooth-scrolling is triggered
                    setTimeout(() => {
                        openServiceModal(serviceId);
                    }, 300);
                }
            }
        });
    });

    // Handle incoming URL parameters (e.g. from portfolio.html redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam && servicesData[serviceParam]) {
        // Scroll to services section and open modal
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            setTimeout(() => {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
                openServiceModal(serviceParam);
            }, 500);
        }
    }
    // Header Scroll shrink effect
    const header = document.querySelector('.c-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });

    // Side Drawer Panel Toggle
    const burgerBtn = document.querySelector('.menu-burger');
    const sideDrawer = document.querySelector('.side-drawer');

    if (burgerBtn && sideDrawer) {
        burgerBtn.addEventListener('click', () => {
            sideDrawer.classList.toggle('active');
            
            // Hamburger icon to X conversion
            const spans = burgerBtn.querySelectorAll('span');
            if (sideDrawer.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.transform = 'none';
            }
        });

        // Close drawer when clicking nav links or dropdown items
        const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-dropdown-item');
        const drawerDropdown = document.querySelector('.drawer-dropdown');
        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                sideDrawer.classList.remove('active');
                if (drawerDropdown) {
                    drawerDropdown.classList.remove('active');
                }
                const spans = burgerBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.transform = 'none';
            });
        });

        // Mobile Drawer Dropdown Toggle
        const drawerDropdownToggle = document.querySelector('.drawer-dropdown-toggle');
        if (drawerDropdownToggle && drawerDropdown) {
            drawerDropdownToggle.addEventListener('click', (e) => {
                e.preventDefault();
                drawerDropdown.classList.toggle('active');
            });
        }
    }

    // Full Screen Carousel Engine
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Range checking
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        // Shift track horizontally
        if (track) {
            track.style.transform = `translateX(-${currentSlide * 100}vw)`;
        }

        // Toggle active class to trigger staggered text slide-ups
        slides.forEach((slide, i) => {
            if (i === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 6000); // Auto change every 6 seconds
    }

    if (slides.length > 0) {
        // Initialize prev/next button events
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                startAutoSlide(); // Reset timer on manual action
            });

            nextBtn.addEventListener('click', () => {
                nextSlide();
                startAutoSlide(); // Reset timer on manual action
            });
        }

        // Start auto slider loop
        startAutoSlide();
    }

    // Scroll Active Nav Link Highlight
    const sections = document.querySelectorAll('section, header.carousel-section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    });



    // Scroll Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.bento-service-card, .profile-title-block, .profile-text-block, .contact-card-wrap, .article-card, .news-card');
    fadeElements.forEach(el => {
        el.classList.add('fade-in-element');
        scrollObserver.observe(el);
    });
});
