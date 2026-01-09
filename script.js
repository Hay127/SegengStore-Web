// Data untuk website Segeng Cloud
const websiteData = {
    // Data paket hosting
    plans: [
        {
            id: 1,
            name: "Paket Basic Plus",
            category: "budget",
            description: "Cocok untuk server kecil dengan teman",
            price: "Rp 10K",
            popular: false,
            icon: "fas fa-seedling",
            features: [
                "2 GB RAM DDR4",
                "100% vCPU",
                "20 GB SSD NVMe",
                "5 Slot Pemain",
                "Panel Pterodactyl",
                "Instalasi 3 Klik",
                "Backup Harian"
            ],
            unavailable: ["DDoS Protection"]
        },
        {
            id: 2,
            name: "Paket Special",
            category: "budget",
            description: "Untuk server kecil dengan beberapa mod",
            price: "Rp 20K",
            popular: false,
            icon: "fas fa-leaf",
            features: [
                "4 GB RAM DDR4",
                "120% vCPU",
                "30 GB SSD NVMe",
                "10 Slot Pemain",
                "Panel Pterodactyl",
                "DDoS Protection Dasar",
                "Backup Harian"
            ],
            unavailable: ["Support Priority"]
        },
        {
            id: 3,
            name: "Paket Subsidi",
            category: "standard",
            description: "Solusi optimal untuk server circle",
            price: "Rp 35K",
            popular: true,
            icon: "fas fa-rocket",
            features: [
                "8 GB RAM DDR4",
                "180% vCPU",
                "40 GB SSD NVMe",
                "15 Slot Pemain",
                "Panel Pterodactyl",
                "DDoS Protection Dasar",
                "Backup Harian",
                "Support Priority"
            ],
            unavailable: []
        },
        {
            id: 4,
            name: "Paket Anomali",
            category: "standard",
            description: "Untuk server dengan banyak plugin & mod",
            price: "Rp 80K",
            popular: true,
            icon: "fas fa-bolt",
            features: [
                "16 GB RAM DDR4",
                "300% vCPU",
                "120 GB SSD NVMe",
                "30 Slot Pemain",
                "Panel Pterodactyl",
                "DDoS Protection Premium",
                "Backup Harian",
                "Support Priority"
            ],
            unavailable: []
        },
        {
            id: 5,
            name: "Paket Super",
            category: "premium",
            description: "Server performa tinggi untuk komunitas kecil",
            price: "Rp 35K",
            popular: false,
            icon: "fas fa-crown",
            features: [
                "4 GB RAM DDR4",
                "180% vCPU",
                "30 GB SSD NVMe",
                "10 Slot Pemain",
                "Panel Pterodactyl",
                "DDoS Protection Premium",
                "Backup Harian",
                "Support High Priority"
            ],
            unavailable: []
        },
        {
            id: 6,
            name: "Paket Antimainstream",
            category: "premium",
            description: "Server terbaik dengan enviroment yang mantap",
            price: "Rp 60K",
            popular: true,
            icon: "fas fa-gem",
            features: [
                "8 GB RAM DDR4",
                "200% vCPU",
                "50 GB SSD NVMe",
                "20 Slot Pemain",
                "Panel Pterodactyl",
                "DDoS Protection Premium",
                "Backup Harian",
                "Support High Priority"
            ],
            unavailable: []
        },
        {
            id: 7,
            name: "Paket Ultra",
            category: "premium",
            description: "Solusi hosting khusus untuk kebutuhan komunitas menengah",
            price: "Rp 120K",
            popular: true,
            icon: "fas fa-server",
            features: [
                "16 GB RAM DDR4",
                "350% Core vCPU",
                "150 GB SSD NVMe",
                "40 Slot Pemain",
                "Panel Pterodactyl",
                "DDoS Protection Premium",
                "Backup Harian",
                "24/7 Dedicated Support"
            ],
            unavailable: []
        },
        {
            id: 8,
            name: "Paket G",
            category: "premium",
            description: "Solusi hosting untuk komunitas besar",
            price: "Rp 150K",
            popular: false,
            icon: "fas fa-infinity",
            features: [
                "32 GB RAM DDR4",
                "700% vCPU",
                "200 GB SSD NVMe",
                "50 Slot Pemain",
                "Panel Pterodactyl",
                "DDoS Protection Premium",
                "Backup Harian",
                "24/7 Dedicated Support"
            ],
            unavailable: []
        }
    ],
    
    // Data fitur
    features: [
        {
            title: "Performa Tinggi",
            description: "Server dengan prosesor AMD EPYC/Intel Xeon, RAM DDR4, dan SSD NVMe untuk performa maksimal tanpa lag.",
            icon: "fas fa-tachometer-alt"
        },
        {
            title: "Keamanan Terbaik",
            description: "DDoS protection premium dengan mitigasi otomatis dan firewall canggih untuk melindungi server Anda.",
            icon: "fas fa-shield-alt"
        },
        {
            title: "Uptime 99.9%",
            description: "Jaminan uptime 99.9% dengan jaringan berkecepatan tinggi dan sistem redundansi di berbagai lokasi.",
            icon: "fas fa-sync-alt"
        },
        {
            title: "Dukungan 24/7",
            description: "Tim support ahli siap membantu Anda kapan saja melalui email, ticket, dan Discord dengan response time < 15 menit.",
            icon: "fas fa-headset"
        },
        {
            title: "Mod & Plugin Support",
            description: "Dukung ratusan mod dan plugin populer seperti Spigot, Bukkit, Forge, Fabric dengan instalasi satu klik.",
            icon: "fas fa-plug"
        },
        {
            title: "Backup Otomatis",
            description: "Backup harian, mingguan, atau real-time dengan retensi hingga 30 hari. Restore data dengan satu klik.",
            icon: "fas fa-cloud-upload-alt"
        }
    ],
    
    // Data perbandingan
    comparison: [
        { 
            feature: "RAM", 
            "Basic Plus": "2 GB", 
            "Special": "4 GB", 
            "Subsidi": "8 GB", 
            "Super": "4 GB", 
            "Anomali": "16 GB",
            "Antimainstream": "8 GB",
            "Ultra": "16 GB",
            "G": "32 GB"
        },
        { 
            feature: "vCPU", 
            "Basic Plus": "100%", 
            "Special": "120%", 
            "Subsidi": "180%", 
            "Super": "180%", 
            "Anomali": "300%",
            "Antimainstream": "200%",
            "Ultra": "350%",
            "G": "700%"
        },
        { 
            feature: "Storage SSD", 
            "Basic Plus": "20 GB", 
            "Special": "30 GB", 
            "Subsidi": "40 GB", 
            "Super": "30 GB", 
            "Anomali": "120 GB",
            "Antimainstream": "50 GB",
            "Ultra": "150 GB",
            "G": "200 GB"
        },
        { 
            feature: "Slot Pemain", 
            "Basic Plus": "5", 
            "Special": "10", 
            "Subsidi": "15", 
            "Super": "10", 
            "Anomali": "30",
            "Antimainstream": "20",
            "Ultra": "40",
            "G": "50"
        },
        { 
            feature: "DDoS Protection", 
            "Basic Plus": "Tidak", 
            "Special": "Dasar", 
            "Subsidi": "Dasar", 
            "Super": "Premium", 
            "Anomali": "Premium",
            "Antimainstream": "Premium",
            "Ultra": "Premium",
            "G": "Premium"
        },
        { 
            feature: "Backup", 
            "Basic Plus": "Harian", 
            "Special": "Harian", 
            "Subsidi": "Harian", 
            "Super": "Harian", 
            "Anomali": "Harian",
            "Antimainstream": "Harian",
            "Ultra": "Harian",
            "G": "Harian"
        },
        { 
            feature: "Support", 
            "Basic Plus": "Standard", 
            "Special": "Standard", 
            "Subsidi": "Priority", 
            "Super": "High Priority", 
            "Anomali": "Priority",
            "Antimainstream": "High Priority",
            "Ultra": "24/7 Dedicated",
            "G": "24/7 Dedicated"
        }
    ],
    
    // Data testimoni
    testimonials: [
        {
            name: "Ghaisan Athaillah Fuadi",
            role: "Pemilik Server LabiorsSMP",
            content: "Sudah 1 tahun menggunakan Segeng Cloud untuk server komunitas kami. Uptime 99.9% benar-benar terasa, server jarang down bahkan saat event besar.",
            rating: 5,
            avatar: "GA"
        },
        {
            name: "Yudha Prasetiyo",
            role: "Owner Dhaaserver",
            content: "Supportnya sangat responsif! Kapanpun ada masalah, tim Segeng Cloud selalu siap membantu. Panel kontrolnya juga user-friendly.",
            rating: 5,
            avatar: "YP"
        },
        {
            name: "Rizky Pratama",
            role: "Developer Plugin",
            content: "Performa server sangat stabil bahkan dengan 100+ player online. DDoS protectionnya juga berhasil menangani serangan yang pernah kami alami.",
            rating: 4,
            avatar: "RP"
        },
        {
            name: "Budi Santoso",
            role: "Pemilik Server Mini-Games",
            content: "Harga kompetitif dengan fitur yang lengkap. Migrasi dari provider sebelumnya juga dibantu secara gratis oleh tim Segeng Cloud.",
            rating: 5,
            avatar: "BS"
        }
    ]
};

