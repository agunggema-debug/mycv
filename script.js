/* ═══════════════════════════════════════════════
   CV LANDING PAGE — SCRIPT.JS
════════════════════════════════════════════════ */

"use strict";

/* ═══════════════════════════════════════════════
   TRANSLATIONS — 3 LANGUAGES
════════════════════════════════════════════════ */
const translations = {
  en: {
    site_title: "Agung Gema — Staff IT",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_certifications: "Certifications",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_hire: "Hire Me",
    hero_available: "Available for Work",
    hero_title1: 'Hi, I\'m <span class="highlight">Agung</span>',
    hero_title2: "Gema",
    hero_desc:
      "I deliver <strong>reliable IT solutions</strong> — from system integration & infrastructure management to industrial automation. Passionate about optimizing operations, troubleshooting complex systems, and keeping businesses running smoothly.",
    hero_view_work: '<i class="fas fa-rocket"></i> View My Work',
    hero_get_in_touch: '<i class="fas fa-paper-plane"></i> Get In Touch',
    hero_years_exp: "Years Exp.",
    hero_projects_done: "Projects Done",
    hero_scroll: "Scroll Down",
    badge_server: "Server",
    badge_network: "Network",
    badge_systems: "Systems",
    about_tag: "Who I Am",
    about_title: 'About <span class="highlight">Me</span>',
    about_years_exp: "Years of<br />Experience",
    about_subtitle: 'Turning <span class="highlight">Technology</span> Into Operational Excellence',
    about_p1:
      "I'm a dedicated <strong>IT Staff — IT Specialist & System Integrator</strong> based in Indonesia, with over 15 years of experience in IT infrastructure, system integration, and industrial automation. I specialize in building reliable systems that keep businesses running efficiently.",
    about_p2:
      "My journey started with a deep curiosity for how systems work, and it has evolved into a career where I blend <strong>technical expertise</strong> with <strong>practical problem-solving</strong> to deliver robust IT solutions across industries.",
    about_location_label: "Location",
    about_email_label: "Email",
    about_education_label: "Education",
    about_company_label: "Company",
    about_download_cv: '<i class="fas fa-download"></i> Download CV',
    skills_tag: "What I Know",
    skills_title: 'Technical <span class="highlight">Skills</span>',
    skills_tab_tech: "Software & Development",
    skills_tab_tools: "IT Infrastructure",
    skills_tab_soft: "Design & Support",
    skill_server_maintenance: "Server Maintenance",
    skill_backup_data: "Backup Data",
    skill_digital_scale: "Timbangan Digital",
    skill_printing_machine: "Mesin Printing / Dyeing",
    skill_calibration: "Kalibrasi Perangkat",
    skill_windows_install: "Windows Installation",
    skill_troubleshooting: "Troubleshooting PC",
    soft_design_title: "Design & Multimedia",
    soft_design_desc: "Skilled in CorelDraw, Photoshop, Canva for visual design, and Filmora for video editing.",
    soft_support_title: "Technical Support",
    soft_support_desc: "Expert in troubleshooting PC/Laptop, maintaining printers (Inkjet, Dot Matrix, Thermal), and resolving hardware issues.",
    soft_doc_title: "Documentation",
    soft_doc_desc: "Create clear technical documentation, SOPs, Software license management documentation and training materials for end-users and team members.",
    soft_training_title: "Training & Mentoring",
    soft_training_desc: "Conduct training sessions for staff on system usage, best practices, and IT procedures.",
    exp_tag: "My Journey",
    exp_title: 'Work <span class="highlight">Experience & Education</span>',
    exp_job_title: "IT Staff — IT Specialist & System Integrator",
    exp_job_desc:
      "Managing IT infrastructure, system integration for industrial automation (timbangan digital, mesin printing/dyeing), network administration (MikroTik, LAN/WLAN), CCTV monitoring, technical support, and web development across the organization.",
    exp_edu_title: "D1 Komputer Manajemen Informatika",
    exp_edu_desc: "Graduated with GPA 3.41/4.00. Studied computer science fundamentals, database management, networking, and programming. Built a solid foundation in IT systems and software development.",
    cert_tag: "Learning & Development",
    cert_title: 'Certifications & <span class="highlight">Training</span>',
    cert_formal_edu: "Formal Education",
    cert_non_formal: "Non-Formal Education & Certifications",
    cert_ai_ethics: "AI Ethics",
    cert_gen_ai: "Introduction to Generative AI",
    cert_ai_fundamentals: "Artificial Intelligence Fundamentals",
    cert_junior_mobile: "Junior Mobile Programmer",
    cert_azure_ai: "Mengembangkan Aplikasi AI Generative di Azure",
    projects_tag: "My Work",
    projects_title: 'Featured <span class="highlight">Projects</span>',
    project_badge_featured: "Featured",
    project_badge_pinned: "Pinned",
    project1_title: "Industrial System Integration",
    project1_desc: "Integrated digital weighing scales (timbangan digital) with production management system. Configured printing/dyeing machines (CADS, SPD) for automated data capture and reporting.",
    project2_title: "Network Infrastructure Setup",
    project2_desc: "Designed and deployed LAN/WLAN infrastructure with MikroTik routers. Configured VPN, firewall rules, and bandwidth management for 100+ users.",
    project3_title: "CCTV Monitoring System",
    project3_desc: "Installed and configured CCTV systems with DVR monitoring across multiple factory locations. Set up remote access for real-time surveillance.",
    project4_title: "Company Portal (WordPress)",
    project4_desc: "Developed and maintained company internal portal using WordPress with custom themes, employee directory, and document management features.",
    project5_desc: "Dashboard real-time untuk pemeliharaan aset Hardware & Software, Jaringan (Networking), dan sistem pengawasan CCTV.",
    project6_title: "Dashboard Akuntansi Garmen",
    project6_desc: "Dashboard analitik berbasis web yang dirancang khusus untuk manajemen industri garmen.",
    project7_title: "Agri Dashboard",
    project7_desc: "Solusi web modern untuk memantau inventaris dan distribusi produk di sektor Pertanian, Peternakan, Akuakultur, dan Perawatan Hewan.",
    project8_title: "Toko Kains — AI Rekomendasi",
    project8_desc: "Aplikasi rekomendasi kain personal untuk toko kain memanfaatkan AI dalam meningkatkan pengalaman pelanggan.",
    project9_title: "TikTok Shop Dashboard",
    project9_desc: "TikTok Shop Analytics Dashboard for tracking sales and performance.",
    project10_title: "Fainaya Motor — ERP Bengkel",
    project10_desc: "ERP sederhana untuk bengkel motor.",
    contact_tag: "Let's Talk",
    contact_title: 'Get In <span class="highlight">Touch</span>',
    contact_subtitle: 'Let\'s Build Something <span class="highlight">Amazing</span> Together',
    contact_desc: "I'm currently open to new opportunities. Whether you need IT infrastructure support, system integration, or just want to say hi — my inbox is always open!",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    contact_location_label: "Location",
    form_name_label: "Full Name",
    form_name_placeholder: "John Doe",
    form_email_label: "Email Address",
    form_email_placeholder: "john@example.com",
    form_subject_label: "Subject",
    form_subject_placeholder: "Project Inquiry",
    form_message_label: "Message",
    form_message_placeholder: "Tell me about your project...",
    form_send: '<i class="fas fa-paper-plane"></i> Send Message',
    form_success: "Message sent successfully! I'll get back to you soon.",
    footer_crafted: 'Crafted with <span class="heart">♥</span> by Agung Gema',
    footer_copy: "© 2026 All rights reserved.",
  },
  id: {
    site_title: "Agung Gema — Staf IT",
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_experience: "Pengalaman",
    nav_certifications: "Sertifikat",
    nav_projects: "Proyek",
    nav_contact: "Kontak",
    nav_hire: "Hubungi Saya",
    hero_available: "Tersedia untuk Bekerja",
    hero_title1: 'Halo, Saya <span class="highlight">Agung</span>',
    hero_title2: "Gema",
    hero_desc:
      "Saya memberikan <strong>solusi IT yang andal</strong> — mulai dari integrasi sistem & manajemen infrastruktur hingga otomatisasi industri. Bersemangat dalam mengoptimalkan operasi, memecahkan masalah sistem yang kompleks, dan menjaga bisnis berjalan lancar.",
    hero_view_work: '<i class="fas fa-rocket"></i> Lihat Proyek Saya',
    hero_get_in_touch: '<i class="fas fa-paper-plane"></i> Hubungi Saya',
    hero_years_exp: "Tahun Pengalaman",
    hero_projects_done: "Proyek Selesai",
    hero_scroll: "Gulir ke Bawah",
    badge_server: "Server",
    badge_network: "Jaringan",
    badge_systems: "Sistem",
    about_tag: "Tentang Saya",
    about_title: 'Tentang <span class="highlight">Saya</span>',
    about_years_exp: "Tahun<br />Pengalaman",
    about_subtitle: 'Mengubah <span class="highlight">Teknologi</span> Menjadi Keunggulan Operasional',
    about_p1:
      "Saya seorang <strong>Staf IT — Spesialis IT & Integrator Sistem</strong> yang berbasis di Indonesia, dengan lebih dari 15 tahun pengalaman di bidang infrastruktur IT, integrasi sistem, dan otomatisasi industri. Saya berspesialisasi dalam membangun sistem yang andal agar bisnis berjalan efisien.",
    about_p2:
      "Perjalanan saya dimulai dengan rasa ingin tahu yang mendalam tentang cara kerja sistem, dan berkembang menjadi karier di mana saya memadukan <strong>keahlian teknis</strong> dengan <strong>pemecahan masalah praktis</strong> untuk memberikan solusi IT yang tangguh di berbagai industri.",
    about_location_label: "Lokasi",
    about_email_label: "Email",
    about_education_label: "Pendidikan",
    about_company_label: "Perusahaan",
    about_download_cv: '<i class="fas fa-download"></i> Unduh CV',
    skills_tag: "Yang Saya Kuasai",
    skills_title: 'Keahlian <span class="highlight">Teknis</span>',
    skills_tab_tech: "Software & Pengembangan",
    skills_tab_tools: "Infrastruktur IT",
    skills_tab_soft: "Desain & Dukungan",
    skill_server_maintenance: "Perawatan Server",
    skill_backup_data: "Cadangan Data",
    skill_digital_scale: "Timbangan Digital",
    skill_printing_machine: "Mesin Printing / Dyeing",
    skill_calibration: "Kalibrasi Perangkat",
    skill_windows_install: "Instalasi Windows",
    skill_troubleshooting: "Perbaikan PC",
    soft_design_title: "Desain & Multimedia",
    soft_design_desc: "Terampil dalam CorelDraw, Photoshop, Canva untuk desain visual, dan Filmora untuk editing video.",
    soft_support_title: "Dukungan Teknis",
    soft_support_desc: "Ahli dalam memperbaiki PC/Laptop, merawat printer (Inkjet, Dot Matrix, Thermal), dan menyelesaikan masalah perangkat keras.",
    soft_doc_title: "Dokumentasi",
    soft_doc_desc: "Membuat dokumentasi teknis, SOP, dokumentasi manajemen lisensi perangkat lunak, dan materi pelatihan untuk pengguna akhir dan anggota tim.",
    soft_training_title: "Pelatihan & Mentoring",
    soft_training_desc: "Melakukan sesi pelatihan untuk staf tentang penggunaan sistem, praktik terbaik, dan prosedur IT.",
    exp_tag: "Perjalanan Saya",
    exp_title: 'Pengalaman Kerja <span class="highlight">& Pendidikan</span>',
    exp_job_title: "Staf IT — Spesialis IT & Integrator Sistem",
    exp_job_desc:
      "Mengelola infrastruktur IT, integrasi sistem untuk otomatisasi industri (timbangan digital, mesin printing/dyeing), administrasi jaringan (MikroTik, LAN/WLAN), pemantauan CCTV, dukungan teknis, dan pengembangan web di seluruh organisasi.",
    exp_edu_title: "D1 Komputer Manajemen Informatika",
    exp_edu_desc: "Lulus dengan IPK 3.41/4.00. Mempelajari dasar-dasar ilmu komputer, manajemen basis data, jaringan, dan pemrograman. Membangun fondasi yang kokoh dalam sistem IT dan pengembangan perangkat lunak.",
    cert_tag: "Pembelajaran & Pengembangan",
    cert_title: 'Sertifikasi & <span class="highlight">Pelatihan</span>',
    cert_formal_edu: "Pendidikan Formal",
    cert_non_formal: "Pendidikan Non-Formal & Sertifikasi",
    cert_ai_ethics: "Etika AI",
    cert_gen_ai: "Pengantar AI Generatif",
    cert_ai_fundamentals: "Dasar-Dasar Kecerdasan Buatan",
    cert_junior_mobile: "Programmer Mobile Junior",
    cert_azure_ai: "Mengembangkan Aplikasi AI Generatif di Azure",
    projects_tag: "Proyek Saya",
    projects_title: 'Proyek <span class="highlight">Unggulan</span>',
    project_badge_featured: "Unggulan",
    project_badge_pinned: "Disematkan",
    project1_title: "Integrasi Sistem Industri",
    project1_desc: "Mengintegrasikan timbangan digital dengan sistem manajemen produksi. Mengonfigurasi mesin printing/dyeing (CADS, SPD) untuk pengambilan data dan pelaporan otomatis.",
    project2_title: "Pemasangan Infrastruktur Jaringan",
    project2_desc: "Merancang dan menerapkan infrastruktur LAN/WLAN dengan router MikroTik. Mengonfigurasi VPN, aturan firewall, dan manajemen bandwidth untuk 100+ pengguna.",
    project3_title: "Sistem Pemantauan CCTV",
    project3_desc: "Memasang dan mengonfigurasi sistem CCTV dengan pemantauan DVR di berbagai lokasi pabrik. Menyiapkan akses jarak jauh untuk pengawasan real-time.",
    project4_title: "Portal Perusahaan (WordPress)",
    project4_desc: "Mengembangkan dan memelihara portal internal perusahaan menggunakan WordPress dengan tema khusus, direktori karyawan, dan fitur manajemen dokumen.",
    project5_desc: "Dasbor real-time untuk pemeliharaan aset Hardware & Software, Jaringan, dan sistem pengawasan CCTV.",
    project6_title: "Dashboard Akuntansi Garmen",
    project6_desc: "Dasbor analitik berbasis web yang dirancang khusus untuk manajemen industri garmen.",
    project7_title: "Agri Dashboard",
    project7_desc: "Solusi web modern untuk memantau inventaris dan distribusi produk di sektor Pertanian, Peternakan, Akuakultur, dan Perawatan Hewan.",
    project8_title: "Toko Kains — Rekomendasi AI",
    project8_desc: "Aplikasi rekomendasi kain personal untuk toko kain memanfaatkan AI dalam meningkatkan pengalaman pelanggan.",
    project9_title: "Dasbor TikTok Shop",
    project9_desc: "Dasbor Analitik TikTok Shop untuk melacak penjualan dan kinerja.",
    project10_title: "Fainaya Motor — ERP Bengkel",
    project10_desc: "ERP sederhana untuk bengkel motor.",
    contact_tag: "Mari Bicara",
    contact_title: 'Hubungi <span class="highlight">Saya</span>',
    contact_subtitle: 'Mari Bangun Sesuatu yang <span class="highlight">Luar Biasa</span> Bersama',
    contact_desc: "Saat ini saya terbuka untuk peluang baru. Baik Anda membutuhkan dukungan infrastruktur IT, integrasi sistem, atau sekadar ingin menyapa — kotak masuk saya selalu terbuka!",
    contact_email_label: "Email",
    contact_phone_label: "Telepon",
    contact_location_label: "Lokasi",
    form_name_label: "Nama Lengkap",
    form_name_placeholder: "John Doe",
    form_email_label: "Alamat Email",
    form_email_placeholder: "john@example.com",
    form_subject_label: "Subjek",
    form_subject_placeholder: "Pertanyaan Proyek",
    form_message_label: "Pesan",
    form_message_placeholder: "Ceritakan tentang proyek Anda...",
    form_send: '<i class="fas fa-paper-plane"></i> Kirim Pesan',
    form_success: "Pesan berhasil dikirim! Saya akan menghubungi Anda segera.",
    footer_crafted: 'Dibuat dengan <span class="heart">♥</span> oleh Agung Gema',
    footer_copy: "© 2026 Hak cipta dilindungi.",
  },
  zh: {
    site_title: "Agung Gema — IT 專員",
    nav_about: "關於",
    nav_skills: "技能",
    nav_experience: "經歷",
    nav_certifications: "認證",
    nav_projects: "專案",
    nav_contact: "聯絡",
    nav_hire: "聘請我",
    hero_available: "可接案",
    hero_title1: '你好，我是 <span class="highlight">Agung</span>',
    hero_title2: "Gema",
    hero_desc: "我提供<strong>可靠的IT解決方案</strong> — 從系統整合與基礎設施管理到工業自動化。熱衷於優化營運、排除複雜系統故障，確保企業順暢運作。",
    hero_view_work: '<i class="fas fa-rocket"></i> 查看我的作品',
    hero_get_in_touch: '<i class="fas fa-paper-plane"></i> 取得聯繫',
    hero_years_exp: "年經驗",
    hero_projects_done: "已完成專案",
    hero_scroll: "向下捲動",
    badge_server: "伺服器",
    badge_network: "網路",
    badge_systems: "系統",
    about_tag: "關於我",
    about_title: '關於<span class="highlight">我</span>',
    about_years_exp: "年<br />經驗",
    about_subtitle: '將<span class="highlight">科技</span>轉化為營運卓越',
    about_p1: "我是一位專注的<strong>IT專員 — IT專家與系統整合師</strong>，來自印尼，在IT基礎設施、系統整合和工業自動化方面擁有超過15年的經驗。我專注於建構可靠的系統，讓企業高效運作。",
    about_p2: "我的旅程始於對系統運作方式的濃厚好奇心，並已發展成為一個將<strong>技術專業</strong>與<strong>實務問題解決</strong>相結合的職業生涯，為各行各業提供強健的IT解決方案。",
    about_location_label: "位置",
    about_email_label: "電子郵件",
    about_education_label: "教育",
    about_company_label: "公司",
    about_download_cv: '<i class="fas fa-download"></i> 下載履歷',
    skills_tag: "我的專長",
    skills_title: '技術<span class="highlight">技能</span>',
    skills_tab_tech: "軟體與開發",
    skills_tab_tools: "IT基礎設施",
    skills_tab_soft: "設計與支援",
    skill_server_maintenance: "伺服器維護",
    skill_backup_data: "資料備份",
    skill_digital_scale: "數位秤",
    skill_printing_machine: "印刷/染色機",
    skill_calibration: "設備校正",
    skill_windows_install: "Windows安裝",
    skill_troubleshooting: "電腦維修",
    soft_design_title: "設計與多媒體",
    soft_design_desc: "熟練使用CorelDraw、Photoshop、Canva進行視覺設計，以及Filmora進行影片編輯。",
    soft_support_title: "技術支援",
    soft_support_desc: "擅長維修PC/筆電、維護印表機（噴墨、點陣、熱感應）以及解決硬體問題。",
    soft_doc_title: "文件撰寫",
    soft_doc_desc: "為終端用戶和團隊成員建立清晰的技術文件、標準作業程序、軟體許可證管理文件和培訓教材。",
    soft_training_title: "培訓與指導",
    soft_training_desc: "為員工舉辦系統使用、最佳實踐和IT程序的培訓課程。",
    exp_tag: "我的歷程",
    exp_title: '工作<span class="highlight">經歷與教育</span>',
    exp_job_title: "IT專員 — IT專家與系統整合師",
    exp_job_desc: "管理IT基礎設施、工業自動化系統整合（數位秤、印刷/染色機）、網路管理（MikroTik、LAN/WLAN）、CCTV監控、技術支援以及全組織的網站開發。",
    exp_edu_title: "電腦管理資訊學D1",
    exp_edu_desc: "以GPA 3.41/4.00畢業。學習電腦科學基礎、資料庫管理、網路和程式設計。為IT系統和軟體開發奠定了堅實的基礎。",
    cert_tag: "學習與發展",
    cert_title: '認證與<span class="highlight">培訓</span>',
    cert_formal_edu: "正規教育",
    cert_non_formal: "非正規教育與認證",
    cert_ai_ethics: "AI倫理",
    cert_gen_ai: "生成式AI導論",
    cert_ai_fundamentals: "人工智慧基礎",
    cert_junior_mobile: "初級行動應用程式開發者",
    cert_azure_ai: "在Azure開發生成式AI應用",
    projects_tag: "我的作品",
    projects_title: '精選<span class="highlight">專案</span>',
    project_badge_featured: "精選",
    project_badge_pinned: "置頂",
    project1_title: "工業系統整合",
    project1_desc: "將數位秤與生產管理系統整合。配置印刷/染色機（CADS、SPD）以實現自動資料擷取和報表。",
    project2_title: "網路基礎設施建置",
    project2_desc: "使用MikroTik路由器設計和部署LAN/WLAN基礎設施。為100+用戶配置VPN、防火牆規則和頻寬管理。",
    project3_title: "CCTV監控系統",
    project3_desc: "在多個工廠地點安裝和配置具有DVR監控功能的CCTV系統。設定遠端存取以進行即時監控。",
    project4_title: "公司入口網站（WordPress）",
    project4_desc: "使用WordPress開發和維護公司內部入口網站，包含自訂主題、員工目錄和文件管理功能。",
    project5_desc: "即時儀表板，用於維護硬體與軟體資產、網路和CCTV監控系統。",
    project6_title: "成衣會計儀表板",
    project6_desc: "專為成衣行業管理設計的基於網路的分析儀表板。",
    project7_title: "農業儀表板",
    project7_desc: "現代網路解決方案，用於監控農業、畜牧業、水產養殖和動物照護領域的庫存和產品分銷。",
    project8_title: "布料商店 — AI推薦",
    project8_desc: "為布料商店提供的個人化AI推薦應用，利用AI提升客戶體驗。",
    project9_title: "TikTok商店儀表板",
    project9_desc: "用於追蹤銷售和績效的TikTok商店分析儀表板。",
    project10_title: "Fainaya Motor — 維修廠ERP",
    project10_desc: "簡單的機車維修廠ERP系統。",
    contact_tag: "讓我們聊聊",
    contact_title: '取得<span class="highlight">聯絡</span>',
    contact_subtitle: '讓我們一起打造<span class="highlight">卓越</span>的成果',
    contact_desc: "我目前正在尋找新的機會。無論您需要IT基礎設施支援、系統整合，或只是想打聲招呼 — 我的信箱永遠為您敞開！",
    contact_email_label: "電子郵件",
    contact_phone_label: "電話",
    contact_location_label: "位置",
    form_name_label: "姓名",
    form_name_placeholder: "王大明",
    form_email_label: "電子郵件地址",
    form_email_placeholder: "john@example.com",
    form_subject_label: "主旨",
    form_subject_placeholder: "專案諮詢",
    form_message_label: "訊息",
    form_message_placeholder: "告訴我有關您的專案...",
    form_send: '<i class="fas fa-paper-plane"></i> 發送訊息',
    form_success: "訊息發送成功！我會盡快回覆您。",
    footer_crafted: '由 Agung Gema 用 <span class="heart">♥</span> 精心製作',
    footer_copy: "© 2026 版權所有。",
  },
};

