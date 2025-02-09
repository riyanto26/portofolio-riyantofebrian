const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");
function updateSkillsContent(activeIndex) {
  toggleBtns.forEach((btn) => btn.classList.remove("active"));
  toggleBtns[activeIndex].classList.add("active");
  if (activeIndex === 0) {
    skillsBox.innerHTML = `\n      <ul class="skills-list">\n        <li><div class="skill-card"><div class="card-icon"><img src="icon/java-script.png" alt="logo skill 1" /></div></div></li>\n        <li><div class="skill-card"><div class="card-icon"><img src="icon/java.png" alt="logo skill 3" /></div></div></li>\n        <li><div class="skill-card"><div class="card-icon"><img src="icon/python.png" alt="logo skill 2" /></div></div></li>\n        <li><div class="skill-card"><div class="card-icon"><img src="icon/cplus.png" alt="logo skill 4" /></div></div></li>\n        <li><div class="skill-card"><div class="card-icon"><img src="icon/php.png" alt="logo skill 4" /></div></div></li>\n        <li><div class="skill-card"><div class="card-icon"><img src="icon/html.png" alt="logo skill 4" /></div></div></li>\n        <li><div class="skill-card"><div class="card-icon"><img src="icon/css.png" alt="logo skill 4" /></div></div></li>\n      </ul>\n    `;
  } else if (activeIndex === 1) {
    skillsBox.innerHTML = `\n      <ul class="skills-list">\n      <li><div class="skill-card"><div class="card-icon"><img src="icon/figma.png" alt="logo tool 2" /></div></div></li>\n        <li><div class="skill-card"><div class="card-icon"><img src="icon/visual-studio.png" alt="logo tool 1" /></div></div></li>\n        <li><div class="skill-card"><div class="card-icon"><img src="icon/photoshop.png" alt="logo tool 3" /></div></div></li>\n        <li><div class="skill-card"><div class="card-icon"><img src="icon/illustrator.png" alt="logo tool 4" /></div></div></li>\n      </ul>\n    `;
  }
}
toggleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    updateSkillsContent(index);
  });
});
updateSkillsContent(0);
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme") || "dark";
  body.classList.add(`${savedTheme}-theme`);
  themeToggle.checked = savedTheme === "light";
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  });
});
const paginationButtons = document.querySelectorAll(".pagination button");
const certificateBoxes = document.querySelectorAll(".sertifikat-content .box");
const itemsPerPage = 4;
let currentPage = 1;
const totalPages = Math.ceil(certificateBoxes.length / itemsPerPage);
function showCertificates(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  certificateBoxes.forEach((box, index) => {
    box.style.display =
      index >= startIndex && index < endIndex ? "block" : "none";
  });
}
function updatePaginationButtons() {
  paginationButtons.forEach((button) => button.classList.remove("active"));
  paginationButtons[currentPage - 1].classList.add("active");
}
paginationButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    if (this.textContent === "Next") {
      if (currentPage < totalPages) {
        currentPage++;
      }
    } else {
      currentPage = parseInt(this.textContent);
    }
    showCertificates(currentPage);
    updatePaginationButtons();
  });
});
showCertificates(currentPage);
updatePaginationButtons();
document.getElementById("btn-it").addEventListener("click", function () {
  const itProjects = document.querySelectorAll(".project-it");
  const designProjects = document.querySelectorAll(".project-design");
  itProjects.forEach((project) => (project.style.display = "block"));
  designProjects.forEach((project) => (project.style.display = "none"));
});
document.getElementById("btn-design").addEventListener("click", function () {
  const itProjects = document.querySelectorAll(".project-it");
  const designProjects = document.querySelectorAll(".project-design");
  itProjects.forEach((project) => (project.style.display = "none"));
  designProjects.forEach((project) => (project.style.display = "block"));
});
const btnIT = document.getElementById("btn-it");
const btnDesign = document.getElementById("btn-design");
btnIT.addEventListener("click", function () {
  btnIT.classList.add("active");
  btnDesign.classList.remove("active");
});
btnDesign.addEventListener("click", function () {
  btnDesign.classList.add("active");
  btnIT.classList.remove("active");
});
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll(".portofolio-content img");
images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
  modal.style.display = "none";
};
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("clock-hours").textContent = hours;
  document.getElementById("clock-minutes").textContent = minutes;
  document.getElementById("clock-seconds").textContent = seconds;
}
setInterval(updateClock, 1e3);
updateClock();
