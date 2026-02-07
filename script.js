/**
 * Valentine's Day Website for Lolo
 * Interactive JavaScript for playful persistence mechanics and celebrations
 */

// ============================================
// State Management
// ============================================
const state = {
    noButtonHoverCount: 0,
    noButtonScale: 1,
    musicPlaying: false,
    particleInterval: null,
    catEmojis: {
        pleading: '🥺',
        sad: '😿',
        happy: '😻',
        love: '😽'
    }
};

// ============================================
// Persuasive Messages
// ============================================
const persuasiveMessages = [
    "Are you sure? 🥺",
    "The cat will be sad... 😿",
    "Please? Pretty please? 🐱",
    "Think about all the fun we'll have! ✨",
    "One more chance? 💝",
    "The cat is giving you the puppy eyes! 👀",
    "But... but... I got you a virtual cat! 🐈",
    "Don't break my heart! 💔",
    "I promise to be the best Valentine! 🌟",
    "The cat says yes even if you won't! 😺"
];

// ============================================
// DOM Elements
// ============================================
const elements = {
    yesBtn: document.getElementById('yes-btn'),
    noBtn: document.getElementById('no-btn'),
    questionCard: document.querySelector('.question-card'),
    celebration: document.getElementById('celebration'),
    persuasiveMessage: document.getElementById('persuasive-message'),
    catImage: document.getElementById('cat-image'),
    musicToggle: document.getElementById('music-toggle'),
    backgroundMusic: document.getElementById('background-music'),
    particlesContainer: document.getElementById('particles-container')
};

// ============================================
// Particle System
// ============================================

/**
 * Create a floating heart particle
 */
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random heart/sparkle emoji
    const particles = ['💕', '💖', '💗', '💝', '✨', '💫', '⭐'];
    particle.textContent = particles[Math.floor(Math.random() * particles.length)];

    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.fontSize = (Math.random() * 20 + 15) + 'px';

    // Random animation delay
    particle.style.animationDelay = Math.random() * 2 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 4) + 's';

    elements.particlesContainer.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 7000);
}

/**
 * Start particle generation
 */
function startParticles() {
    // Create initial particles
    for (let i = 0; i < 5; i++) {
        createParticle();
    }

    // Continue creating particles
    state.particleInterval = setInterval(createParticle, 800);
}

/**
 * Create confetti explosion for celebration
 */
function createConfetti() {
    const colors = ['#FFC9DE', '#FFB3D1', '#C5A8D6', '#E5D4ED', '#D4F1E8'];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 20);
    }
}

// ============================================
// Music Controls
// ============================================

/**
 * Initialize music (with user interaction for browser auto-play policies)
 */
function initMusic() {
    elements.musicToggle.addEventListener('click', toggleMusic);

    // Try to play music on first user interaction
    document.addEventListener('click', () => {
        if (!state.musicPlaying) {
            playMusic();
        }
    }, { once: true });
}

/**
 * Play background music
 */
function playMusic() {
    elements.backgroundMusic.play().then(() => {
        state.musicPlaying = true;
        elements.musicToggle.classList.remove('muted');
    }).catch(err => {
        console.log('Music autoplay prevented:', err);
        // Music will play when user clicks the toggle
    });
}

/**
 * Toggle music on/off
 */
function toggleMusic() {
    if (state.musicPlaying) {
        elements.backgroundMusic.pause();
        state.musicPlaying = false;
        elements.musicToggle.classList.add('muted');
    } else {
        playMusic();
    }
}

// ============================================
// No Button Evasion Mechanics
// ============================================

/**
 * Get random position within the card bounds
 */
function getRandomPosition() {
    const card = elements.questionCard;
    const cardRect = card.getBoundingClientRect();
    const button = elements.noBtn;

    // Get button dimensions (current size after scaling)
    const buttonWidth = button.offsetWidth * state.noButtonScale;
    const buttonHeight = button.offsetHeight * state.noButtonScale;

    // Calculate safe boundaries (within the card with padding)
    const padding = 20;
    const minX = cardRect.left + padding;
    const maxX = cardRect.right - buttonWidth - padding;
    const minY = cardRect.top + padding + 100; // Below the question text
    const maxY = cardRect.bottom - buttonHeight - padding;

    // Generate random position within card bounds
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;

    return { x, y };
}

