document.addEventListener('DOMContentLoaded', () => {
    // 1. Authentication Check
    if (localStorage.getItem('daran_admin_logged_in') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // Set Username
    const currentUsername = localStorage.getItem('daran_admin_user') || 'Administrator';
    const usernameEl = document.getElementById('current-username');
    if (usernameEl) usernameEl.innerText = currentUsername;

    // Logout Handler
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('คุณต้องการออกจากระบบหลังบ้านใช่หรือไม่?')) {
                localStorage.removeItem('daran_admin_logged_in');
                localStorage.removeItem('daran_admin_user');
                window.location.href = 'login.html';
            }
        });
    }

    // 2. Sidebar Tab Navigation
    const menuItems = document.querySelectorAll('.menu-item[data-tab]');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const headerTitle = document.getElementById('header-active-title');
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('admin-sidebar');

    const tabTitles = {
        'tab-dashboard': 'ภาพรวมระบบ (Dashboard Overview)',
        'tab-leads': 'รายชื่อลูกค้าติดต่อ (Leads & Inquiries)',
        'tab-services': 'จัดการบริการ & ผลงาน (Services Management)',
        'tab-articles': 'จัดการบทความ & SEO (Articles Management)',
        'tab-settings': 'ตั้งค่าเว็บไซต์ & LINE OA (Site Settings)'
    };

    window.switchToTab = function(tabId) {
        menuItems.forEach(item => {
            if (item.getAttribute('data-tab') === tabId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        tabPanes.forEach(pane => {
            if (pane.id === tabId) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });

        if (headerTitle && tabTitles[tabId]) {
            headerTitle.innerText = tabTitles[tabId];
        }

        if (sidebar) sidebar.classList.remove('mobile-open');
    };

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = item.getAttribute('data-tab');
            switchToTab(tabId);
        });
    });

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');
        });
    }

    // 3. Lead Data Store & Fetching
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwsuPYGsKrmrKZSKdV2dvXzNCCCN5vQM3UqyNpPCdMjSpyZFxJXTBME5NIngp6dbRbUIw/exec';
    let allLeads = [];

    // Fallback sample data if fetch is restricted or sheet is newly created
    const sampleLeads = [
        {
            date: new Date().toLocaleDateString('th-TH') + ' 13:45',
            name: 'คุณสมชาย (ทดสอบ)',
            phone: '081-234-5678',
            interest: 'พื้น Epoxy Self-Leveling',
            note: 'สนใจทำพื้นโชว์รูมรถยนต์ 300 ตร.ม.'
        },
        {
            date: new Date(Date.now() - 3600000 * 2).toLocaleDateString('th-TH') + ' 11:20',
            name: 'คุณวิภา (ทดสอบ)',
            phone: '089-999-8888',
            interest: 'พื้น PU Screed ห้องเย็น',
            note: 'ต้องการประเมินหน้างานโรงงานอาหาร'
        }
    ];

    async function fetchLeads() {
        const recentTbody = document.getElementById('dashboard-recent-leads');
        const fullTbody = document.getElementById('full-leads-table');
        
        if (recentTbody) recentTbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:30px;"><i class="fa-solid fa-spinner fa-spin"></i> กำลังโหลดข้อมูลสด...</td></tr>';
        if (fullTbody) fullTbody.innerHTML = '<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:30px;"><i class="fa-solid fa-spinner fa-spin"></i> กำลังดึงข้อมูลจาก Google Sheet...</td></tr>';

        try {
            const response = await fetch(SCRIPT_URL);
            const data = await response.json();
            if (Array.isArray(data) && data.length > 0) {
                allLeads = data;
            } else {
                allLeads = sampleLeads;
            }
        } catch (err) {
            console.log('Using sample leads layout:', err);
            allLeads = sampleLeads;
        }

        updateStats();
        renderTables(allLeads);
    }

    function updateStats() {
        const statTotal = document.getElementById('stat-total-leads');
        const statNew = document.getElementById('stat-new-leads');
        const statContacted = document.getElementById('stat-contacted-leads');
        const badgeCount = document.getElementById('leads-count-badge');

        if (statTotal) statTotal.innerText = allLeads.length;
        if (statNew) statNew.innerText = allLeads.length;
        if (statContacted) statContacted.innerText = '0';
        if (badgeCount) badgeCount.innerText = allLeads.length;
    }

    function renderTables(leads) {
        const recentTbody = document.getElementById('dashboard-recent-leads');
        const fullTbody = document.getElementById('full-leads-table');

        if (leads.length === 0) {
            const emptyHtml = '<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:30px;">ยังไม่มีข้อมูลลูกค้าติดต่อเข้ามา</td></tr>';
            if (recentTbody) recentTbody.innerHTML = emptyHtml;
            if (fullTbody) fullTbody.innerHTML = emptyHtml;
            return;
        }

        // Recent 5 Leads for Dashboard
        if (recentTbody) {
            const recentHtml = leads.slice(0, 5).map(lead => `
                <tr>
                    <td><span style="font-size:12px; color:var(--text-muted);">${lead.date || '-'}</span></td>
                    <td><strong>${lead.name || 'ไม่ระบุชื่อ'}</strong></td>
                    <td><a href="tel:${lead.phone}" style="color:var(--primary); text-decoration:none;">${lead.phone || '-'}</a></td>
                    <td><span class="badge badge-new">${lead.interest || 'ทั่วไป'}</span></td>
                    <td>
                        <a href="tel:${lead.phone}" class="quick-call-btn"><i class="fa-solid fa-phone"></i> โทร</a>
                    </td>
                </tr>
            `).join('');
            recentTbody.innerHTML = recentHtml;
        }

        // Full Leads Table
        if (fullTbody) {
            const fullHtml = leads.map(lead => `
                <tr>
                    <td><span style="font-size:12px; color:var(--text-muted);">${lead.date || '-'}</span></td>
                    <td><strong>${lead.name || 'ไม่ระบุชื่อ'}</strong></td>
                    <td><a href="tel:${lead.phone}" style="color:var(--primary); font-weight:600; text-decoration:none;">${lead.phone || '-'}</a></td>
                    <td><span class="badge badge-new">${lead.interest || 'ทั่วไป'}</span></td>
                    <td><span style="font-size:13px; color:var(--text-muted);">${lead.note || '-'}</span></td>
                    <td>
                        <div style="display:flex; gap:6px;">
                            <a href="tel:${lead.phone}" class="quick-call-btn"><i class="fa-solid fa-phone"></i> โทร</a>
                            <a href="https://line.me/ti/p/@116ozhwx" target="_blank" class="quick-line-btn"><i class="fa-brands fa-line"></i> LINE</a>
                        </div>
                    </td>
                </tr>
            `).join('');
            fullTbody.innerHTML = fullHtml;
        }
    }

    // 4. Search Filter
    const searchInput = document.getElementById('lead-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = allLeads.filter(lead => 
                (lead.name && lead.name.toLowerCase().includes(query)) ||
                (lead.phone && lead.phone.includes(query)) ||
                (lead.interest && lead.interest.toLowerCase().includes(query))
            );
            renderTables(filtered);
        });
    }

    // Refresh Button
    const refreshBtn = document.getElementById('refresh-leads-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            fetchLeads();
        });
    }

    // Export CSV
    const exportBtn = document.getElementById('export-csv-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            if (allLeads.length === 0) {
                alert('ไม่มีข้อมูลสำหรับส่งออก');
                return;
            }
            let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
            csvContent += "วันที่/เวลา,ชื่อผู้ติดต่อ,เบอร์โทรศัพท์,บริการที่สนใจ,หมายเหตุ\n";
            allLeads.forEach(lead => {
                csvContent += `"${lead.date}","${lead.name}","${lead.phone}","${lead.interest}","${lead.note}"\n`;
            });
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `daran_leads_${new Date().toISOString().slice(0,10)}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Initial Fetch
    fetchLeads();
});