// Data untuk panel pembelian
const planData = {
    "Paket Basic Plus": {
        price: "Rp 10K",
        features: ["2 GB RAM DDR4", "100% vCPU", "20 GB SSD NVMe", "5 Slot Pemain", "Panel Pterodactyl", "Instalasi 3 Klik", "Backup Harian"]
    },
    "Paket Special": {
        price: "Rp 20K",
        features: ["4 GB RAM DDR4", "120% vCPU", "30 GB SSD NVMe", "10 Slot Pemain", "Panel Pterodactyl", "DDoS Protection Dasar", "Backup Harian"]
    },
    "Paket Subsidi": {
        price: "Rp 35K",
        features: ["8 GB RAM DDR4", "180% vCPU", "40 GB SSD NVMe", "15 Slot Pemain", "Panel Pterodactyl", "DDoS Protection Dasar", "Backup Harian", "Support Priority"]
    },
    "Paket Super": {
        price: "Rp 35K",
        features: ["4 GB RAM DDR4", "180% vCPU", "30 GB SSD NVMe", "10 Slot Pemain", "Panel Pterodactyl", "DDoS Protection Premium", "Backup Harian", "Support High Priority"]
    },
    "Paket Anomali": {
        price: "Rp 80K",
        features: ["16 GB RAM DDR4", "300% vCPU", "120 GB SSD NVMe", "30 Slot Pemain", "Panel Pterodactyl", "DDoS Protection Premium", "Backup Harian", "Support Priority"]
    },
    "Paket Antimainstream": {
        price: "Rp 60K",
        features: ["8 GB RAM DDR4", "200% vCPU", "50 GB SSD NVMe", "20 Slot Pemain", "Panel Pterodactyl", "DDoS Protection Premium", "Backup Harian", "Support High Priority"]
    },
    "Paket Ultra": {
        price: "Rp 120K",
        features: ["16 GB RAM DDR4", "350% Core vCPU", "150 GB SSD NVMe", "40 Slot Pemain", "Panel Pterodactyl", "DDoS Protection Premium", "Backup Harian", "24/7 Dedicated Support"]
    },
    "Paket G": {
        price: "Rp 150K",
        features: ["32 GB RAM DDR4", "700% vCPU", "200 GB SSD NVMe", "50 Slot Pemain", "Panel Pterodactyl", "DDoS Protection Premium", "Backup Harian", "24/7 Dedicated Support"]
    }
};

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded - Initializing Segeng Cloud');
    
    // Sembunyikan loading overlay
    setTimeout(function() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
    }, 800);
    
    // Render komponen dinamis
    renderPricingCards();
    renderFeatures();
    renderComparisonTable();
    renderTestimonials();
    
    // Inisialisasi event listeners
    initEventListeners();
    
    // Inisialisasi animasi
    initAnimations();
    
    // Fix untuk iOS viewport height
    fixViewportHeight();
});

