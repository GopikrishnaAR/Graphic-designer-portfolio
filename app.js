/* ==========================================================================
   GOPIKRISHNA A R — GRAPHIC DESIGNER PORTFOLIO LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initial state: Show Category 1 (Logos & Vector Art) first
  switchCategory('logos');
});

/* Category Switcher: 1. Logos & Vector Art vs 2. Posters & Commercials vs All */
function switchCategory(cat) {
  const tabs = document.querySelectorAll('.cat-tab-btn');
  tabs.forEach(t => t.classList.remove('active'));

  const activeTab = document.querySelector(`.cat-tab-btn[data-category="${cat}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  const catLogos = document.getElementById('categoryLogos');
  const catPosters = document.getElementById('categoryPosters');

  if (cat === 'logos') {
    if (catLogos) catLogos.style.display = 'block';
    if (catPosters) catPosters.style.display = 'none';
  } else if (cat === 'posters') {
    if (catLogos) catLogos.style.display = 'none';
    if (catPosters) catPosters.style.display = 'block';
  } else {
    // Show All
    if (catLogos) catLogos.style.display = 'block';
    if (catPosters) catPosters.style.display = 'block';
  }
}

/* Modal Case Studies Data */
const modalData = {
  'linwan-clothing-logo': {
    title: 'Linwan Clothing — Brand Logo Case Study',
    category: 'CATEGORY 01: LOGO DESIGN (CUSTOMIZED CLOTHING BRAND)',
    images: ['linwan bw.jpg', 'white and black.jpg', 'Untitled-3.jpg', 'MAIN LOGO.jpg'],
    description: `
      <p class="modal-desc-p">
        <strong>Brand Brief:</strong> Custom logo design for <strong>Linwan Clothing</strong>, a customized apparel and streetwear brand. Two distinct identity concepts were crafted:
      </p>
      <div style="background: #FFF9E5; border: 2px solid #000; padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
        <strong style="color: #FF3366; font-size: 1.05rem;">Concept 01: Minimal Geometric Crown Monogram</strong>
        <p class="modal-desc-p" style="margin-top: 0.4rem; margin-bottom: 0;">
          Fuses the letters <strong>'L' and 'W'</strong> into clean 45-degree upward architectural strokes forming a crest shield, crowned with a 5-point emblem for luxury streetwear elegance. Included in Light Mode, Dark Mode, and Special Gold/Orange Edition.
        </p>
      </div>
      <div style="background: #E6FAFF; border: 2px solid #000; padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
        <strong style="color: #00D2FF; font-size: 1.05rem; background: #000; padding: 0.1rem 0.5rem; border-radius: 4px;">Concept 02: Western Outlaw Standoff Monogram</strong>
        <p class="modal-desc-p" style="margin-top: 0.4rem; margin-bottom: 0;">
          Depicts a vintage Wild West standoff between two cowboy silhouettes framing a central interlocking <strong>'LW' serif monogram</strong> and desert horizon. Crafted for rugged denim and vintage apparel.
        </p>
      </div>
    `
  },

  'instatute-app-logo': {
    title: 'InstaTute — App Logo & Icon Case Study',
    category: 'CATEGORY 01: LOGO DESIGN (INSTANT TUTORING APP)',
    images: ['instatute logo.jpg', 'instatute icon.jpg'],
    description: `
      <p class="modal-desc-p">
        <strong>Application Brief:</strong> Brand identity and mobile app icon design for <strong>InstaTute</strong>, an instant online tutoring &amp; educational application.
      </p>
      <p class="modal-desc-p">
        <strong>Symbolic Integration:</strong> The letter 'i' incorporates a <strong>green play-button triangle</strong> instead of a traditional dot, symbolizing instant video tutoring sessions and learning momentum.
      </p>
      <p class="modal-desc-p">
        <strong>App Icon Grid:</strong> Paired with a bold crimson red rounded typography to create a memorable app icon for mobile home screens.
      </p>
    `
  },

  'infant-toys-logo': {
    title: 'Infant Toys & Gifts — E-Commerce Logo Case Study',
    category: 'CATEGORY 01: LOGO DESIGN (E-COMMERCE TOYS & GIFTS STORE)',
    images: ['INFANT AI.jpg'],
    description: `
      <p class="modal-desc-p">
        <strong>E-Commerce Brief:</strong> Brand logo for <strong>Infant Toys &amp; Gifts</strong>, an e-commerce website selling children's toys, games, and customized gifts.
      </p>
      <p class="modal-desc-p">
        <strong>Visual Concept:</strong> Crafted with high-energy liquid slime drip typography and sharp vector outlines. The vibrant acid green <code>#84CC16</code> on black creates an instant playful, energetic look for website headers, gift box packaging, and promotional banners.
      </p>
    `
  },

  'iv-trip-poster': {
    title: 'College IV Tour — Travel & Event Poster',
    category: 'CATEGORY 02: POSTERS & COMMERCIAL ART',
    images: ['IV_POSTER.jpg'],
    description: `
      <p class="modal-desc-p">
        <strong>Event Poster Brief:</strong> Industrial visit / tour poster created for <strong>Nehru College of Managements MCA 2024–2026 Batch</strong>.
      </p>
      <p class="modal-desc-p">
        <strong>Visual Concept:</strong> Dynamic Malayalam event headline <em>"COLLEGE IV APPO POYT VARAA..! Not your normal IV"</em> paired with prominent direction signages for Delhi, Agra, and Jaipur.
      </p>
      <p class="modal-desc-p">
        <strong>Key Visual Elements:</strong> Detailed vector illustrations of the Taj Mahal, Qutub Minar, and a high-precision Indian Railways <strong>WAP-7 Locomotive train render</strong>.
      </p>
    `
  },

  'nivara-poster': {
    title: 'Nivara Naturals — Pure Coconut Oil Poster',
    category: 'CATEGORY 02: POSTERS & COMMERCIAL ART',
    images: ['NIVARA POSTER.jpg'],
    description: `
      <p class="modal-desc-p">
        <strong>Commercial Brief:</strong> High-impact print poster for <strong>Nivara Naturals 100% Pure Coconut Oil</strong>.
      </p>
      <p class="modal-desc-p">
        <strong>Design Highlights:</strong> Deep organic green color palette, 3D oil bottle vector composition, fresh coconut split splash visuals, and regional Malayalam script typography.
      </p>
    `
  },

  'resume-modal': {
    title: 'Gopikrishna A R — Official Curriculum Vitae / Resume',
    category: 'OFFICIAL RESUME & ACADEMIC CREDENTIALS',
    images: ['IMG_20260808_005957.png'],
    description: `
      <div style="background: #FFF9E5; border: 2px solid #000; padding: 1.2rem; border-radius: 12px; margin-bottom: 1rem;">
        <h4 style="font-family: 'Syne', sans-serif; font-size: 1.2rem; color: #000; margin-bottom: 0.4rem;">Gopikrishna A R</h4>
        <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Email:</strong> gk4837908@gmail.com | <strong>Phone:</strong> +91 9048084923</p>
        <p style="font-size: 0.9rem; margin-bottom: 0;"><strong>Location:</strong> Palakkad, Kerala, India | <strong>LinkedIn:</strong> linkedin.com/in/gopikrishna-ar</p>
      </div>

      <h4 style="font-family: 'Syne', sans-serif; font-size: 1.05rem; margin-top: 1rem; color: #FF3366;">EDUCATION</h4>
      <ul style="padding-left: 1.2rem; font-size: 0.9rem; line-height: 1.6;">
        <li><strong>Master of Computer Applications (MCA)</strong> — Bharathiar University (2024–2026) | CGPA: 8.09</li>
        <li><strong>BSc Computer Science</strong> — University of Calicut (2021–2024) | CGPA: 6.208</li>
      </ul>

      <h4 style="font-family: 'Syne', sans-serif; font-size: 1.05rem; margin-top: 1rem; color: #00D2FF;">FEATURED PROJECTS</h4>
      <ul style="padding-left: 1.2rem; font-size: 0.9rem; line-height: 1.6;">
        <li><strong>Real-time Video Analysis:</strong> Object recognition using OpenCV & Machine Learning.</li>
        <li><strong>Code-Architect AI:</strong> Enterprise documentation platform transforming complex repos into 3D visualizations & risk audits.</li>
        <li><strong>LexGuard AI:</strong> Legal assistance platform for law search, FIR drafting & IPC-BNS comparison.</li>
      </ul>

      <h4 style="font-family: 'Syne', sans-serif; font-size: 1.05rem; margin-top: 1rem; color: #FFC700;">TECHNICAL SKILLS</h4>
      <p style="font-size: 0.9rem;">HTML, CSS, JavaScript, jQuery, Python, Java, PHP, Adobe Photoshop, Adobe Illustrator, Canva, Graphic Design.</p>

      <div style="margin-top: 1.5rem; text-align: center;">
        <a href="CV%20-%20GOPIKRISHNA%20AR-.pdf" download="CV - GOPIKRISHNA AR-.pdf" class="btn btn-funky-pink" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
          <i class="fa-solid fa-file-pdf"></i> DOWNLOAD FULL RESUME PDF
        </a>
      </div>
    `
  }
};

function openModal(key) {
  const data = modalData[key];
  if (!data) return;

  const modalBody = document.getElementById('modalBody');
  const overlay = document.getElementById('modalOverlay');

  const imgsHtml = data.images.map(img => `<img src="${img}" alt="${data.title}" onerror="this.src='portfolio main.jpg'">`).join('');

  modalBody.innerHTML = `
    <div class="modal-grid-layout">
      <div class="modal-image-box">
        ${imgsHtml}
      </div>
      <div class="modal-info-box">
        <span class="mini-tag tag-pink" style="display: inline-block; margin-bottom: 0.6rem;">${data.category}</span>
        <h2>${data.title}</h2>
        ${data.description}
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function closeModalOnOverlay(e) {
  if (e.target.id === 'modalOverlay') {
    closeModal();
  }
}

/* Mobile Drawer Navigation Toggle */
function toggleMobileNav() {
  const navLinks = document.getElementById('navLinks');
  const toggleIcon = document.getElementById('toggleIcon');
  if (!navLinks) return;

  navLinks.classList.toggle('mobile-active');
  if (navLinks.classList.contains('mobile-active')) {
    if (toggleIcon) toggleIcon.className = 'fa-solid fa-xmark';
  } else {
    if (toggleIcon) toggleIcon.className = 'fa-solid fa-bars';
  }
}

function closeMobileNav() {
  const navLinks = document.getElementById('navLinks');
  const toggleIcon = document.getElementById('toggleIcon');
  if (navLinks) navLinks.classList.remove('mobile-active');
  if (toggleIcon) toggleIcon.className = 'fa-solid fa-bars';
}

/* CV Download Handler with exact workspace PDF path */
function handleCVDownload(e) {
  showToast('📄 Downloading Gopikrishna A R Resume (PDF)...');

  const pdfPaths = [
    'CV - GOPIKRISHNA AR-.pdf',
    'CV%20-%20GOPIKRISHNA%20AR-.pdf',
    'downloads/Gopikrishna_AR_Resume.pdf',
    'Gopikrishna_AR_Resume.pdf'
  ];

  let downloaded = false;
  for (let p of pdfPaths) {
    try {
      const a = document.createElement('a');
      a.href = p;
      a.download = 'CV - GOPIKRISHNA AR-.pdf';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      downloaded = true;
      break;
    } catch (err) {
      console.warn('Failed path attempt:', p, err);
    }
  }

  // Always offer Interactive Resume Modal as backup
  setTimeout(() => {
    openModal('resume-modal');
  }, 300);
}

/* Copy Text Helper */
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard!`);
  }).catch(() => {
    showToast(`Copied: ${text}`);
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* Handle Form Submission */
function handleFormSubmit(e) {
  e.preventDefault();
  const feedback = document.getElementById('formFeedback');
  feedback.style.display = 'block';
  feedback.style.color = 'var(--accent-pink)';
  feedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message sent successfully!';
  
  e.target.reset();

  setTimeout(() => {
    feedback.style.display = 'none';
  }, 4000);
}
