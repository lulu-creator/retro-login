document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const inputs = document.querySelectorAll('input');
    const loginBtn = document.querySelector('.login-btn');

    // Create audio elements for sound effects
    const createAudioElements = () => {
        const sounds = {
            click: new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU'),
            type: new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU'),
            success: new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU')
        };
        
        // Set volume for all sounds
        Object.values(sounds).forEach(sound => {
            sound.volume = 0.2;
        });
        
        return sounds;
    };

    const sounds = createAudioElements();

    // Add VHS scan line effect
    const createScanLine = () => {
        const scanLine = document.createElement('div');
        scanLine.className = 'scan-line';
        document.body.appendChild(scanLine);
    };

    // Add retro typing effect to inputs
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('typing');
            sounds.type.currentTime = 0;
            sounds.type.play();
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('typing');
        });

        input.addEventListener('input', () => {
            if (Math.random() < 0.3) { // 30% chance to play sound
                sounds.type.currentTime = 0;
                sounds.type.play();
            }
        });
    });

    // Add button press effect
    loginBtn.addEventListener('mousedown', () => {
        loginBtn.style.transform = 'scale(0.95)';
        sounds.click.currentTime = 0;
        sounds.click.play();
    });

    loginBtn.addEventListener('mouseup', () => {
        loginBtn.style.transform = 'scale(1)';
    });

    loginBtn.addEventListener('mouseleave', () => {
        loginBtn.style.transform = 'scale(1)';
    });

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add loading animation
        loginBtn.innerHTML = '<div class="loading-spinner"></div>';
        
        // Simulate API call
        setTimeout(() => {
            loginBtn.innerHTML = '<span class="btn-text">SIGN IN</span><div class="btn-glow"></div>';
            sounds.success.currentTime = 0;
            sounds.success.play();
            // Here you would typically handle the actual login logic
            console.log('Login attempted');
        }, 2000);
    });

    // Add random VHS glitch effect
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance of glitch
            document.querySelector('.login-box').style.transform = `translateX(${Math.random() * 4 - 2}px)`;
            setTimeout(() => {
                document.querySelector('.login-box').style.transform = 'translateX(0)';
            }, 50);
        }
    }, 1000);

    // Initialize scan line
    createScanLine();
}); 