// Fix untuk viewport height di iOS
function fixViewportHeight() {
    if (window.innerWidth <= 768) {
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        
        setVH();
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);
    }
}

// Render kartu paket hosting
function renderPricingCards() {
    const pricingCardsContainer = document.getElementById('pricingCards');
    if (!pricingCardsContainer) {
        console.error('Pricing cards container not found');
        return;
    }
    
    let cardsHTML = '';
    
    websiteData.plans.forEach(function(plan) {
        cardsHTML += `
            <div class="pricing-card ${plan.popular ? 'popular' : ''}" data-category="${plan.category}" data-plan="${plan.name}">
                ${plan.popular ? '<div class="popular-badge">POPULAR</div>' : ''}
                <div class="plan-icon">
                    <i class="${plan.icon}"></i>
                </div>
                <h3 class="plan-name">${plan.name}</h3>
                <p class="plan-description">${plan.description}</p>
                <div class="plan-price">${plan.price}</div>
                <div class="plan-period">per bulan</div>
                
                <ul class="plan-features">
                    ${plan.features.map(function(feature) {
                        return `<li><i class="fas fa-check"></i> ${feature}</li>`;
                    }).join('')}
                    ${plan.unavailable.map(function(feature) {
                        return `<li class="feature-unavailable"><i class="fas fa-times"></i> ${feature}</li>`;
                    }).join('')}
                </ul>
                
                <a href="#" class="cta-button plan-button" data-plan="${plan.name}">
                    <i class="fas fa-shopping-cart"></i> <span class="btn-text">Pesan Sekarang</span>
                </a>
            </div>
        `;
    });
    
    pricingCardsContainer.innerHTML = cardsHTML;
    console.log('Pricing cards rendered');
}