/**
 * Move the No button to a random position
 */
function moveNoButton() {
    const pos = getRandomPosition();

    // First time: switch to absolute positioning
    if (!elements.noBtn.classList.contains('moving')) {
        elements.noBtn.classList.add('moving');
        elements.noBtn.style.position = 'fixed';
    }

    elements.noBtn.style.left = pos.x + 'px';
    elements.noBtn.style.top = pos.y + 'px';
    elements.noBtn.style.transition = 'all 0.3s ease';
}

/**
 * Shrink the No button progressively
 */
function shrinkNoButton() {
    state.noButtonScale = Math.max(0.3, state.noButtonScale - 0.1);
    elements.noBtn.style.transform = `scale(${state.noButtonScale})`;
}

/**
 * Update persuasive message
 */
function updatePersuasiveMessage() {
    const messageIndex = Math.min(
        state.noButtonHoverCount,
        persuasiveMessages.length - 1
    );
    elements.persuasiveMessage.textContent = persuasiveMessages[messageIndex];
    elements.persuasiveMessage.style.color = '#FF69B4';
}

/**
 * Change cat emoji to sad/pleading
 */
function changeCatImage() {
    const emojis = [state.catEmojis.pleading, state.catEmojis.sad, state.catEmojis.love];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    elements.catImage.textContent = randomEmoji;
}

/**
 * Handle No button hover/touch
 */
function handleNoButtonInteraction(event) {
    event.preventDefault();

    state.noButtonHoverCount++;

    // Update persuasive message
    updatePersuasiveMessage();

    // Move button
    moveNoButton();

    // Shrink button (but not too small)
    if (state.noButtonHoverCount % 2 === 0) {
        shrinkNoButton();
    }

    // Change cat image every few hovers
    if (state.noButtonHoverCount % 3 === 0) {
        changeCatImage();
    }

    // Make Yes button slightly larger to encourage clicking it
    if (state.noButtonHoverCount > 3) {
        const yesScale = 1 + (state.noButtonHoverCount * 0.05);
        elements.yesBtn.style.transform = `scale(${Math.min(yesScale, 1.5)})`;
    }
}

/**
 * Initialize No button evasion
 */
function initNoButtonEvasion() {
    // Mouse hover event
    elements.noBtn.addEventListener('mouseenter', handleNoButtonInteraction);

    // Mousemove near button (more aggressive evasion)
    elements.noBtn.addEventListener('mousemove', (event) => {
        if (state.noButtonHoverCount > 0) {
            handleNoButtonInteraction(event);
        }
    });

    // Touch support for mobile
    elements.noBtn.addEventListener('touchstart', (event) => {
        handleNoButtonInteraction(event);
    });

    // Also move on click attempt
    elements.noBtn.addEventListener('click', (event) => {
        event.preventDefault();
        handleNoButtonInteraction(event);
    });
}

// ============================================
// Yes Button - Celebration
// ============================================

/**
 * Handle Yes button click - Show celebration
 */
function handleYesClick() {
    // Hide question card
    elements.questionCard.style.display = 'none';

    // Show celebration
    elements.celebration.classList.remove('hidden');

    // Create confetti explosion
    createConfetti();

    // Intensify particles
    clearInterval(state.particleInterval);
    state.particleInterval = setInterval(createParticle, 200);

    // Change cat to happy
    elements.catImage.textContent = state.catEmojis.happy;

    // Try to boost music volume or play victory sound (if music is playing)
    if (state.musicPlaying) {
        elements.backgroundMusic.volume = 1;
    } else {
        // Try to start music on celebration
        playMusic();
    }

    // Scroll to top to ensure celebration is visible
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Initialize Yes button
 */
function initYesButton() {
    elements.yesBtn.addEventListener('click', handleYesClick);
}

// ============================================
// Initialization
// ============================================

/**
 * Initialize all features
 */
function init() {
    // Start particle effects
    startParticles();

    // Initialize music controls
    initMusic();

    // Initialize button interactions
    initNoButtonEvasion();
    initYesButton();

    // Set initial music volume
    elements.backgroundMusic.volume = 0.5;

    console.log('Valentine website initialized! 💕');
}

// ============================================
// Run on DOM ready
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// Export for testing (optional)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        state,
        createParticle,
        createConfetti,
        moveNoButton,
        handleYesClick
    };
}
