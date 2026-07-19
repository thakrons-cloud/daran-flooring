/* ==========================================================================
   Daran Flooring - Portfolio Page Script
   ========================================================================== */

// --- Project Database ---
const projectData = {
    "byd-kanchana": {
        tag: "EPOXY SYSTEM",
        title: "BYD กาญจนา self leveling",
        desc: "งานติดตั้งระบบเคลือบพื้นผิวไร้รอยต่อประสิทธิภาพสูง Epoxy Self-Leveling ความหนา 2.0 มม. ณ ศูนย์บริการและโชว์รูมรถยนต์ไฟฟ้า BYD สาขากาญจนาภิเษก การดำเนินงานเน้นพื้นผิวเรียบระดับเสมอกัน มีความเงางามสะท้อนแสงไฟได้หรูหรา และทำความสะอาดคราบสิ่งสกปรก คราบน้ำมัน หรือยางรถยนต์ได้อย่างสมบูรณ์แบบ",
        location: "บางแค กรุงเทพมหานคร",
        system: "Epoxy Self-Leveling (หนา 2.0 มม.)",
        area: "1,200 ตร.ม.",
        color: "Light Gray (เทาอ่อนพิเศษ)",
        client: "โชว์รูมและศูนย์บริการ BYD กาญจนาภิเษก",
        images: [
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    "byd-prachin": {
        tag: "EPOXY SYSTEM",
        title: "BYD ปราจีนบุรี",
        desc: "งานทาสีเคลือบพื้นป้องกันฝุ่นระบบ Epoxy Coating ชนิดทนต่อสารเคมีปานกลางและรับแรงเสียดสีปานกลาง ณ บริเวณพื้นที่ซ่อมบำรุงและศูนย์ส่งมอบรถยนต์ใหม่ของ BYD สาขาปราจีนบุรี ป้องกันการรั่วซึมของคราบน้ำมัน คราบกรดหรือด่าง เพื่อรักษามาตรฐานความสะอาดและความปลอดภัยอย่างยั่งยืน",
        location: "เมืองปราจีนบุรี จังหวัดปราจีนบุรี",
        system: "Epoxy Coating ชนิดผิวเรียบ (3 ชั้นเคลือบ)",
        area: "850 ตร.ม.",
        color: "Blue (สีน้ำเงินประจำแบรนด์ BYD)",
        client: "โชว์รูมและศูนย์บริการ BYD ปราจีนบุรี",
        images: [
            "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    "holiday-pastry": {
        tag: "POLYURETHANE SYSTEM",
        title: "ครัวกลาง Holiday pastry",
        desc: "งานปรับปรุงเคลือบพื้นห้องครัวกลางเพื่อผลิตเบเกอรี่และของหวานสำหรับแบรนด์คาเฟ่ระดับท็อป Holiday Pastry ติดตั้งด้วยระบบ Polyurethane Screed (PU Screed) ชนิดป้องกันเชื้อราและแบคทีเรียหนา 4.0 มม. สามารถรองรับอุณหภูมิสลับฉับพลันสูงถึง 120°C (Thermal Shock) และได้มาตรฐานความปลอดภัยทางอาหาร (Food Grade) ตามเกณฑ์ อย. และ GMP/HACCP สากล",
        location: "ลาดพร้าว กรุงเทพมหานคร",
        system: "Polyurethane Concrete (PU Screed หนา 4.0 มม.)",
        area: "650 ตร.ม.",
        color: "Green (สีเขียวอนามัย)",
        client: "บริษัท ฮอลิเดย์ เพสทรี จำกัด",
        images: [
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    "pu-nsm": {
        tag: "POLYURETHANE SYSTEM",
        title: "งาน PU MF อพวช.",
        desc: "โครงการเคลือบพื้นผิวโถงจัดนิทรรศการและพื้นที่แสดงผลงานขององค์การพิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ (อพวช.) ด้วยระบบ Polyurethane Floor ชนิดสีด้านกึ่งเงาเรียบเนียน (PU MF) หนา 3.0 มม. ไร้รอยต่อ ปราศจากกลิ่นฉุนและสารละลายที่เป็นอันตรายต่อประชาชน (Low VOC) ปลอดภัยต่อเด็กและครอบครัว มีความทนทานต่อรอยขีดข่วนจากเฟอร์นิเจอร์และการสัมผัสทางกายภาพของผู้ชมจำนวนมาก",
        location: "คลองห้า ปทุมธานี",
        system: "Polyurethane Screed (PU MF หนา 3.0 มม.)",
        area: "1,800 ตร.ม.",
        color: "Slate Gray (สีเทาเข้มหรูหรา)",
        client: "องค์การพิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ (อพวช.)",
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    "manukit-1": {
        tag: "EPOXY SYSTEM",
        title: "โกดังคลังสินค้า มนูกิจ 1",
        desc: "งานติดตั้งระบบเคลือบพื้นอุตสาหกรรมรับน้ำหนักสูงพิเศษ Epoxy Self-Leveling ความหนา 3.0 มม. ภายในพื้นที่โกดังและศูนย์กระจายสินค้า มนูกิจ 1 ดำเนินการลอกพื้นปูนเดิม เจียรแต่งระดับ และเคลือบระบบสีอีพ็อกซี่แบบหนาเพื่อความคงทนต่อการขูดขีด แรงดึงของล้อรถยกโฟล์คลิฟต์ และแรงกดทับของชั้นวางชั้นจัดเก็บสินค้าหนักขนาดใหญ่",
        location: "บึงกุ่ม กรุงเทพมหานคร",
        system: "Epoxy Self-Leveling Heavy Duty (หนา 3.0 มม.)",
        area: "2,400 ตร.ม.",
        color: "Green (เขียวมาตรฐานอุตสาหกรรม)",
        client: "โครงการคลังสินค้าอุตสาหกรรม มนูกิจ 1",
        images: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    "auto-addict": {
        tag: "POLISHED & LEVELING",
        title: "ออโต้แอดดิก ปรับพื้นผิวและเคลือบ",
        desc: "งานเจียรผิวปูนเดิมเพื่อล้างสิ่งสกปรกและเปิดรูพรุน ผสมเคมีปูนปรับระดับผิวบางแห้งเร็ว (Self-Leveling Underlayment) เพื่อสร้างความเรียบตึงสูงสุด ก่อนลงสีเคลือบพื้นอีพ็อกซี่ทับหน้าแบบ High-Gloss สะท้อนแสงเงาราวกับกระจก เสริมสร้างระดับสเปซในห้องปฏิบัติงานล้าง ขัดสี เคลือบเซรามิกแท้ให้สำหรับอู่ดูแลรักษารถยนต์ซูเปอร์คาร์ชื่อดังอย่าง Auto Addict",
        location: "เมืองนนทบุรี นนทบุรี",
        system: "ปูนปรับระดับผิว (Self-Leveling) + เคลือบ Epoxy เงาพิเศษ",
        area: "450 ตร.ม.",
        color: "Dark Gray (เทาดำสุดพรีเมียม)",
        client: "ศูนย์บริการปรับสภาพผิวสีรถยนต์ Auto Addict",
        images: [
            "https://images.unsplash.com/photo-1617886903355-9354bb57751f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    "pattaya-garage": {
        tag: "EPOXY SYSTEM",
        title: "อู่ประกันพัทยา",
        desc: "งานทาสีเคลือบพื้นระบบป้องกันคราบฝังแน่นและสิ่งสกปรกสะสม Epoxy Coating ชนิดกันลื่น (Anti-Slip) เพื่อเพิ่มความปลอดภัยให้กับช่างเทคนิคในการซ่อมบำรุงรถยนต์และจัดเก็บอะไหล่ ดำเนินการทาสีเคลือบป้องกันพื้นผิวและคราบน้ำมันเกียร์ คราบกรดแบตเตอรี่ พร้อมทำแถบสัญลักษณ์แนวเส้นทางจราจรในอู่รถยนต์อย่างถูกต้อง",
        location: "เมืองพัทยา ชลบุรี",
        system: "Epoxy Coating Anti-Slip (ความหนา 1.5 มม.)",
        area: "950 ตร.ม.",
        color: "Gray & Yellow Line (สีเทาตัดเส้นขอบเหลืองเพื่อความปลอดภัย)",
        client: "อู่บริการและซ่อมบำรุงรถยนต์พัทยาการาจ",
        images: [
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    "ratchaburi-mill": {
        tag: "POLISHED & LEVELING",
        title: "โรงไม้ ราชบุรี",
        desc: "โครงการเคลือบปกป้องและเพิ่มความแข็งแกร่งผิวปูนให้เสมือนผลึกคริสตัลต้านแรงดึงสูง ด้วยระบบขัดเงาพื้นคอนกรีตอุตสาหกรรมร่วมกับน้ำยาชึมลึกเพิ่มความหนาแน่นผิวปูนคอนกรีต (Liquid Hardener / Polished Concrete) ป้องกันฝุ่นละอองจากคอนกรีตหลุดล่อน คลุมด้วยความทนทานต่อการขูดขีดและการเฉือนจากยางของรถตักไม้ รถยกโฟล์คลิฟต์หนักของโรงงานแปรรูปไม้อย่างมั่นคงถาวร",
        location: "โพธาราม ราชบุรี",
        system: "Crystal Polished Concrete & Liquid Hardener",
        area: "3,200 ตร.ม.",
        color: "Natural concrete surface (ผิวปูนขัดเงาธรรมชาติ)",
        client: "โรงไม้และอุตสาหกรรมไม้ราชบุรีแปรรูป",
        images: [
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80"
        ]
    }
};

// --- Mobile Navigation Menu Logic ---
const menuBurger = document.querySelector('.menu-burger');
const sideDrawer = document.querySelector('.side-drawer');
const drawerLinks = document.querySelectorAll('.drawer-link');
const drawerDropdownToggle = document.querySelector('.drawer-dropdown-toggle');
const drawerDropdownMenu = document.querySelector('.drawer-dropdown-menu');

// Toggle Drawer open/close
if (menuBurger && sideDrawer) {
    menuBurger.addEventListener('click', () => {
        sideDrawer.classList.toggle('active');
        
        // Hamburger icon to X conversion
        const spans = menuBurger.querySelectorAll('span');
        if (sideDrawer.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.transform = 'none';
        }
    });
}

// Close drawer on clicking menu links
drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideDrawer.classList.remove('active');
        document.body.classList.remove('drawer-open');
        const spans = menuBurger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.transform = 'none';
    });
});

// Mobile Drawer Dropdown Accordeon
if (drawerDropdownToggle && drawerDropdownMenu) {
    drawerDropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        drawerDropdownToggle.classList.toggle('active');
        drawerDropdownMenu.classList.toggle('active');
    });
}

// Header Dynamic Scrolling Active Styles
const header = document.querySelector('.c-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Category Filtering Logic ---
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toggle Active Button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            if (category === 'all' || cardCat === category) {
                card.style.display = 'flex';
                // Trigger smooth fade-in animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                // Hide after transition
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// --- Pop-up Modal Details & Image Slider Logic ---
const projectModal = document.getElementById('project-modal');
const modalSliderTrack = document.getElementById('modal-slider-track');
const modalSliderDots = document.getElementById('modal-slider-dots');

let currentSlideIndex = 0;
let modalImagesList = [];

// Populate Data & Open Modal
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-id');
        const project = projectData[projectId];
        
        if (!project) return;

        // Set Details Info
        document.getElementById('modal-project-tag').innerText = project.tag;
        document.getElementById('modal-project-title').innerText = project.title;
        document.getElementById('modal-project-desc').innerText = project.desc;
        document.getElementById('modal-spec-location').innerText = project.location;
        document.getElementById('modal-spec-system').innerText = project.system;
        document.getElementById('modal-spec-area').innerText = project.area;
        document.getElementById('modal-spec-color').innerText = project.color;
        document.getElementById('modal-spec-client').innerText = project.client;

        // Populate Slider Images
        modalImagesList = project.images;
        currentSlideIndex = 0;
        
        modalSliderTrack.innerHTML = '';
        modalSliderDots.innerHTML = '';

        modalImagesList.forEach((imgUrl, index) => {
            // Add image element
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = `${project.title} - ${index + 1}`;
            img.className = 'slide-img-item';
            modalSliderTrack.appendChild(img);

            // Add dot indicator
            const dot = document.createElement('div');
            dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('data-index', index);
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            modalSliderDots.appendChild(dot);
        });

        // Set track position
        updateSliderPosition();

        // Show Modal & Disable Body Scroll
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Go to specific slide
function goToSlide(index) {
    currentSlideIndex = index;
    updateSliderPosition();
}

// Move slide with prev/next buttons
function moveSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) {
        currentSlideIndex = modalImagesList.length - 1;
    } else if (currentSlideIndex >= modalImagesList.length) {
        currentSlideIndex = 0;
    }
    updateSliderPosition();
}

// Slider Position Update
function updateSliderPosition() {
    modalSliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    // Update Dots active class
    const dots = modalSliderDots.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
        if (idx === currentSlideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Close Modal
function closeModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Keyboard close support
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeModal();
    }
});