// Render fitur
function renderFeatures() {
    const featuresContainer = document.querySelector('.features-grid');
    if (!featuresContainer) {
        console.error('Features container not found');
        return;
    }
    
    let featuresHTML = '';
    
    websiteData.features.forEach(function(feature) {
        featuresHTML += `
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="${feature.icon}"></i>
                </div>
                <h3 class="feature-title">${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `;
    });
    
    featuresContainer.innerHTML = featuresHTML;
    console.log('Features rendered');
}

// Render tabel perbandingan
function renderComparisonTable() {
    const comparisonTable = document.getElementById('comparisonTable');
    if (!comparisonTable) {
        console.error('Comparison table not found');
        return;
    }
    
    // Pilih 5 paket terpopuler untuk ditampilkan di tabel perbandingan
    const selectedPackages = [
        "Basic Plus",
        "Special", 
        "Subsidi",
        "Anomali",
        "Ultra"
    ];
    
    let tableHTML = `
        <thead>
            <tr>
                <th class="feature-name">Fitur</th>
    `;
    
    // Header untuk setiap paket yang dipilih
    selectedPackages.forEach(function(pkg) {
        tableHTML += `<th class="feature-value">${pkg}</th>`;
    });
    
    tableHTML += `</tr></thead><tbody>`;
    
    // Data untuk setiap baris
    websiteData.comparison.forEach(function(row) {
        tableHTML += `<tr><td class="feature-name">${row.feature}</td>`;
        
        selectedPackages.forEach(function(pkg) {
            const value = row[pkg] || "-";
            const isNo = value === "Tidak";
            tableHTML += `<td class="feature-value ${isNo ? 'no' : ''}">${value}</td>`;
        });
        
        tableHTML += `</tr>`;
    });
    
    tableHTML += '</tbody>';
    comparisonTable.innerHTML = tableHTML;
    console.log('Comparison table rendered');
}