/* ═══════════════════════════════════════════════
   LANGUAGE SWITCHER
════════════════════════════════════════════════ */
let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // Translate all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang]?.[key];
    if (translation) {
      el.innerHTML = translation;
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const translation = translations[lang]?.[key];
    if (translation) {
      el.setAttribute("placeholder", translation.replace(/<[^>]*>/g, ""));
    }
  });

  // Update active button state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.documentElement.lang = lang === "zh" ? "zh-TW" : lang;
}

function initLanguageSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Apply saved language on load
  setLanguage(currentLang);
}

/* ═══════════════════════════════════════════════
   DOM READY
════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initCursorGlow();
  initNavbar();
  initHamburger();
  initTypewriter();
  initRevealOnScroll();
  initSkillBars();
  initCounterStats();
  initSkillTabs();
  initTestimonialSlider();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
  initActiveNavLink();
});

/* ═══════════════════════════════════════════════
   1. CURSOR GLOW
════════════════════════════════════════════════ */
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;

  let mouseX = 0,
    mouseY = 0;
  let glowX = 0,
    glowY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

/* ═══════════════════════════════════════════════
   2. NAVBAR — SCROLL EFFECT
════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ═══════════════════════════════════════════════
   3. HAMBURGER MENU
════════════════════════════════════════════════ */
function initHamburger() {
  const btn = document.getElementById("hamburger");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
    // Animate hamburger → X
    const spans = btn.querySelectorAll("span");
    if (isOpen) {
      spans[0].style.transform = "translateY(7px) rotate(45deg)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "translateY(-7px) rotate(-45deg)";
    } else {
      spans.forEach((s) => {
        s.style.transform = "";
        s.style.opacity = "";
      });
    }
  });

  // Close on link click
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.querySelectorAll("span").forEach((s) => {
        s.style.transform = "";
        s.style.opacity = "";
      });
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.querySelectorAll("span").forEach((s) => {
        s.style.transform = "";
        s.style.opacity = "";
      });
    }
  });
}

