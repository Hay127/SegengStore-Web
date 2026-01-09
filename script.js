// ===== WEBSITE DATA =====
const websiteData = {
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
            name: "Paket Super",
            category: "standard",
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
            id: 5,
            name: "Paket Anomali",
            category: "premium",
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
            id: 6,
            name: "Paket Antimainstream",
            category: "premium",
            description: "Server terbaik dengan environment yang mantap",
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

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Segeng Cloud - Initializing...');
    
    // Hide loading screen
    setTimeout(() => {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
        document.body.classList.add('loaded');
    }, 800);
    
    // Render all components
    renderPricingCards();
    renderFeatures();
    renderComparisonTable();
    renderTestimonials();
    
    // Initialize functionality
    initEventListeners();
    initAnimations();
    initBackToTop();
    
    // Adjust for mobile
    adjustForMobile();
    
    console.log('Segeng Cloud - Initialized successfully!');
});

// ===== RENDER FUNCTIONS =====
function renderPricingCards() {
    const container = document.getElementById('pricingCards');
    if (!container) return;
    
    let html = '';
    
    websiteData.plans.forEach(plan => {
        html += `
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
                    ${plan.features.map(feature => `
                        <li><i class="fas fa-check"></i> ${feature}</li>
                    `).join('')}
                    ${plan.unavailable.map(feature => `
                        <li class="feature-unavailable"><i class="fas fa-times"></i> ${feature}</li>
                    `).join('')}
                </ul>
                
                <button class="cta-button plan-button" data-plan="${plan.name}">
                    <i class="fas fa-shopping-cart"></i> Pesan Sekarang
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderFeatures() {
    const container = document.querySelector('.features-grid');
    if (!container) return;
    
    let html = '';
    
    websiteData.features.forEach(feature => {
        html += `
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="${feature.icon}"></i>
                </div>
                <h3 class="feature-title">${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderComparisonTable() {
    const container = document.getElementById('comparisonTable');
    if (!container) return;
    
    // Select packages to show
    const packages = ["Basic Plus", "Special", "Subsidi", "Anomali", "Ultra"];
    
    let html = `
        <thead>
            <tr>
                <th class="feature-name">Fitur</th>
                ${packages.map(pkg => `<th class="feature-value">${pkg}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
    `;
    
    websiteData.comparison.forEach(row => {
        html += `
            <tr>
                <td class="feature-name">${row.feature}</td>
                ${packages.map(pkg => {
                    const value = row[pkg] || "-";
                    const isNo = value === "Tidak";
                    return `<td class="feature-value ${isNo ? 'no' : ''}">${value}</td>`;
                }).join('')}
            </tr>
        `;
    });
    
    html += '</tbody>';
    container.innerHTML = html;
}

function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const dots = document.getElementById('testimonialDots');
    if (!track || !dots) return;
    
    let testimonialsHTML = '';
    let dotsHTML = '';
    
    websiteData.testimonials.forEach((testimonial, index) => {
        // Stars
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= testimonial.rating) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i - 0.5 === testimonial.rating) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
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
                            ${stars}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        dotsHTML += `<button class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>`;
    });
    
    track.innerHTML = testimonialsHTML;
    dots.innerHTML = dotsHTML;
    
    // Initialize slider
    initTestimonialSlider();
}

// ===== FUNCTIONALITY =====
function initEventListeners() {
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            e.target !== mobileMenuBtn) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Plan filtering
    const planButtons = document.querySelectorAll('.plan-selector-btn');
    planButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            planButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter plans
            const category = button.dataset.category;
            const cards = document.querySelectorAll('.pricing-card');
            
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Order buttons
    document.addEventListener('click', (e) => {
        const orderBtn = e.target.closest('.plan-button');
        if (orderBtn) {
            e.preventDefault();
            const planName = orderBtn.dataset.plan;
            openOrderPanel(planName);
        }
    });
    
    // WhatsApp button
    const whatsappBtn = document.querySelector('a[href*="wa.me"]');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            if (!confirm('Anda akan diarahkan ke WhatsApp untuk konsultasi. Lanjutkan?')) {
                e.preventDefault();
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
    
    // Order panel
    const orderPanel = document.getElementById('orderPanel');
    const closePanelBtn = document.getElementById('closePanel');
    
    if (closePanelBtn) {
        closePanelBtn.addEventListener('click', () => {
            orderPanel.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    
    // Close panel on outside click
    if (orderPanel) {
        orderPanel.addEventListener('click', (e) => {
            if (e.target === orderPanel) {
                orderPanel.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(12, 14, 21, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.backgroundColor = 'rgba(12, 14, 21, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        // Hide/show navbar on scroll (mobile only)
        if (window.innerWidth <= 768) {
            if (currentScroll > lastScroll && currentScroll > 200) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScroll = currentScroll;
    });
}

function initTestimonialSlider() {
    const track = document.getElementById('testimonialsTrack');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    
    if (!track || cards.length === 0) return;
    
    let currentIndex = 0;
    let autoSlideInterval;
    
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlider();
    }
    
    // Button events
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Dot events
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.dataset.index);
            updateSlider();
        });
    });
    
    // Auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Start auto slide
    startAutoSlide();
    
    // Pause on hover
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);
}

function initAnimations() {
    // Animate counters
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter('servers-count', 0, 1250, 2000);
                animateCounter('clients-count', 0, 5000, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) observer.observe(heroSection);
    
    // Animate cards on scroll
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all cards
    document.querySelectorAll('.pricing-card, .feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(card);
    });
}

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function animateCounter(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // Don't animate if already animated
    if (element.dataset.animated === 'true') return;
    element.dataset.animated = 'true';
    
    let startTime = null;
    
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        element.textContent = value.toLocaleString('id-ID') + '+';
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

function openOrderPanel(planName) {
    const panel = document.getElementById('orderPanel');
    const planNameElement = document.getElementById('panelPlanName');
    const planPriceElement = document.getElementById('panelPlanPrice');
    const planPeriodElement = document.getElementById('panelPlanPeriod');
    const featuresList = document.getElementById('panelFeaturesList');
    const redirectBtn = document.getElementById('panelRedirectBtn');
    
    if (!panel) return;
    
    // Find plan data
    const plan = websiteData.plans.find(p => p.name === planName);
    if (!plan) return;
    
    // Update panel content
    if (planNameElement) planNameElement.textContent = planName;
    if (planPriceElement) planPriceElement.textContent = plan.price;
    if (planPeriodElement) planPeriodElement.textContent = 'per bulan';
    
    // Update features
    if (featuresList) {
        featuresList.innerHTML = '';
        plan.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            featuresList.appendChild(li);
        });
    }
    
    // Update redirect URL
    if (redirectBtn) {
        redirectBtn.href = `https://ctrl.segengcloud.xyz/?plan=${encodeURIComponent(planName)}`;
    }
    
    // Show panel
    panel.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Auto redirect after 5 seconds
    setTimeout(() => {
        window.open(redirectBtn.href, '_blank');
        panel.style.display = 'none';
        document.body.style.overflow = '';
    }, 5000);
}

function adjustForMobile() {
    // Adjust navbar buttons for mobile
    function adjustNavbar() {
        const navActions = document.querySelector('.nav-actions');
        const windowWidth = window.innerWidth;
        
        if (!navActions) return;
        
        if (windowWidth <= 767) {
            // Mobile: show icons only
            navActions.querySelectorAll('.btn-text').forEach(text => {
                text.style.display = 'none';
            });
            
            // Adjust button padding
            navActions.querySelectorAll('.cta-button').forEach(button => {
                button.style.padding = '6px 8px';
                button.style.fontSize = '0.75rem';
            });
        } else if (windowWidth <= 991) {
            // Tablet: show short text
            navActions.querySelectorAll('.btn-text').forEach(text => {
                if (text.textContent === 'Masuk') text.style.display = 'none';
                if (text.textContent === 'Pesan Sekarang') text.textContent = 'Pesan';
            });
        } else {
            // Desktop: show all
            navActions.querySelectorAll('.btn-text').forEach(text => {
                text.style.display = 'inline-block';
                if (text.textContent === 'Pesan') text.textContent = 'Pesan Sekarang';
            });
            
            navActions.querySelectorAll('.cta-button').forEach(button => {
                button.style.padding = '';
                button.style.fontSize = '';
            });
        }
    }
    
    // Initial adjustment
    adjustNavbar();
    
    // Adjust on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(adjustNavbar, 250);
    });
}

// ===== UTILITY FUNCTIONS =====
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--bg-card);
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: var(--shadow);
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: 15px;
                max-width: 350px;
                animation: slideIn 0.3s ease;
                border-left: 4px solid var(--primary);
            }
            
            .notification-success {
                border-left-color: var(--success);
            }
            
            .notification-error {
                border-left-color: var(--danger);
            }
            
            .notification-warning {
                border-left-color: var(--warning);
            }
            
            .notification p {
                margin: 0;
                flex: 1;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: var(--gray);
                cursor: pointer;
                padding: 5px;
            }
            
            .notification-close:hover {
                color: var(--light);
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 768px) {
                .notification {
                    left: 20px;
                    right: 20px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Preload critical images
function preloadImages() {
    const images = [
        // Add image URLs here if needed
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize when window loads
window.addEventListener('load', () => {
    preloadImages();
    
    // Add loaded class for transitions
    document.body.classList.add('loaded');
    
    // Fix for mobile viewport height
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('Website error:', e.error);
    
    // Show user-friendly error message
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
    }
}, true);