// Render testimonial
function renderTestimonials() {
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    const testimonialDots = document.getElementById('testimonialDots');
    
    if (!testimonialsTrack || !testimonialDots) {
        console.error('Testimonial elements not found');
        return;
    }
    
    let testimonialsHTML = '';
    let dotsHTML = '';
    
    websiteData.testimonials.forEach(function(testimonial, index) {
        // Rating stars
        let starsHTML = '';
        for (let i = 0; i < 5; i++) {
            if (i < testimonial.rating) {
                starsHTML += `<i class="fas fa-star"></i>`;
            } else if (i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0) {
                starsHTML += `<i class="fas fa-star-half-alt"></i>`;
            } else {
                starsHTML += `<i class="far fa-star"></i>`;
            }
        }
        
        testimonialsHTML += `
            <div class="testimonial-card" data-index="${index}">
                <div class="testimonial-content">
                    "${testimonial.content}"
                </div>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">
                        ${testimonial.avatar}
                    </div>
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                        <div class="testimonial-rating">
                            ${starsHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        dotsHTML += `<button class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Testimoni ${index + 1}"></button>`;
    });
    
    testimonialsTrack.innerHTML = testimonialsHTML;
    testimonialDots.innerHTML = dotsHTML;
    
    // Setup testimonial slider
    setupTestimonialSlider();
    console.log('Testimonials rendered');
}

// Setup testimonial slider
function setupTestimonialSlider() {
    const track = document.getElementById('testimonialsTrack');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    
    if (!track || cards.length === 0) {
        console.error('Testimonial slider elements not found');
        return;
    }
    
    let currentIndex = 0;
    const totalCards = cards.length;
    let autoSlideInterval;
    
    // Update slider position
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active dot
        dots.forEach(function(dot, index) {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateSlider();
    }
    
    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prevSlide();
            resetAutoSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextSlide();
            resetAutoSlide();
        });
    }
    
    // Dot click
    dots.forEach(function(dot) {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateSlider();
            resetAutoSlide();
        });
    });
    
    // Reset auto slide timer
    function resetAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
        startAutoSlide();
    }
    
    // Start auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    // Start auto slide
    startAutoSlide();
    
    // Pause auto slide on hover (desktop only)
    if (window.innerWidth > 768) {
        track.addEventListener('mouseenter', function() {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
        });
        
        track.addEventListener('mouseleave', startAutoSlide);
    }
    
    console.log('Testimonial slider initialized');
}