/* ═══════════════════════════════════════════════
   4. TYPEWRITER EFFECT
════════════════════════════════════════════════ */
function initTypewriter() {
  const el = document.getElementById("roleText");
  if (!el) return;

  const cursor = el.nextElementSibling;
  const roles = ["IT Specialist", "Web Developer", "System Integrator", "Infrastructure", "Industrial Automation", "Technical Support", "Designer&Video Editor"];
  const colors = ["var(--primary)", "var(--accent2)", "var(--accent)", "#38F9D7", "#FACC15", "#0EA5E9", "#F472B6"];

  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function type() {
    const current = roles[roleIdx];
    const currentColor = colors[roleIdx];
    const glowEffect = `0 0 15px ${currentColor}, 0 0 5px ${currentColor}`;

    el.style.color = currentColor;
    el.style.textShadow = glowEffect;
    if (cursor) {
      cursor.style.color = currentColor;
      cursor.style.textShadow = glowEffect;
    }

    let speed = deleting ? 50 : 100;

    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;

      // Jika sudah selesai mengetik satu kata
      if (charIdx === current.length) {
        speed = 2000; // Jeda saat kata lengkap
        deleting = true;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;

      // Jika sudah selesai menghapus
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 500; // Jeda sebelum mulai mengetik kata baru
      }
    }

    // Tambahkan sedikit variasi kecepatan agar lebih natural
    const randomSpeed = speed + (deleting ? 0 : Math.random() * 50);
    setTimeout(type, randomSpeed);
  }

  setTimeout(type, 800);
}

