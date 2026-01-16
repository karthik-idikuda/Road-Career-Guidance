// ========================================
// PathFinder - Questionnaire JavaScript
// Multi-step Form with Validation
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initNavbar();
    initMobileMenu();
    initQuestionnaire();
});

// ========================================
// Navigation
// ========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) navbar.classList.add('scrolled');
    });
}

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
// Questionnaire Logic
// ========================================
function initQuestionnaire() {
    const formContainer = document.getElementById('formContainer');
    const stepIndicator = document.getElementById('stepIndicator');
    const progressBar = document.getElementById('progressBar');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentStep = 1;
    const totalSteps = 5;
    
    // Form data storage
    const formData = {
        step1: {},
        step2: {},
        step3: {},
        step4: {},
        step5: {}
    };
    
    // Initialize skill tags
    initSkillTags();
    
    // Update UI based on current step
    function updateUI() {
        // Update progress bar
        const progress = (currentStep / totalSteps) * 100;
        progressBar.style.width = `${progress}%`;
        
        // Update step indicator
        const steps = stepIndicator.querySelectorAll('.step');
        steps.forEach((step, index) => {
            const stepNum = index + 1;
            step.classList.remove('active', 'completed');
            if (stepNum === currentStep) {
                step.classList.add('active');
            } else if (stepNum < currentStep) {
                step.classList.add('completed');
            }
        });
        
        // Update form steps
        const formSteps = formContainer.querySelectorAll('.form-step');
        formSteps.forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) === currentStep) {
                step.classList.add('active');
            }
        });
        
        // Update buttons
        prevBtn.disabled = currentStep === 1;
        
        if (currentStep === totalSteps) {
            nextBtn.innerHTML = '<span>Submit</span><i data-lucide="check"></i>';
        } else {
            nextBtn.innerHTML = '<span>Continue</span><i data-lucide="arrow-right"></i>';
        }
        
        lucide.createIcons();
        
        // Scroll to top of form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Validate current step
    function validateStep() {
        const currentFormStep = formContainer.querySelector(`.form-step[data-step="${currentStep}"]`);
        let isValid = true;
        
        // Get required inputs in current step
        const requiredInputs = currentFormStep.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                
                // Add shake animation
                input.style.animation = 'shake 0.5s ease';
                setTimeout(() => {
                    input.style.animation = '';
                }, 500);
            } else {
                input.classList.remove('error');
            }
        });
        
        // Additional validation for specific steps
        if (currentStep === 1) {
            const currentStatus = currentFormStep.querySelector('input[name="currentStatus"]:checked');
            if (!currentStatus) {
                isValid = false;
                showNotification('Please select your current status', 'warning');
            }
        }
        
        return isValid;
    }
    
    // Save form data
    function saveFormData() {
        const currentFormStep = formContainer.querySelector(`.form-step[data-step="${currentStep}"]`);
        const stepData = {};
        
        // Get all inputs
        const inputs = currentFormStep.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                if (!stepData[input.name]) {
                    stepData[input.name] = [];
                }
                if (input.checked) {
                    stepData[input.name].push(input.value);
                }
            } else if (input.type === 'radio') {
                if (input.checked) {
                    stepData[input.name] = input.value;
                }
            } else {
                stepData[input.id || input.name] = input.value;
            }
        });
        
        // Get selected skill tags
        if (currentStep === 4) {
            const selectedTechnical = [];
            const selectedSoft = [];
            
            document.querySelectorAll('#technicalSkills .skill-tag.selected').forEach(tag => {
                selectedTechnical.push(tag.dataset.skill);
            });
            
            document.querySelectorAll('#softSkills .skill-tag.selected').forEach(tag => {
                selectedSoft.push(tag.dataset.skill);
            });
            
            stepData.technicalSkills = selectedTechnical;
            stepData.softSkills = selectedSoft;
        }
        
        formData[`step${currentStep}`] = stepData;
    }
    
    // Next button click
    nextBtn.addEventListener('click', () => {
        if (validateStep()) {
            saveFormData();
            
            if (currentStep < totalSteps) {
                currentStep++;
                updateUI();
            } else {
                // Submit form
                submitForm();
            }
        }
    });
    
    // Previous button click
    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            saveFormData();
            currentStep--;
            updateUI();
        }
    });
    
    // Submit form
    function submitForm() {
        saveFormData();
        
        // Store form data in session storage
        sessionStorage.setItem('pathfinderFormData', JSON.stringify(formData));
        
        // Show loading state
        nextBtn.disabled = true;
        nextBtn.innerHTML = '<span>Processing...</span><div class="btn-spinner"></div>';
        
        // Simulate processing delay
        // Redirect directly (no fake "processing" delay)
        window.location.href = 'results.html';
    }
    
    // Initialize skill tags functionality
    function initSkillTags() {
        const skillTags = document.querySelectorAll('.skill-tag');
        
        skillTags.forEach(tag => {
            tag.addEventListener('click', () => {
                tag.classList.toggle('selected');
            });
        });
    }
    
    // Show notification
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i data-lucide="${type === 'warning' ? 'alert-triangle' : 'info'}"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 16px 24px;
            background: ${type === 'warning' ? '#fef3c7' : '#e0f2fe'};
            color: ${type === 'warning' ? '#92400e' : '#0369a1'};
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        lucide.createIcons();
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .error {
            border-color: #ef4444 !important;
        }
        
        .btn-spinner {
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize UI
    updateUI();
}