// Inisialisasi event listeners
function initEventListeners() {
    console.log('Initializing event listeners');
    
    // Elements
    const pricingCards = document.getElementById('pricingCards');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');
    const purchasePanel = document.getElementById('purchasePanel');
    const closePanel = document.getElementById('closePanel');
    const planSelectorBtns = document.querySelectorAll('.plan-selector-btn');
    const panelPlanName = document.getElementById('panelPlanName');
    const panelPlanPrice = document.getElementById('panelPlanPrice');
    const panelPlanPeriod = document.getElementById('panelPlanPeriod');
    const panelFeaturesList = document.getElementById('panelFeaturesList');
    const manualRedirect = document.getElementById('manualRedirect');
    const demoBtn = document.getElementById('demo-btn');
    const contactBtn = document.getElementById('contact-btn');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Scroll functionality for pricing cards
    if (scrollLeft && pricingCards) {
        scrollLeft.addEventListener('click', function(e) {
            e.preventDefault();
            pricingCards.scrollBy({ left: -350, behavior: 'smooth' });
        });
    }
    
    if (scrollRight && pricingCards) {
        scrollRight.addEventListener('click', function(e) {
            e.preventDefault();
            pricingCards.scrollBy({ left: 350, behavior: 'smooth' });
        });
    }
    
    // Plan filtering functionality
    planSelectorBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active button
            planSelectorBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            const cards = document.querySelectorAll('.pricing-card');
            
            // Show/hide cards based on category
            cards.forEach(function(card) {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Scroll to first visible card
            const firstVisibleCard = document.querySelector('.pricing-card[style="display: flex"], .pricing-card:not([style])');
            if (firstVisibleCard && window.innerWidth <= 768) {
                firstVisibleCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        });
    });
    
    // Open purchase panel when plan button is clicked
    document.addEventListener('click', function(e) {
        const planButton = e.target.closest('.plan-button');
        if (planButton) {
            e.preventDefault();
            const planName = planButton.getAttribute('data-plan');
            openPurchasePanel(planName);
        }
    });
    
    // Function to open purchase panel
    function openPurchasePanel(planName) {
        // Set panel content based on selected plan
        if (panelPlanName) panelPlanName.textContent = planName;
        if (panelPlanPrice) panelPlanPrice.textContent = planData[planName].price;
        if (panelPlanPeriod) panelPlanPeriod.textContent = "per bulan";
        
        // Clear and add features
        if (panelFeaturesList) {
            panelFeaturesList.innerHTML = '';
            if (planData[planName] && planData[planName].features) {
                planData[planName].features.forEach(function(feature) {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
                    panelFeaturesList.appendChild(li);
                });
            }
        }
        
        // Update redirect link with plan parameter
        const redirectUrl = `https://ctrl.segengcloud.xyz/`;
        if (manualRedirect) manualRedirect.href = redirectUrl;
        
        // Show panel
        if (purchasePanel) {
            purchasePanel.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling behind panel
            
            // Auto redirect after 5 seconds
            const redirectTimer = setTimeout(function() {
                window.open(redirectUrl, '_blank');
                purchasePanel.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 5000);
            
            // Store timer for cleanup
            purchasePanel.dataset.redirectTimer = redirectTimer;
        }
    }
    
    // Close purchase panel
    if (closePanel) {
        closePanel.addEventListener('click', function(e) {
            e.preventDefault();
            closePurchasePanel();
        });
    }
    
    function closePurchasePanel() {
        if (purchasePanel) {
            purchasePanel.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Clear redirect timer
            if (purchasePanel.dataset.redirectTimer) {
                clearTimeout(purchasePanel.dataset.redirectTimer);
                delete purchasePanel.dataset.redirectTimer;
            }
        }
    }
    
    // Close panel when clicking outside content
    if (purchasePanel) {
        purchasePanel.addEventListener('click', function(e) {
            if (e.target === purchasePanel) {
                closePurchasePanel();
            }
        });
    }
    
    // Demo button functionality
    if (demoBtn) {
        demoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification("Demo panel akan segera hadir! Saat ini Anda dapat melihat screenshots panel di halaman dokumentasi kami.", "info");
        });
    }
    
    // Contact button functionality
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://wa.me/6285161266342?text=Halo%20Segeng%20Cloud,%20saya%20ingin%20konsultasi%20tentang%20hosting%20Minecraft', '_blank');
        });
    }
    
    // Mobile menu functionality
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
    }
    
    if (mobileNavClose && mobileNav) {
        mobileNavClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeMobileMenu();
        });
    }
    
    function closeMobileMenu() {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    if (mobileNavLinks.length > 0 && mobileNav) {
        mobileNavLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                // Don't prevent default for external links
                if (!this.href.includes('segengcloud.xyz') && !this.href.includes('tel:') && !this.href.includes('mailto:')) {
                    e.preventDefault();
                }
                
                // Close menu for internal links
                if (this.getAttribute('href').startsWith('#')) {
                    closeMobileMenu();
                    
                    // Scroll to section
                    const targetId = this.getAttribute('href');
                    if (targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            setTimeout(() => {
                                window.scrollTo({
                                    top: targetElement.offsetTop - 80,
                                    behavior: 'smooth'
                                });
                            }, 300);
                        }
                    }
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        if (anchor.getAttribute('href') === '#') return;
        
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (header) {
            if (scrollTop > 100) {
                header.style.backgroundColor = 'rgba(12, 14, 21, 0.98)';
                header.style.boxShadow = '0 5px 30px rgba(0, 168, 255, 0.15)';
                
                // Hide navbar on scroll down (mobile only)
                if (window.innerWidth <= 768) {
                    if (scrollTop > lastScrollTop && scrollTop > 200) {
                        // Scrolling down
                        header.style.transform = 'translateY(-100%)';
                    } else {
                        // Scrolling up
                        header.style.transform = 'translateY(0)';
                    }
                }
            } else {
                header.style.backgroundColor = 'rgba(12, 14, 21, 0.97)';
                header.style.boxShadow = '0 5px 30px rgba(0, 168, 255, 0.1)';
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileNav && mobileNav.classList.contains('active')) {
            if (!mobileNav.contains(e.target) && e.target !== mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (mobileNav && mobileNav.classList.contains('active')) {
                closeMobileMenu();
            }
            if (purchasePanel && purchasePanel.style.display === 'flex') {
                closePurchasePanel();
            }
        }
    });
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        // Close mobile menu on orientation change
        if (mobileNav && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
        
        // Recalculate hero height
        setTimeout(fixViewportHeight, 100);
    });
    
    console.log('Event listeners initialized');
}

