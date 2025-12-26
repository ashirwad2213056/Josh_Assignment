// Reusable data structures
const projectsData = [
  {
    title: "How To Make Flyer Design",
    description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit. Sed Sunt Lorem Ipsum...",
    tags: ["TypeScript", "ReactJs", "NextJs", "CSS"],
    image: "assets/images/Image.svg",
    // gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "How To Make Flyer Design",
    description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit. Sed Sunt Lorem Ipsum...",
    tags: ["TypeScript", "ReactJs", "NextJs", "CSS"],
    image: "assets/images/Image1.png"
    // gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "How To Make Flyer Design",
    description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit. Sed Sunt Lorem Ipsum...",
    tags: ["TypeScript", "ReactJs", "NextJs", "CSS"],
    image: "assets/images/Image2.png"
    // gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",

  },
  {
    title: "How To Make Flyer Design",
    description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit. Sed Sunt Lorem Ipsum...",
    tags: ["HTML", "MongoDB"],
    image: "assets/images/Image3.png"
    // gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    title: "How To Make Flyer Design",
    description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit. Sed Sunt Lorem Ipsum...",
    tags: ["TypeScript", "ReactJs", "NextJs", "CSS"],
    image: "assets/images/Image4.png",
    // gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    title: "How To Make Flyer Design",
    description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit. Sed Sunt Lorem Ipsum...",
    tags: ["HTML", "MongoDB"],
    image: "assets/images/Image5.png",
    // gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  },
]

const recommendationsData = [
  {
    name: "James Goose",
    title: "Graphic Designer",
    rating: 5,
    review: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Aenean Massa. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes. Aenean ...",
    image: "assets/images/Image.svg",
    // gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    name: "Tiana Philips",
    title: "Photographer",
    rating: 5,
    review: "Amazing Work!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Aenean Massa. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes. Aenean ...",
    image: "assets/images/Image2.png",
    // gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    name: "Tabin Westervelt",
    title: "Business Man",
    rating: 5,
    review: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Aenean Massa. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes. Aenean ...",
    image:"assets/images/Image3.png",
    // gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    name: "Sarah Johnson",
    title: "Marketing Director",
    rating: 5,
    review: "Exceptional Service!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Aenean Massa. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes. Aenean ...",
    image:"assets/images/Image1.png",
    // gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
]

// Reusable component creator
function createProjectCard(project) {
  return `
    <div class="project-card">
      <div class="project-image"
           style="background-image: url('${project.image}')">
      </div>

      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>

        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}


function createRecommendationCard(recommendation) {
  return `
        <div class="recommendation-card">
            <div class="stars">${"★".repeat(recommendation.rating)}</div>
            <h3 class="recommendation-title">${recommendation.review}</h3>
            <p class="recommendation-text">${recommendation.text}</p>
            <div class="reviewer">
                <div class="reviewer-image" style="background: url('${recommendation.image}')"></div>
                <div class="reviewer-info">
                    <div class="reviewer-name">${recommendation.name}</div>
                    <div class="reviewer-title">${recommendation.title}</div>
                </div>
            </div>
        </div>
    `
}

// Initialize projects
function initProjects() {
  const projectsGrid = document.getElementById("projectsGrid")
  projectsGrid.innerHTML = projectsData.map((project) => createProjectCard(project)).join("")
}

// Initialize recommendations slider
let currentSlide = 0
function initRecommendations() {
  const track = document.getElementById("recommendationsTrack")
  const dotsContainer = document.getElementById("sliderDots")

  track.innerHTML = recommendationsData.map((rec) => createRecommendationCard(rec)).join("")

  // Create dots
  const slidesCount =
    window.innerWidth <= 640
      ? recommendationsData.length
      : window.innerWidth <= 968
        ? Math.ceil(recommendationsData.length / 2)
        : Math.ceil(recommendationsData.length / 3)

  dotsContainer.innerHTML = Array(slidesCount)
    .fill(0)
    .map((_, i) => `<span class="dot ${i === 0 ? "active" : ""}" data-slide="${i}"></span>`)
    .join("")

  // Dot click handlers
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      currentSlide = Number.parseInt(dot.dataset.slide)
      updateSlider()
    })
  })

  // Auto slide
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slidesCount
    updateSlider()
  }, 5000)
}

function updateSlider() {
  const track = document.getElementById("recommendationsTrack")
  const dots = document.querySelectorAll(".dot")
  const cardWidth = window.innerWidth <= 640 ? 100 : window.innerWidth <= 968 ? 50 : 33.333

  track.style.transform = `translateX(-${currentSlide * cardWidth}%)`

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide)
  })
}

// Mobile navigation toggle
function initMobileNav() {
  const toggle = document.getElementById("mobileToggle")
  const nav = document.getElementById("navMenu")
  const navLinks = document.querySelectorAll(".nav-link")

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active")
  })

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active")

      // Update active link
      navLinks.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")
    })
  })
}

// Smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Form submission
function initForm() {
  const form = document.getElementById("contactForm")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Message sent successfully!")
    form.reset()
  })
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all cards
  document.querySelectorAll(".project-card, .recommendation-card, .stat-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Responsive slider update
function handleResize() {
  updateSlider()
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  initProjects()
  initRecommendations()
  initMobileNav()
  initSmoothScroll()
  initForm()

  // Delay animations slightly for better performance
  setTimeout(initScrollAnimations, 100)
})

window.addEventListener("resize", handleResize)