/* ═══════════════════════════════════════════════
   5. REVEAL ON SCROLL (Intersection Observer)
════════════════════════════════════════════════ */
function initRevealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay for sibling cards
          const siblings = entry.target.parentElement.querySelectorAll(".reveal");
          let delay = 0;
          siblings.forEach((sib, idx) => {
            if (sib === entry.target) delay = idx * 80;
          });
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  items.forEach((item) => observer.observe(item));
}

/* ═══════════════════════════════════════════════
   6. SKILL BARS ANIMATION
════════════════════════════════════════════════ */
function initSkillBars() {
  const fills = document.querySelectorAll(".skill-fill");
  if (!fills.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.getAttribute("data-width") || "0";
          // Small delay so the card reveal animation finishes first
          setTimeout(() => {
            fill.style.width = width + "%";
          }, 300);
          observer.unobserve(fill);
        }
      });
    },
    { threshold: 0.3 },
  );

  fills.forEach((fill) => observer.observe(fill));
}

/* ═══════════════════════════════════════════════
   7. COUNTER STATS ANIMATION
════════════════════════════════════════════════ */
function initCounterStats() {
  const counters = document.querySelectorAll(".stat-num");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((c) => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-target"), 10);
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

/* ═══════════════════════════════════════════════
   8. SKILL TABS
════════════════════════════════════════════════ */
function initSkillTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");

      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById("tab-" + tab);
      if (target) {
        target.classList.add("active");
        // Re-trigger reveal for newly shown items
        target.querySelectorAll(".reveal:not(.visible)").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 80);
        });
        // Re-trigger skill bars in the newly shown tab
        target.querySelectorAll(".skill-fill").forEach((fill) => {
          const width = fill.getAttribute("data-width") || "0";
          fill.style.width = "0";
          setTimeout(() => {
            fill.style.width = width + "%";
          }, 100);
        });
      }
    });
  });
}