// Inisialisasi animasi
function initAnimations() {
    console.log('Initializing animations');
    
    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateCounter('servers-count', 0, 1250, 2000);
                animateCounter('clients', 0, 5000, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) observer.observe(heroSection);
    
    // Animate elements on scroll
    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(function(card) {
        fadeInObserver.observe(card);
    });
    
    // Add fade-in animation styles
    if (!document.querySelector('#fade-in-styles')) {
        const style = document.createElement('style');
        style.id = 'fade-in-styles';
        style.textContent = `
            .feature-card {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .feature-card.fade-in-visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .pricing-card {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .pricing-card.fade-in-visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Observe pricing cards
    document.querySelectorAll('.pricing-card').forEach(function(card) {
        fadeInObserver.observe(card);
    });
    
    console.log('Animations initialized');
}

// Counter animation function
function animateCounter(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // If already animated, don't animate again
    if (element.dataset.animated === 'true') return;
    element.dataset.animated = 'true';
    
    let startTimestamp = null;
    const step = function(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        // Format angka dengan titik pemisah ribuan
        const formattedValue = value.toLocaleString('id-ID');
        
        if (elementId === 'uptime') {
            element.textContent = '99.9%';
        } else if (elementId === 'support') {
            element.textContent = '24/7';
        } else {
            element.textContent = formattedValue + '+';
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Notification function
function showNotification(message, type = "info") {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    notification.innerHTML = `
        <p>${message}</p>
        <button class="notification-close" aria-label="Tutup notifikasi"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles for notification if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--card-bg);
                border-left: 4px solid var(--primary);
                border-radius: 8px;
                padding: 20px;
                box-shadow: var(--shadow);
                z-index: 9999;
                max-width: 350px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                animation: slideInRight 0.3s ease;
            }
            
            .notification-success {
                border-left-color: var(--success);
            }
            
            .notification-info {
                border-left-color: var(--primary);
            }
            
            .notification-warning {
                border-left-color: var(--warning);
            }
            
            .notification-error {
                border-left-color: var(--danger);
            }
            
            .notification p {
                margin: 0;
                margin-right: 15px;
                font-size: 0.95rem;
                line-height: 1.4;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: var(--gray);
                cursor: pointer;
                font-size: 1rem;
                padding: 5px;
                flex-shrink: 0;
            }
            
            .notification-close:hover {
                color: var(--light);
            }
            
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @media (max-width: 768px) {
                .notification {
                    top: 80px;
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(function() {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Initialize stats animation when page loads
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    
    // Animate uptime and support immediately
    const uptimeElement = document.getElementById('uptime');
    const supportElement = document.getElementById('support');
    
    if (uptimeElement) uptimeElement.textContent = '99.9%';
    if (supportElement) supportElement.textContent = '24/7';
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
    
    // Fix any layout issues after load
    setTimeout(function() {
        if (window.innerWidth <= 768) {
            fixViewportHeight();
        }
    }, 100);
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Close mobile menu on resize (if it's open and we're now in desktop view)
        const mobileNav = document.getElementById('mobileNav');
        if (mobileNav && mobileNav.classList.contains('active') && window.innerWidth > 991) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Re-initialize testimonial slider if needed
        if (window.innerWidth <= 768) {
            setupTestimonialSlider();
        }
    }, 250);
});

// Add error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        e.target.style.display = 'none';
    }
}, true);

// Log initialization complete
console.log('Segeng Cloud website initialized successfully');
