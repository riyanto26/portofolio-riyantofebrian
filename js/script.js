// Ambil elemen <header> dari dokumen
const header = document.querySelector("header");

// Tambahkan event listener pada window untuk mendeteksi scroll
window.addEventListener("scroll", function () {
  // Toggle kelas "sticky" pada header berdasarkan posisi scroll
  // Jika posisi scroll lebih dari 120px, tambahkan kelas "sticky"
  header.classList.toggle("sticky", window.scrollY > 120);
});

// Ambil elemen dengan ID "menu-icon" dan elemen dengan kelas "navlist"
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

// Tambahkan event listener untuk menangani klik pada ikon menu
menu.onclick = () => {
  // Toggle kelas "bx-x" pada ikon menu untuk mengubah tampilannya
  menu.classList.toggle("bx-x");
  // Toggle kelas "active" pada navlist untuk menampilkan/menyembunyikan daftar navigasi
  navlist.classList.toggle("active");
};

// Tambahkan event listener pada window untuk mendeteksi scroll
window.onscroll = () => {
  // Saat scroll terjadi, hapus kelas "bx-x" dari ikon menu dan "active" dari navlist
  // Ini memastikan menu kembali ke keadaan semula saat halaman di-scroll
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

// Ambil elemen yang akan digunakan untuk toggle konten skill berdasarkan tombol yang diklik
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

// Fungsi untuk memperbarui konten skillsBox berdasarkan tombol yang diklik
function updateSkillsContent(activeIndex) {
  // Hapus kelas "active" dari semua tombol untuk mengatur ulang statusnya
  toggleBtns.forEach(btn => btn.classList.remove("active"));

  // Tambahkan kelas "active" ke tombol yang sesuai dengan indeks yang diklik
  toggleBtns[activeIndex].classList.add("active");

  // Perbarui konten dalam skillsBox berdasarkan tombol yang diklik
  if (activeIndex === 0) {
    // Jika tombol pertama (Skills) diklik, tampilkan daftar skills
    skillsBox.innerHTML = `
      <ul class="skills-list">
        <li><div class="skill-card"><div class="card-icon"><img src="icon/java-script.png" alt="logo skill 1" /></div></div></li>
        <li><div class="skill-card"><div class="card-icon"><img src="icon/java.png" alt="logo skill 3" /></div></div></li>
        <li><div class="skill-card"><div class="card-icon"><img src="icon/python.png" alt="logo skill 2" /></div></div></li>
        <li><div class="skill-card"><div class="card-icon"><img src="icon/react.png" alt="logo skill 4" /></div></div></li>
        <li><div class="skill-card"><div class="card-icon"><img src="icon/cplus.png" alt="logo skill 4" /></div></div></li>
        <li><div class="skill-card"><div class="card-icon"><img src="icon/php.png" alt="logo skill 4" /></div></div></li>
        <li><div class="skill-card"><div class="card-icon"><img src="icon/html.png" alt="logo skill 4" /></div></div></li>
        <li><div class="skill-card"><div class="card-icon"><img src="icon/css.png" alt="logo skill 4" /></div></div></li>
      </ul>
    `;
  } else if (activeIndex === 1) {
    // Jika tombol kedua (Tools) diklik, tampilkan daftar tools
    skillsBox.innerHTML = `
      <ul class="skills-list">
        <li><div class="skill-card"><div class="card-icon"><img src="icon/visual-studio.png" alt="logo tool 1" /></div></div></li>
        <li><div class="skill-card"><div class="card-icon"><img src="icon/figma.png" alt="logo tool 2" /></div></div></li>
        <li><div class="skill-card"><div class="card-icon"><img src="icon/photoshop.png" alt="logo tool 3" /></div></div></li>
        <li><div class="skill-card"><div class="card-icon"><img src="icon/illustrator.png" alt="logo tool 4" /></div></div></li>
      </ul>
    `;
  }
}

// Tambahkan event listener pada setiap tombol untuk mendeteksi klik dan memperbarui konten
toggleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Perbarui konten skillsBox sesuai tombol yang diklik
    updateSkillsContent(index);
  });
});

// Jalankan fungsi untuk menampilkan konten awal (Skills)
updateSkillsContent(0);

// tema
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Cek dan terapkan tema yang tersimpan di localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.classList.add(`${savedTheme}-theme`);

  // Ubah status checkbox sesuai tema yang tersimpan
  themeToggle.checked = savedTheme === 'light';

  themeToggle.addEventListener('change', function() {
      if (this.checked) {
          body.classList.remove('dark-theme');
          body.classList.add('light-theme');
          localStorage.setItem('theme', 'light');
      } else {
          body.classList.remove('light-theme');
          body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark');
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const scrollBtnContainer = document.getElementById('scrollBtnContainer');
  const scrollToggle = document.getElementById('scrollToggle');
  
  // Function to check if the user has scrolled past the landing page
  function checkScrollPosition() {
      const landingPageHeight = window.innerHeight; // Assuming landing page is one viewport tall
      const currentScroll = window.scrollY;

      if (currentScroll >= landingPageHeight) {
          scrollBtnContainer.style.display = 'none';
      } else {
          scrollBtnContainer.style.display = 'flex';
      }
  }

  
  window.addEventListener('scroll', function() {
      checkScrollPosition();
  });

  // Initial check in case the page is loaded scrolled down
  checkScrollPosition();

  // Scroll on toggle
  scrollToggle.addEventListener('change', function() {
      if (this.checked) {
          window.scrollBy({
              top: window.innerHeight,
              left: 0,
              behavior: 'smooth'
          });

          // Optionally, hide the button immediately after scrolling
          setTimeout(() => {
              scrollBtnContainer.style.display = 'none';
          }, 500);
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('gallery-modal');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.getElementById('close-modal');

  // Fungsi untuk membuka modal
  function openModal(src) {
      modal.style.display = 'flex';
      modalImage.src = src;
  }

  // Fungsi untuk menutup modal
  function closeModalFunction() {
      modal.style.display = 'none';
  }

  // Event listener untuk gambar
  document.querySelectorAll('.gallery-image').forEach(image => {
      image.addEventListener('click', () => {
          const fullsizeSrc = image.getAttribute('data-fullsize');
          openModal(fullsizeSrc);
      });
  });

  // Event listener untuk tombol close
  closeModal.addEventListener('click', closeModalFunction);

  // Event listener untuk klik di luar modal
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          closeModalFunction();
      }
  });
});