/* ═══════════════════════════════════════════════
   9. TESTIMONIAL SLIDER
════════════════════════════════════════════════ */
function initTestimonialSlider() {
  const track = document.getElementById("testimonialTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsWrap = document.getElementById("sliderDots");
  if (!track) return;

  const cards = track.querySelectorAll(".testimonial-card");
  const total = cards.length;
  let current = 0;
  let autoTimer = null;

  // Build dots
  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function getVisibleCount() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function goTo(idx) {
    current = (idx + total) % total;
    const visible = getVisibleCount();
    const cardW = cards[0].offsetWidth + 24; // gap = 24px
    const maxSlide = Math.max(0, total - visible);
    const slide = Math.min(current, maxSlide);
    track.style.transform = `translateX(-${slide * cardW}px)`;

    dotsWrap.querySelectorAll(".slider-dot").forEach((d, i) => {
      d.classList.toggle("active", i === current);
    });
  }

  function next() {
    goTo(current + 1);
  }
  function prev() {
    goTo(current - 1);
  }

  nextBtn &&
    nextBtn.addEventListener("click", () => {
      next();
      resetAuto();
    });
  prevBtn &&
    prevBtn.addEventListener("click", () => {
      prev();
      resetAuto();
    });

  function startAuto() {
    autoTimer = setInterval(next, 4500);
  }
  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  // Touch / swipe support
  let touchStartX = 0;
  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );
  track.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
      resetAuto();
    }
  });

  window.addEventListener("resize", () => goTo(current));
  startAuto();
}

