// ========================================
// PathFinder - Explore Careers Page JS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initNavbar();
    initMobileMenu();
    initCareerExplorer();
});

// ========================================
// Navbar
// ========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        }
    });
}

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        icon.setAttribute('data-lucide', mobileMenu.classList.contains('active') ? 'x' : 'menu');
        lucide.createIcons();
    });
}

// ========================================
// Career Explorer
// ========================================
function initCareerExplorer() {
    const grid = document.getElementById('careersGrid');
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const categoryFilter = document.getElementById('categoryFilter');
    const experienceFilter = document.getElementById('experienceFilter');
    const salaryFilter = document.getElementById('salaryFilter');
    const filterReset = document.getElementById('filterReset');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    
    // Career data with images
    const careerImages = {
        'technology': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
        'healthcare': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80',
        'business': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
        'creative': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
        'engineering': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
        'science': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
        'education': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
        'legal': 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&q=80'
    };
    
    let filteredCareers = [];
    let displayedCareers = 0;
    const careersPerPage = 12;
    
    // Check URL params
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && categoryFilter) {
        categoryFilter.value = categoryParam;
    }
    
    // Get careers data
    function getCareers() {
        if (typeof careersData !== 'undefined') {
            return careersData;
        }
        return [];
    }
    
    // Filter careers
    function filterCareers() {
        const careers = getCareers();
        const searchTerm = searchInput?.value.toLowerCase() || '';
        const category = categoryFilter?.value || '';
        const experience = experienceFilter?.value || '';
        const salary = salaryFilter?.value || '';
        
        filteredCareers = careers.filter(career => {
            // Search filter
            const matchesSearch = !searchTerm || 
                career.title.toLowerCase().includes(searchTerm) ||
                career.description?.toLowerCase().includes(searchTerm) ||
                career.skills?.some(skill => skill.toLowerCase().includes(searchTerm));
            
            // Category filter
            const matchesCategory = !category || career.category === category;
            
            // Experience filter
            const matchesExperience = !experience || career.level === experience;
            
            // Salary filter
            let matchesSalary = true;
            if (salary && career.salaryMin) {
                const minSalary = parseInt(career.salaryMin);
                switch(salary) {
                    case '0-5':
                        matchesSalary = minSalary < 500000;
                        break;
                    case '5-10':
                        matchesSalary = minSalary >= 500000 && minSalary < 1000000;
                        break;
                    case '10-20':
                        matchesSalary = minSalary >= 1000000 && minSalary < 2000000;
                        break;
                    case '20+':
                        matchesSalary = minSalary >= 2000000;
                        break;
                }
            }
            
            return matchesSearch && matchesCategory && matchesExperience && matchesSalary;
        });
        
        displayedCareers = 0;
        renderCareers();
    }
    
    // Render careers
    function renderCareers() {
        if (!grid) return;
        
        if (displayedCareers === 0) {
            grid.innerHTML = '';
        }
        
        const careersToShow = filteredCareers.slice(displayedCareers, displayedCareers + careersPerPage);
        
        careersToShow.forEach((career, index) => {
            const card = createCareerCard(career, index);
            grid.appendChild(card);
        });
        
        displayedCareers += careersToShow.length;
        
        // Update results count
        if (resultsCount) {
            resultsCount.textContent = filteredCareers.length;
        }
        
        // Show/hide no results
        if (noResults) {
            noResults.classList.toggle('visible', filteredCareers.length === 0);
        }
        
        // Initialize icons
        lucide.createIcons();
        
        // Animate cards
        setTimeout(() => {
            document.querySelectorAll('.career-card:not(.visible)').forEach((card, i) => {
                setTimeout(() => card.classList.add('visible'), i * 50);
            });
        }, 50);
    }
    
    // Create career card
    function createCareerCard(career, index) {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        const imageUrl = careerImages[career.category] || careerImages['technology'];
        const salaryText = career.salaryMin && career.salaryMax 
            ? `₹${(career.salaryMin/100000).toFixed(0)}-${(career.salaryMax/100000).toFixed(0)} LPA`
            : 'Varies';
        
        card.innerHTML = `
            <div class="career-image">
                <img src="${imageUrl}" alt="${career.title}" loading="lazy">
                <span class="career-category">${career.category || 'General'}</span>
            </div>
            <div class="career-content">
                <h3>${career.title}</h3>
                <p>${career.description || 'Explore this exciting career path and discover opportunities for growth.'}</p>
                <div class="career-meta">
                    <span class="meta-item">
                        <i data-lucide="briefcase"></i>
                        ${career.level || 'All Levels'}
                    </span>
                    <span class="meta-item salary">
                        <i data-lucide="indian-rupee"></i>
                        ${salaryText}
                    </span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openCareerModal(career));
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.classList.add('visible');
        }, index * 100);
        
        return card;
    }
    
    // Open career modal
    function openCareerModal(career) {
        const modal = document.getElementById('careerModal');
        const modalContent = document.getElementById('modalContent');
        
        if (!modal || !modalContent) return;
        
        const imageUrl = careerImages[career.category] || careerImages['technology'];
        const salaryText = career.salaryMin && career.salaryMax 
            ? `₹${(career.salaryMin/100000).toFixed(0)}-${(career.salaryMax/100000).toFixed(0)} LPA`
            : 'Competitive';
        
        modalContent.innerHTML = `
            <div class="modal-header">
                <img src="${imageUrl}" alt="${career.title}">
                <div class="modal-header-overlay"></div>
                <div class="modal-header-content">
                    <span class="modal-category">${career.category || 'Career'}</span>
                    <h2 class="modal-title">${career.title}</h2>
                </div>
            </div>
            <div class="modal-body">
                <div class="modal-stats">
                    <div class="modal-stat">
                        <span class="modal-stat-value">${salaryText}</span>
                        <span class="modal-stat-label">Expected Salary</span>
                    </div>
                    <div class="modal-stat">
                        <span class="modal-stat-value">${career.level || 'All Levels'}</span>
                        <span class="modal-stat-label">Experience Level</span>
                    </div>
                    <div class="modal-stat">
                        <span class="modal-stat-value">${career.growth || 'High'}</span>
                        <span class="modal-stat-label">Growth Potential</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h4><i data-lucide="info"></i> Overview</h4>
                    <p>${career.description || 'This career offers exciting opportunities for growth and development in a dynamic field.'}</p>
                </div>
                
                <div class="modal-section">
                    <h4><i data-lucide="zap"></i> Key Skills</h4>
                    <div class="skills-list">
                        ${(career.skills || ['Problem Solving', 'Communication', 'Teamwork']).map(skill => 
                            `<span class="skill-tag">${skill}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="modal-section">
                    <h4><i data-lucide="graduation-cap"></i> Education Requirements</h4>
                    <p>${career.education || 'Bachelor\'s degree in a related field. Higher education may be preferred for advanced roles.'}</p>
                </div>
                
                <div class="modal-cta">
                    <a href="questionnaire.html" class="btn btn-primary">
                        <span>Get Personalized Roadmap</span>
                        <i data-lucide="arrow-right"></i>
                    </a>
                    <a href="colleges.html?career=${encodeURIComponent(career.title)}" class="btn btn-outline" style="border-color: var(--gray-200); color: var(--gray-700);">
                        <i data-lucide="building-2"></i>
                        <span>Find Colleges</span>
                    </a>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        lucide.createIcons();
    }
    
    // Close modal
    const modalClose = document.getElementById('modalClose');
    const modal = document.getElementById('careerModal');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    
    function closeModal() {
        const modal = document.getElementById('careerModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Event listeners
    if (searchInput) {
        searchInput.addEventListener('input', debounce(() => {
            if (searchClear) {
                searchClear.classList.toggle('visible', searchInput.value.length > 0);
            }
            filterCareers();
        }, 300));
    }
    
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchClear.classList.remove('visible');
            filterCareers();
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterCareers);
    }
    
    if (experienceFilter) {
        experienceFilter.addEventListener('change', filterCareers);
    }
    
    if (salaryFilter) {
        salaryFilter.addEventListener('change', filterCareers);
    }
    
    if (filterReset) {
        filterReset.addEventListener('click', resetFilters);
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', resetFilters);
    }
    
    function resetFilters() {
        if (searchInput) searchInput.value = '';
        if (searchClear) searchClear.classList.remove('visible');
        if (categoryFilter) categoryFilter.value = '';
        if (experienceFilter) experienceFilter.value = '';
        if (salaryFilter) salaryFilter.value = '';
        filterCareers();
    }
    
    // View toggle
    if (gridViewBtn && listViewBtn && grid) {
        gridViewBtn.addEventListener('click', () => {
            grid.classList.remove('list-view');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });
        
        listViewBtn.addEventListener('click', () => {
            grid.classList.add('list-view');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        });
    }
    
    // Infinite scroll
    window.addEventListener('scroll', () => {
        if (loadingIndicator && displayedCareers < filteredCareers.length) {
            const scrollPos = window.innerHeight + window.scrollY;
            const threshold = document.body.offsetHeight - 500;
            
            if (scrollPos >= threshold) {
                loadingIndicator.classList.add('visible');
                setTimeout(() => {
                    renderCareers();
                    loadingIndicator.classList.remove('visible');
                }, 500);
            }
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Initialize
    filterCareers();
}

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