/* ═══════════════════════════════════════════════
   10. CONTACT FORM
════════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    // Loading state
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    // Simulate async send (replace with real fetch/EmailJS/etc.)
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      form.reset();
      if (success) {
        success.classList.add("show");
        setTimeout(() => success.classList.remove("show"), 5000);
      }
    }, 1800);
  });

  // Floating label effect
  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("focused");
    });
  });
}

/* ═══════════════════════════════════════════════
   11. BACK TO TOP
════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true },
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ═══════════════════════════════════════════════
   12. SMOOTH SCROLL (for older browsers)
════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ═══════════════════════════════════════════════
   13. ACTIVE NAV LINK ON SCROLL
════════════════════════════════════════════════ */
function initActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((s) => observer.observe(s));
}

/* ═══════════════════════════════════════════════
   14. PARTICLE SPARKLE ON HERO (subtle)
════════════════════════════════════════════════ */
(function initParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  function createParticle() {
    const p = document.createElement("div");
    p.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      border-radius: 50%;
      background: rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1});
      left: ${Math.random() * 100}%;
      top: -20px;
      pointer-events: none;
      z-index: 0;
      filter: blur(1px);
      animation: snowFall ${Math.random() * 10 + 10}s linear infinite;
      animation-delay: -${Math.random() * 20}s;
    `;
    hero.appendChild(p);
  }

  // Inject keyframes
  const style = document.createElement("style");
  style.textContent = `
    @keyframes snowFall {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(110vh) translateX(40px); opacity: 0; }
    }
    .nav-links a.active { color: #fff !important; }
    .nav-links a.active::after { width: 100% !important; }
  `;
  document.head.appendChild(style);

  for (let i = 0; i < 60; i++) createParticle();
})();
